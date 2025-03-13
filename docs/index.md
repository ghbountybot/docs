---
layout: home

hero:
  name: "Bounty Bot"
  text: "Earn Money Solving Open-Source Issues"
  tagline: A win-all bounty platform for open source
  image:
    src: /logo-large.png
    alt: BountyBot Logo
  actions:
    - theme: brand
      text: Get Started
      link: /guide/getting-started
    - theme: alt
      text: View Supported Regions
      link: /guide/supported-regions
    - theme: alt
      text: API Documentation
      link: /api/

features:
  - icon: 🌍
    title: Global Payout Coverage
    details: Support for 100+ countries across North America, Europe, Asia, Africa, and Oceania. Get paid in your local currency through our partnership with NMC.
  - icon: 🔒
    title: Trust & Transparency
    details: Built with trust signals and transparent statistics. Every transaction and interaction is tracked and verifiable by the community.
  - icon: 💸
    title: Flexible Payments
    details: Accept payments from 46 countries through Stripe, and send payouts to over 100 countries through NMC. True global accessibility.
  - icon: ⚡
    title: Lightning Fast Payouts
    details: Quick and secure payouts through our automated system, with support for local bank transfers in most regions.
  - icon: 🔌
    title: Powerful REST API
    details: Integrate bounties into your own applications with our comprehensive REST API. Full documentation and examples included.
  - icon: 🤝
    title: Community Driven
    details: Join a thriving community of developers helping each other grow while earning rewards for their contributions.

head:
  - - meta
    - name: theme-color
      content: '#3b82f6'
  - - meta
    - name: og:title
      content: BountyBot - Earn Money Solving Open-Source Issues
  - - meta
    - name: og:description
      content: A win-all bounty platform for open source projects. Get paid for your contributions in 100+ countries.
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #3b82f6 30%, #22d3ee);
  --vp-home-hero-image-background-image: linear-gradient(-45deg, #3b82f6 50%, #22d3ee 50%);
  --vp-home-hero-image-filter: blur(40px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(72px);
  }
}
</style> 
