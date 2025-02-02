import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import mermaid from 'mermaid'

mermaid.initialize({
    startOnLoad: true,
    theme: 'default',
    securityLevel: 'loose',
    flowchart: {
        htmlLabels: true,
        curve: 'linear',
        nodeSpacing: 100,
        rankSpacing: 100,
        padding: 15
    },
    themeVariables: {
        fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, Ubuntu, Cantarell, "Noto Sans", sans-serif',
        fontSize: '16px',
        primaryColor: '#4f46e5',
        primaryTextColor: '#ffffff',
        primaryBorderColor: '#4338ca',
        lineColor: '#6b7280',
        secondaryColor: '#9ca3af',
        tertiaryColor: '#d1d5db'
    }
})

export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
        // Register your components here
    },
    setup() {
        // Initialize mermaid when the route changes
        if (typeof window !== 'undefined') {
            const initializeMermaid = () => {
                const elements = document.querySelectorAll('.mermaid')
                ;for (const element of [...elements]) {
                    // Only initialize if not already initialized
                    if (!element.hasAttribute('data-processed')) {
                        try {
                            mermaid.init(undefined, element)
                        } catch (error) {
                            console.error('Mermaid initialization error:', error)
                        }
                    }
                }
            }

            // Initial load
            setTimeout(initializeMermaid, 200)

            // Watch for changes
            const observer = new MutationObserver(() => {
                setTimeout(initializeMermaid, 200)
            })

            // Start observing the document with the configured parameters
            observer.observe(document.body, {
                childList: true,
                subtree: true
            })
        }
    },
} 