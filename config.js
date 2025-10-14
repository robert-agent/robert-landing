// Tailwind CSS Configuration - Morning Grace Theme
// Bright, warm, childhood bliss aesthetic
tailwind.config = {
    theme: {
        extend: {
            colors: {
                // Primary Colors - Morning Grace Palette
                'sky-bright': '#87CEEB',        // Open morning sky, hopeful
                'cream-soft': '#FFF8E7',        // Soft background, gentle warmth
                'meadow': '#7CB342',            // Fresh grass, growth
                'sunrise': '#FFB74D',           // Morning sun, energy
                'lavender': '#B39DDB',          // Soft calm, learning
                'coral': '#FF8A80',             // Warmth, human connection

                // Neutral Colors
                'charcoal': '#424242',          // Primary text (high contrast on cream)
                'stone': '#757575',             // Secondary text
                'cloud': '#FFFFFF',             // Pure white for cards

                // Life Area Colors (Updated for Light Mode)
                'job-blue': '#5E92F3',          // Job/Career - Professional sky blue
                'health-green': '#66BB6A',      // Health - Vibrant green
                'love-pink': '#FF8A80',         // Love - Warm coral
                'learning-purple': '#AB47BC',   // Learning - Curious purple

                // Accent Colors
                'accent-warm': '#FFAB40',       // Warm CTAs
                'accent-cool': '#42A5F5',       // Cool accents
            },
            fontFamily: {
                'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
            },
            spacing: {
                'xs': '8px',
                's': '16px',
                'm': '24px',
                'l': '32px',
                'xl': '48px',
                'xxl': '64px',
                'xxxl': '96px',
            }
        }
    }
}
