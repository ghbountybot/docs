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
      text: Why BountyBot?
      link: /guide/why
    - theme: alt
      text: API Documentation
      link: /api/

features:
  - icon: 🌍
    title: Multi-Ecosystem Support
    details: Supporting projects across major ecosystems including Rust, TypeScript, Python, Nix, and more. Seamlessly integrate with your favorite tech stack.
  - icon: 🔒
    title: Trust & Transparency
    details: Built with trust signals and transparent statistics. Every transaction and interaction is tracked and verifiable by the community.
  - icon: 🌐
    title: Global Accessibility
    details: Available worldwide with comprehensive payment support. Get paid for your contributions no matter where you are.
  - icon: ⚡
    title: Lightning Fast Payouts
    details: Receive your bounty rewards quickly and securely through our automated payment system.
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
      content: A win-all bounty platform for open source projects. Get paid for your contributions.
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
