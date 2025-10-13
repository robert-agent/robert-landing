// Tailwind CSS Configuration
tailwind.config = {
    theme: {
        extend: {
            colors: {
                // Primary Colors
                'deep-space': '#0B1220',
                'quantum-blue': '#4A90E2',
                'electric-cyan': '#00D9FF',

                // Secondary Colors
                'slate-gray': '#7C8BA1',
                'soft-white': '#F8F9FA',
                'carbon': '#1A1A1A',

                // Life Area Colors
                'success-green': '#00E676',      // Health
                'soft-coral': '#FF6B9D',         // Love
                'lavender-calm': '#9D84B7',      // Learning
                'warning-amber': '#FFB300',       // Attention
                'alert-red': '#FF3D00',          // Alert
            },
            fontFamily: {
                'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
                'mono': ['JetBrains Mono', 'Courier New', 'monospace'],
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
