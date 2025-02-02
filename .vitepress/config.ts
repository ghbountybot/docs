import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "BountyBot",
  description: "Documentation for BountyBot",
  cleanUrls: true,
  appearance: 'force-dark',
  markdown: {
    lineNumbers: true,
    // Enable custom fence for mermaid
    config: (md) => {
      const fence = md.renderer.rules.fence
      if (!fence) return
      md.renderer.rules.fence = (...args) => {
        const [tokens, idx] = args
        const token = tokens[idx]
        if (token?.info && token.info.trim() === 'mermaid') {
          const key = `mermaid-${idx}`
          return `<pre class="mermaid" id="${key}">${token.content}</pre>`
        }
        return fence(...args)
      }
    }
  },
  head: [
    ['script', { src: 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs', type: 'module' }],
    ['script', {
      type: 'module',
      innerHTML: `
        import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';
        window.addEventListener('DOMContentLoaded', () => {
          mermaid.initialize({ 
            startOnLoad: true,
            theme: 'base',
            themeVariables: {
              primaryColor: '#4f46e5',
              primaryTextColor: '#1e1b4b',
              primaryBorderColor: '#4f46e5',
              lineColor: '#818cf8',
              secondaryColor: '#f5f7ff',
              tertiaryColor: '#f0fdf4',
              fontSize: '18px',
              fontSizeMedium: '16px',
              fontSizeSmall: '14px',
              nodeBorder: '3',
              clusterBkg: '#f8fafc',
              clusterBorder: '#e2e8f0',
              defaultLinkColor: '#818cf8',
              titleColor: '#1e1b4b',
              edgeLabelBackground: '#ffffff',
              mainBkg: '#ffffff',
              nodeBkg: '#f5f7ff',
              nodeTextColor: '#1e1b4b',
              labelTextColor: '#4f46e5',
              edgeLabelColor: '#4f46e5'
            },
            flowchart: {
              htmlLabels: true,
              curve: 'natural',
              nodeSpacing: 100,
              rankSpacing: 120,
              padding: 25,
              useMaxWidth: true,
              width: 1400,
              height: 1000,
              diagramPadding: 50
            },
            fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif'
          });
        });
      `
    }]
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/why' },
      { text: 'API', link: '/api/' },
      { text: 'Discord', link: 'https://discord.gg/pyundXvsQn' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Introduction',
          items: [
            { text: 'Why BountyBot?', link: '/guide/why' },
            { text: 'Getting Started', link: '/guide/getting-started' },
            { text: 'GitHub Permissions', link: '/guide/github-premissions' },
            { text: 'Bounty Lifecycle', link: '/guide/bounty-lifecycle' }
          ]
        },
        {
          text: 'Core Workflows',
          items: [
            { text: 'Funding Your First Bounty', link: '/guide/funding-first-bounty' },
            { text: 'Solving Your First Bounty', link: '/guide/solving-first-bounty' },
            { text: 'Withdrawing Your Funds', link: '/guide/withdrawing-funds' }
          ]
        },
        {
          text: 'Advanced Topics',
          items: [
            { text: 'Dispute Process', link: '/guide/dispute-process' }
          ]
        }
      ],
      '/api/': [
        {
          text: 'API Reference',
          items: [
            { text: 'Overview', link: '/api/' },
            { text: 'Users', link: '/api/users' },
            { text: 'Quests', link: '/api/quests' },
            { text: 'Payment Events', link: '/api/payment-events' },
            { text: 'Payment Accounts', link: '/api/payment-accounts' }
          ]
        }
      ]
    }
  }
})
