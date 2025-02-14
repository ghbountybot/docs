import { withMermaid } from "vitepress-plugin-mermaid";


export default withMermaid({
  title: "BountyBot",
  description: "Documentation for BountyBot",
  cleanUrls: true,
  appearance: 'force-dark',
  // markdown: {
  //   lineNumbers: true,
  // },
  mermaid: {},
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