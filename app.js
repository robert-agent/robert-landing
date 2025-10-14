// Robert Landing Page - Custom JavaScript
// Handles smooth scrolling, animations, and interactive elements

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                const navHeight = document.querySelector('nav').offsetHeight;
                const targetPosition = target.offsetTop - navHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                const mobileMenuOpen = document.querySelector('[x-data]').__x.$data.mobileMenuOpen;
                if (mobileMenuOpen) {
                    document.querySelector('[x-data]').__x.$data.mobileMenuOpen = false;
                }
            }
        });
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe sections and cards
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    document.querySelectorAll('.card-hover').forEach(card => {
        observer.observe(card);
    });

    // Add stagger effect to feature cards
    const featureCards = document.querySelectorAll('.card-hover');
    featureCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 100}ms`;
    });

    // Track scroll position for parallax effects
    let ticking = false;
    let scrollPos = 0;

    window.addEventListener('scroll', () => {
        scrollPos = window.scrollY;

        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateParallax(scrollPos);
                ticking = false;
            });
            ticking = true;
        }
    });

    function updateParallax(scrollPos) {
        // Subtle parallax effect on hero gradient
        const gradient = document.querySelector('.gradient-glow');
        if (gradient) {
            const offset = scrollPos * 0.3;
            gradient.style.transform = `translateY(${offset}px)`;
        }
    }

    // Initialize waiting list filter
    const waitingListFilter = new WaitingListFilter();
    let currentQuestionIndex = 0;
    let userAnswers = [];

    // CTA button tracking and filtering
    const ctaButtons = document.querySelectorAll('.btn-primary');
    ctaButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('CTA Button clicked:', button.textContent.trim());

            // Start eligibility check flow
            startEligibilityCheck();
        });
    });

    // Feature card hover tracking
    const cards = document.querySelectorAll('.card-hover');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            console.log('Feature card hovered:', card.querySelector('h3')?.textContent);
        });
    });

    // Dynamic demo animation in hero section
    animateDemoSteps();

    // Eligibility check flow functions
    function startEligibilityCheck() {
        // Reset state
        currentQuestionIndex = 0;
        userAnswers = [];

        // Show questionnaire modal
        showQuestionnaireModal();
    }

    function showQuestionnaireModal() {
        const questions = waitingListFilter.getUserProfileQuestions();

        if (currentQuestionIndex >= questions.length) {
            // All questions answered, process results
            processEligibility();
            return;
        }

        const question = questions[currentQuestionIndex];
        showModal(createQuestionHTML(question));
    }

    function createQuestionHTML(question) {
        const optionsHTML = question.options.map(option => `
            <button class="eligibility-option w-full text-left px-6 py-4 bg-carbon border-2 border-slate-gray/20 rounded-lg hover:border-electric-cyan transition-all mb-3" data-value="${option.value}">
                <span class="text-soft-white font-medium">${option.label}</span>
            </button>
        `).join('');

        return `
            <div class="max-w-2xl mx-auto">
                <div class="text-center mb-8">
                    <div class="inline-flex items-center space-x-2 px-4 py-2 bg-carbon/50 border border-quantum-blue/30 rounded-full mb-4">
                        <span class="text-sm text-slate-gray">Question ${currentQuestionIndex + 1} of ${waitingListFilter.getUserProfileQuestions().length}</span>
                    </div>
                    <h3 class="text-2xl md:text-3xl font-semibold mb-2">${question.question}</h3>
                    <p class="text-slate-gray">Help us understand if Robert is right for you</p>
                </div>
                <div class="space-y-3">
                    ${optionsHTML}
                </div>
            </div>
        `;
    }

    function showModal(content) {
        // Create modal backdrop
        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-6 bg-deep-space/95 backdrop-blur-sm';
        modal.innerHTML = `
            <div class="modal-content bg-carbon border border-slate-gray/20 rounded-xl p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto">
                ${content}
            </div>
        `;

        document.body.appendChild(modal);

        // Add click handlers to options
        modal.querySelectorAll('.eligibility-option').forEach(button => {
            button.addEventListener('click', () => {
                handleAnswer(button.dataset.value);
            });
        });

        // Fade in animation
        setTimeout(() => {
            modal.style.opacity = '1';
        }, 10);
    }

    function handleAnswer(value) {
        const questions = waitingListFilter.getUserProfileQuestions();
        const question = questions[currentQuestionIndex];

        userAnswers.push({
            questionId: question.id,
            value: value
        });

        // Remove current modal
        const modal = document.querySelector('.fixed.inset-0');
        if (modal) {
            modal.remove();
        }

        // Move to next question
        currentQuestionIndex++;
        showQuestionnaireModal();
    }

    async function processEligibility() {
        // Show loading state
        showModal(`
            <div class="text-center py-12">
                <div class="w-16 h-16 border-4 border-electric-cyan border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p class="text-slate-gray">Checking your eligibility...</p>
            </div>
        `);

        // Run eligibility check
        const result = await waitingListFilter.runEligibilityCheck(userAnswers);

        // Remove loading modal
        const loadingModal = document.querySelector('.fixed.inset-0');
        if (loadingModal) {
            setTimeout(() => loadingModal.remove(), 500);
        }

        // Show result after brief delay
        setTimeout(() => {
            showResultModal(result);
        }, 800);
    }

    function showResultModal(result) {
        const message = result.message;
        const iconHTML = result.eligible
            ? '<div class="w-20 h-20 bg-success-green/10 border-2 border-success-green rounded-full flex items-center justify-center mx-auto mb-6"><svg class="w-10 h-10 text-success-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></div>'
            : '<div class="w-20 h-20 bg-electric-cyan/10 border-2 border-electric-cyan rounded-full flex items-center justify-center mx-auto mb-6"><svg class="w-10 h-10 text-electric-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg></div>';

        const downloadUrl = 'https://github.com/robert-agent/robert-releases-canary/releases/download/0.1.1-canary/robert-canary-bdd2_0.1.1_aarch64.dmg';

        const ctaButton = result.eligible
            ? `<a href="${downloadUrl}" class="btn-primary inline-block px-8 py-4 bg-electric-cyan text-deep-space font-semibold rounded-lg text-lg hover:scale-105 transition-transform" download>
                <svg class="w-6 h-6 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
                ${message.cta}
            </a>`
            : `<button onclick="window.showWaitlistForm()" class="btn-primary inline-block px-8 py-4 bg-quantum-blue text-soft-white font-semibold rounded-lg text-lg hover:scale-105 transition-transform">${message.cta}</button>`;

        const noteHTML = message.note ? `<p class="text-sm text-slate-gray mt-4">${message.note}</p>` : '';

        showModal(`
            <div class="max-w-xl mx-auto text-center">
                ${iconHTML}
                <h3 class="text-3xl font-semibold mb-4">${message.title}</h3>
                <p class="text-xl text-slate-gray mb-8 leading-relaxed">${message.body}</p>
                ${ctaButton}
                ${noteHTML}
                <button onclick="this.closest('.fixed').remove()" class="mt-6 text-slate-gray hover:text-soft-white transition-colors">Close</button>
            </div>
        `);
    }

    // Waitlist form
    window.showWaitlistForm = function() {
        const modal = document.querySelector('.fixed.inset-0');
        if (modal) modal.remove();

        showModal(`
            <div class="max-w-xl mx-auto">
                <h3 class="text-3xl font-semibold mb-4 text-center">Join the Waitlist</h3>
                <p class="text-slate-gray mb-8 text-center">We'll notify you when Robert is ready for you!</p>
                <form id="waitlist-form" class="space-y-4">
                    <div>
                        <label class="block text-sm font-medium mb-2">Email</label>
                        <input type="email" required class="w-full px-4 py-3 bg-deep-space border border-slate-gray/20 rounded-lg text-soft-white focus:border-electric-cyan focus:outline-none transition-colors" placeholder="your@email.com">
                    </div>
                    <div>
                        <label class="block text-sm font-medium mb-2">Name (optional)</label>
                        <input type="text" class="w-full px-4 py-3 bg-deep-space border border-slate-gray/20 rounded-lg text-soft-white focus:border-electric-cyan focus:outline-none transition-colors" placeholder="Your name">
                    </div>
                    <button type="submit" class="w-full px-8 py-4 bg-electric-cyan text-deep-space font-semibold rounded-lg text-lg hover:scale-105 transition-transform">
                        Join Waitlist
                    </button>
                </form>
                <button onclick="this.closest('.fixed').remove()" class="mt-6 text-slate-gray hover:text-soft-white transition-colors w-full">Close</button>
            </div>
        `);

        // Handle form submission
        document.getElementById('waitlist-form').addEventListener('submit', (e) => {
            e.preventDefault();
            // Here you would send to your backend/email service
            const modal = document.querySelector('.fixed.inset-0');
            if (modal) modal.remove();

            showModal(`
                <div class="text-center py-8">
                    <div class="w-20 h-20 bg-success-green/10 border-2 border-success-green rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg class="w-10 h-10 text-success-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                    </div>
                    <h3 class="text-2xl font-semibold mb-4">You're on the list!</h3>
                    <p class="text-slate-gray mb-6">We'll be in touch soon.</p>
                    <button onclick="this.closest('.fixed').remove()" class="text-electric-cyan hover:text-soft-white transition-colors">Close</button>
                </div>
            `);
        });
    };
});

// Animate the demo steps in the hero section
function animateDemoSteps() {
    const steps = [
        { selector: 'step-1', delay: 2000 },
        { selector: 'step-2', delay: 4000 },
        { selector: 'step-3', delay: 6000 }
    ];

    // This is a simple demo - in production you'd make this more sophisticated
    setInterval(() => {
        const demoSteps = document.querySelectorAll('.bg-deep-space .flex.items-start');
        if (demoSteps.length >= 3) {
            // Cycle through animation states
            demoSteps.forEach((step, index) => {
                const pulse = step.querySelector('.pulse-glow');
                const completed = step.querySelector('.bg-success-green');
                const pending = step.querySelector('.bg-slate-gray');

                // Simple cycling animation
                setTimeout(() => {
                    if (pulse) {
                        pulse.classList.remove('pulse-glow');
                        pulse.classList.add('bg-success-green');
                        pulse.classList.remove('bg-electric-cyan');
                    }
                }, index * 2000);
            });
        }
    }, 8000);
}

// Utility: Detect user preference for reduced motion
function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// Disable animations if user prefers reduced motion
if (prefersReducedMotion()) {
    document.documentElement.style.setProperty('--transition-fast', '0ms');
    document.documentElement.style.setProperty('--transition-medium', '0ms');

    // Remove animation classes
    document.querySelectorAll('.fade-in, .pulse-glow').forEach(el => {
        el.style.animation = 'none';
    });
}

// Keyboard navigation enhancement
document.addEventListener('keydown', (e) => {
    // Add visual feedback for keyboard navigation
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});

// Performance: Lazy load images if any are added in the future
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

console.log('Robert landing page loaded successfully');
