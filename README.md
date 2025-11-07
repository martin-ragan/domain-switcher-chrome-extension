# Domain Switcher

A Chrome extension that helps developers quickly switch between production/staging sites and their local development environment while preserving the URL path.

## Features

- **Quick Domain Switching**: Transform `groupon.com/checkout/cart` → `localhost:8000/checkout/cart` with one click
- **Path Preservation**: Maintains the full path, query parameters, and hash fragments
- **Configurable**: Set your target domain and port
- **Protocol Selection**: Choose between HTTP and HTTPS
- **Live Preview**: See the target URL before switching

## Installation

### From Chrome Web Store (Coming Soon)

Once published, you'll be able to install directly from the Chrome Web Store.

### Development Mode

1. Clone or download this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Build the extension:
   ```bash
   npm run build
   ```
4. Open Chrome and navigate to `chrome://extensions/`
5. Enable "Developer mode" (toggle in top right)
6. Click "Load unpacked"
7. Select the `dist` folder from this project

### Build for Production

```bash
npm run build
```

The extension will be built to the `dist` folder.

## Usage

1. Click the Domain Switcher icon in your Chrome toolbar
2. Configure your target domain and port (e.g., `localhost` and `8000`)
3. (Optional) Enable HTTPS if your local server uses it
4. Click "Save Config" to persist your settings
5. Click "Switch Domain" to open the current page's path on your configured domain

### Example

If you're on:
```
https://www.example.com/products/123?category=electronics#reviews
```

With configuration:
- Domain: `localhost`
- Port: `3000`
- HTTPS: unchecked

Clicking "Switch Domain" opens:
```
http://localhost:3000/products/123?category=electronics#reviews
```

## Tech Stack

- **TypeScript**: Type-safe development
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first styling
- **Chrome Extension Manifest V3**: Modern extension API

## Project Structure

```
domain-switcher/
├── manifest.json           # Extension manifest
├── src/
│   ├── background.ts       # Background service worker
│   ├── types.ts            # Shared TypeScript types
│   └── popup/
│       ├── popup.html      # Popup UI
│       ├── popup.ts        # Popup logic
│       └── popup.css       # Tailwind directives
├── vite.config.ts          # Vite configuration
└── tailwind.config.js      # Tailwind configuration
```

## Development

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run package` - Create ZIP package for Chrome Web Store submission

## Deployment

Ready to publish to the Chrome Web Store? See:
- **[DEPLOYMENT.md](DEPLOYMENT.md)** - Complete deployment guide
- **[DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md)** - Submission checklist
- **[PRIVACY_POLICY.md](PRIVACY_POLICY.md)** - Privacy policy

Quick deployment:
```bash
npm run package
```
This creates `domain-switcher.zip` ready for Chrome Web Store submission.

## Permissions

This extension requires:
- `tabs`: To access the current tab's URL
- `storage`: To save your domain configuration

## License

ISC
