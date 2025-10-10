// Tailwind CSS Configuration
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'deep-space': '#060606',
                'quantum-blue': '#4A90E2',
                'electric-cyan': '#00D9FF',
                'slate-gray': '#7C8BA1',
                'soft-white': '#F8F9FA',
                'carbon': '#1A1A1A',
                'success-green': '#00E676',
                'warning-amber': '#FFB300',
                'alert-red': '#FF3D00',
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
