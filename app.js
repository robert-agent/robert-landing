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

    // CTA button tracking (console log for demonstration)
    const ctaButtons = document.querySelectorAll('.btn-primary');
    ctaButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            console.log('CTA Button clicked:', button.textContent.trim());
            // Add analytics tracking here if needed
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
