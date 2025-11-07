# Deployment Guide - Domain Switcher

This guide will help you publish the Domain Switcher extension to the Chrome Web Store.

## Prerequisites

1. **Google Account** - You'll need a Google account
2. **Developer Fee** - One-time $5 registration fee for Chrome Web Store
3. **Production Build** - Already created in the `dist` folder

---

## Step 1: Prepare Your Extension Package

### Create a ZIP file of the `dist` folder:

```bash
cd dist
zip -r ../domain-switcher.zip .
cd ..
```

Or use this command from the project root:
```bash
npm run package
```

**Important:** The ZIP should contain the files directly (not a folder containing the files).

---

## Step 2: Register as a Chrome Web Store Developer

1. Go to [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole)
2. Sign in with your Google account
3. Accept the Developer Agreement
4. Pay the one-time $5 registration fee

---

## Step 3: Create a New Extension Listing

### Upload Your Extension

1. Click **"New Item"** in the developer dashboard
2. Click **"Choose file"** and select `domain-switcher.zip`
3. Click **"Upload"**

### Fill Out the Store Listing

#### **Required Information:**

**Product Details:**
- **Name:** Domain Switcher
- **Summary:** Quickly switch between production and local development domains
- **Description:**
```
Domain Switcher helps developers quickly navigate between production/staging sites and their local development environment while preserving the URL path.

★ KEY FEATURES ★

• One-Click Domain Switching: Transform any URL to your local development environment instantly
• Path Preservation: Maintains the full URL path, query parameters, and hash fragments
• Configurable Targets: Set your custom domain and port
• Auto-Save Configuration: Your settings are remembered for next time
• Modern, Beautiful UI: Clean and intuitive interface
• Protocol Support: Choose between HTTP and HTTPS

★ HOW IT WORKS ★

1. Click the extension icon while on any webpage
2. Configure your target domain (e.g., localhost) and port (e.g., 8000)
3. Click "Switch Domain" to open the same path on your local server

★ EXAMPLE ★

From: https://example.com/products/123?category=tech#reviews
To: http://localhost:8000/products/123?category=tech#reviews

Perfect for:
• Frontend developers testing local changes
• Full-stack developers switching between environments
• QA teams comparing production vs development
• Anyone who frequently works across multiple environments

★ PRIVACY ★

Domain Switcher only stores your domain configuration locally. No data is collected, tracked, or sent to external servers.
```

**Category:** Developer Tools

**Language:** English

#### **Required Assets:**

**Icons** (already created in `public/icons/`):
- ✅ 16x16
- ✅ 48x48
- ✅ 128x128

**Screenshots** (You need to create these):
- **Minimum:** 1 screenshot
- **Recommended:** 3-5 screenshots
- **Size:** 1280x800 or 640x400
- **Format:** PNG or JPEG

**Screenshot Ideas:**
1. Extension popup with filled-in configuration
2. Before/After URL comparison
3. Extension popup showing the preview URL
4. The extension in action on a real website

**Promotional Images** (Optional but recommended):
- **Small Tile:** 440x280 (Marquee)
- **Large Tile:** 920x680
- **Marquee:** 1400x560

---

## Step 4: Privacy & Permissions

### Privacy Policy

**Required if:** Your extension collects user data (Domain Switcher does NOT)

**Suggested Simple Privacy Statement:**
```
Domain Switcher Privacy Policy

Domain Switcher does not collect, store, or transmit any personal data. All configuration settings (domain and port) are stored locally on your device using Chrome's storage API. No analytics, tracking, or external connections are made.

Contact: dev.martin.ragan@gmail.com
```

### Permissions Justification

You'll need to explain why you need each permission:

- **tabs:** Required to read the current tab's URL to generate the switched domain URL
- **storage:** Required to save and load your domain configuration preferences locally

---

## Step 5: Distribution

**Visibility:**
- ✅ **Public** - Anyone can find and install
- ⚪ **Unlisted** - Only people with the link can install
- ⚪ **Private** - Only specific users/groups

**Recommended:** Start with **Public**

---

## Step 6: Submit for Review

1. Review all information carefully
2. Click **"Submit for Review"**
3. Wait for Google's review (typically 1-3 business days)
4. Check your email for approval or feedback

---

## Step 7: After Approval

### Promote Your Extension

Share your extension:
- **Chrome Web Store URL:** `https://chrome.google.com/webstore/detail/[YOUR-EXTENSION-ID]`
- GitHub README
- Social media
- Developer communities

### Monitor Performance

- Check the developer dashboard for:
  - Install count
  - User ratings
  - Reviews
  - Crash reports

### Update Your Extension

When you make changes:
```bash
npm run build
npm run package
```
Then upload the new ZIP in the developer dashboard.

---

## Common Issues & Solutions

### Issue: "Manifest file is missing or unreadable"
**Solution:** Ensure manifest.json is in the root of the ZIP, not in a subfolder

### Issue: "Icon not found"
**Solution:** Verify icon paths in manifest.json match actual file locations

### Issue: "This extension is not listed in the Chrome Web Store"
**Solution:** Extension is still under review or not published yet

---

## Useful Commands

```bash
# Build production version
npm run build

# Package for submission
npm run package

# Test locally before submission
# Load unpacked from 'dist' folder in chrome://extensions
```

---

## Resources

- [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole)
- [Chrome Extension Publishing Guidelines](https://developer.chrome.com/docs/webstore/publish)
- [Chrome Web Store Program Policies](https://developer.chrome.com/docs/webstore/program-policies)
- [Branding Guidelines](https://developer.chrome.com/docs/webstore/branding)

---

## Contact

For questions about this extension:
- **Email:** dev.martin.ragan@gmail.com
- **GitHub:** [Your GitHub Repository URL]

---

Good luck with your deployment! 🚀
