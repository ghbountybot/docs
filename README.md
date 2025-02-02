# BountyBot Documentation

This repository contains the official documentation for BountyBot, built using [VitePress](https://vitepress.dev/).

## 📚 Documentation Structure

The documentation is organized into two main sections:

- `/api` - API reference documentation
  - Authentication
  - Endpoints for bounties, quests, users, and payments
  - Payment events and account management
  
- `/guide` - User guides and tutorials
  - Getting started
  - Bounty lifecycle
  - Funding and solving bounties
  - Dispute resolution process
  - GitHub permissions
  - Withdrawal process

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version ^22.11.0)
- [pnpm](https://pnpm.io/) (version 9.15.3)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/bountybot-docs.git
cd bountybot-docs
```

2. Install dependencies:
```bash
pnpm install
```

### Development

To start the development server:
```bash
pnpm dev
```

This will start a local server at `http://localhost:5173` with hot-reload enabled.

### Building

To build the documentation for production:
```bash
pnpm build
```

To preview the production build:
```bash
pnpm preview
```

## 🔧 Project Configuration

The documentation site is powered by VitePress with the following key features:

- TypeScript support
- Mermaid.js integration for diagrams
- Custom theme configurations

## 📝 Contributing

We welcome contributions to improve the documentation! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
