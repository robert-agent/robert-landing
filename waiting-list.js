// Waiting List Filtering System for Robert Alpha Access
// Filters for ideal early alpha users: modern Mac users with realistic expectations

class WaitingListFilter {
    constructor() {
        this.eligibilityScore = 0;
        this.rejectionReasons = [];
        this.systemInfo = null;
    }

    // Detect system requirements
    async detectSystem() {
        const userAgent = navigator.userAgent;
        const platform = navigator.platform;

        this.systemInfo = {
            isMac: /Mac/.test(platform),
            isAppleSilicon: null, // Will be detected via API
            osVersion: null,
            year: null
        };

        // Parse macOS version if available
        const macMatch = userAgent.match(/Mac OS X (\d+)[_.](\d+)/);
        if (macMatch) {
            this.systemInfo.osVersion = {
                major: parseInt(macMatch[1]),
                minor: parseInt(macMatch[2])
            };
        }

        return this.systemInfo;
    }

    // Check if system meets basic requirements
    checkSystemRequirements() {
        if (!this.systemInfo.isMac) {
            this.rejectionReasons.push('not_mac');
            return false;
        }

        // macOS Ventura (13.0) or later (released late 2022)
        // macOS Sonoma (14.0) is 2023
        // macOS Sequoia (15.0) is 2024
        if (this.systemInfo.osVersion && this.systemInfo.osVersion.major < 13) {
            this.rejectionReasons.push('old_os');
            return false;
        }

        // Bonus points for latest OS (14+)
        if (this.systemInfo.osVersion && this.systemInfo.osVersion.major >= 14) {
            this.eligibilityScore += 20;
        }

        this.eligibilityScore += 30;
        return true;
    }

    // User profile questionnaire - filter out high-expectation users
    getUserProfileQuestions() {
        return [
            {
                id: 'role',
                type: 'select',
                question: 'What best describes you?',
                options: [
                    { value: 'professional', label: 'Working professional', score: 20, reject: false },
                    { value: 'student', label: 'Student', score: 15, reject: false },
                    { value: 'researcher', label: 'AI/ML Researcher', score: 0, reject: true, reason: 'high_expectations' },
                    { value: 'engineer', label: 'Software Engineer', score: 0, reject: true, reason: 'high_expectations' },
                    { value: 'data_scientist', label: 'Data Scientist', score: 5, reject: true, reason: 'high_expectations' },
                    { value: 'entrepreneur', label: 'Entrepreneur/Founder', score: 10, reject: false },
                    { value: 'creator', label: 'Content Creator', score: 15, reject: false },
                    { value: 'other', label: 'Other', score: 10, reject: false }
                ]
            },
            {
                id: 'tech_savvy',
                type: 'select',
                question: 'How would you describe your technical expertise?',
                options: [
                    { value: 'beginner', label: 'Beginner - I use basic apps', score: 20, reject: false },
                    { value: 'intermediate', label: 'Intermediate - Comfortable with most software', score: 15, reject: false },
                    { value: 'advanced', label: 'Advanced - I customize and script things', score: 5, reject: true, reason: 'power_user' },
                    { value: 'expert', label: 'Expert - I build software/systems', score: 0, reject: true, reason: 'power_user' }
                ]
            },
            {
                id: 'ai_experience',
                type: 'select',
                question: 'How much have you used AI assistants?',
                options: [
                    { value: 'none', label: 'Never used one', score: 20, reject: false },
                    { value: 'occasional', label: 'Occasionally (ChatGPT, etc.)', score: 15, reject: false },
                    { value: 'regular', label: 'Daily user of AI tools', score: 10, reject: false },
                    { value: 'power', label: 'I use multiple AI tools extensively', score: 0, reject: true, reason: 'high_expectations' },
                    { value: 'developer', label: 'I build with AI APIs', score: 0, reject: true, reason: 'high_expectations' }
                ]
            },
            {
                id: 'use_case',
                type: 'select',
                question: 'What would you use Robert for most?',
                options: [
                    { value: 'shopping', label: 'Online shopping and price comparison', score: 20, reject: false },
                    { value: 'booking', label: 'Travel and restaurant booking', score: 20, reject: false },
                    { value: 'research', label: 'Simple research tasks', score: 15, reject: false },
                    { value: 'automation', label: 'Complex workflow automation', score: 5, reject: true, reason: 'power_user' },
                    { value: 'testing', label: 'Testing/evaluating the technology', score: 0, reject: true, reason: 'high_expectations' }
                ]
            },
            {
                id: 'expectations',
                type: 'select',
                question: 'What are your expectations for this alpha?',
                options: [
                    { value: 'curious', label: 'Just curious to try something new', score: 20, reject: false },
                    { value: 'helpful', label: 'Hope it saves me some time', score: 20, reject: false },
                    { value: 'specific', label: 'Solve a specific problem I have', score: 15, reject: false },
                    { value: 'production', label: 'Looking for a production-ready tool', score: 0, reject: true, reason: 'high_expectations' },
                    { value: 'evaluate', label: 'Evaluate for professional/research use', score: 0, reject: true, reason: 'high_expectations' }
                ]
            }
        ];
    }

    // Evaluate user profile answers
    evaluateProfile(answers) {
        const questions = this.getUserProfileQuestions();

        for (const answer of answers) {
            const question = questions.find(q => q.id === answer.questionId);
            if (!question) continue;

            const option = question.options.find(o => o.value === answer.value);
            if (!option) continue;

            if (option.reject) {
                this.rejectionReasons.push(option.reason);
            }

            this.eligibilityScore += option.score;
        }
    }

    // Calculate final eligibility
    isEligible() {
        // If any rejection reasons exist, user is not eligible
        if (this.rejectionReasons.length > 0) {
            return {
                eligible: false,
                score: this.eligibilityScore,
                reasons: this.rejectionReasons,
                message: this.getRejectionMessage()
            };
        }

        // Need minimum score of 50 to be eligible
        const eligible = this.eligibilityScore >= 50;

        return {
            eligible,
            score: this.eligibilityScore,
            reasons: eligible ? [] : ['low_score'],
            message: eligible ? this.getApprovalMessage() : this.getRejectionMessage()
        };
    }

    // Get friendly rejection message
    getRejectionMessage() {
        if (this.rejectionReasons.includes('not_mac')) {
            return {
                title: 'Join the Waitlist',
                body: 'Robert Alpha currently only supports Mac. We\'ll notify you when we expand to other platforms!',
                cta: 'Join Waitlist'
            };
        }

        if (this.rejectionReasons.includes('old_os')) {
            return {
                title: 'Update Required',
                body: 'Robert Alpha requires macOS Ventura (13.0) or later for the best experience. Please update your system or join the waitlist!',
                cta: 'Join Waitlist'
            };
        }

        if (this.rejectionReasons.includes('high_expectations') ||
            this.rejectionReasons.includes('power_user')) {
            return {
                title: 'You\'re on the Waitlist!',
                body: 'We want to ensure Robert meets your needs. Our team will reach out when we\'re ready for power users and professionals.',
                cta: 'Join Priority Waitlist',
                note: 'Given your background, we\'d love your feedback in a future beta.'
            };
        }

        return {
            title: 'Join the Waitlist',
            body: 'We\'re being selective with our alpha to ensure the best experience. Join the waitlist and we\'ll be in touch soon!',
            cta: 'Join Waitlist'
        };
    }

    // Get approval message
    getApprovalMessage() {
        return {
            title: 'You\'re Eligible!',
            body: 'Great news! You qualify for Robert Alpha access. Download and start automating your browser tasks.',
            cta: 'Download Now'
        };
    }

    // Complete eligibility check flow
    async runEligibilityCheck(profileAnswers) {
        // Step 1: Check system requirements
        await this.detectSystem();
        const systemOk = this.checkSystemRequirements();

        if (!systemOk) {
            return this.isEligible();
        }

        // Step 2: Evaluate user profile
        this.evaluateProfile(profileAnswers);

        // Step 3: Return final decision
        return this.isEligible();
    }
}

// Export for use in main app
window.WaitingListFilter = WaitingListFilter;
