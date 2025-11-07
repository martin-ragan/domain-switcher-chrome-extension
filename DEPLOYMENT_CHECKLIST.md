# Chrome Web Store Deployment Checklist

Use this checklist to ensure you have everything ready before submitting to the Chrome Web Store.

## Pre-Submission Checklist

### ✅ Code & Build
- [ ] All features working correctly
- [ ] Tested in multiple scenarios (different URLs, domains, ports)
- [ ] No console errors
- [ ] Production build created: `npm run build`
- [ ] Package created: `npm run package`

### ✅ Required Files
- [ ] `manifest.json` is correct and complete
- [ ] Extension icons present (16x16, 48x48, 128x128)
- [ ] All assets are in the `dist` folder
- [ ] ZIP file contains files directly (not nested in folder)

### ✅ Chrome Web Store Assets

#### Screenshots (Create 3-5 screenshots)
**Size:** 1280x800 or 640x400 (PNG or JPEG)

Suggested screenshots:
- [ ] Extension popup with configuration filled in
- [ ] Extension popup showing preview URL
- [ ] Before/After URL comparison
- [ ] Extension working on a real website
- [ ] Focus state of inputs (optional)

**How to capture:**
1. Open the extension popup
2. Use Chrome DevTools to set exact dimensions
3. Take screenshots with your OS screenshot tool
4. Or use: `Cmd + Shift + 5` (Mac) / `Windows + Shift + S` (Windows)

#### Store Listing Content
- [ ] Extension name: "Domain Switcher"
- [ ] Short description (132 chars max)
- [ ] Full description (see DEPLOYMENT.md)
- [ ] Category: Developer Tools
- [ ] Language: English

#### Optional (but recommended)
- [ ] Small promotional tile: 440x280
- [ ] Large promotional tile: 920x680
- [ ] Marquee promotional image: 1400x560

### ✅ Developer Account
- [ ] Google account ready
- [ ] $5 registration fee paid
- [ ] Accepted Developer Agreement

### ✅ Legal & Policy
- [ ] Privacy policy created (PRIVACY_POLICY.md)
- [ ] Privacy policy hosted (if required) or ready to paste

### ✅ Permissions Justification
Prepare explanations for:
- [ ] **tabs:** "Required to read the current tab's URL to generate the switched domain URL"
- [ ] **storage:** "Required to save and load user's domain configuration preferences locally"

### ✅ Testing
- [ ] Tested on multiple websites
- [ ] Tested with different configurations
- [ ] Tested HTTPS toggle
- [ ] Tested port configuration
- [ ] Verified preview updates in real-time
- [ ] Tested domain switching functionality
- [ ] Verified new tab opens correctly

## Submission Steps

- [ ] 1. Go to [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole)
- [ ] 2. Click "New Item"
- [ ] 3. Upload `domain-switcher.zip`
- [ ] 4. Fill in store listing information
- [ ] 5. Upload screenshots
- [ ] 6. Add privacy policy (if needed)
- [ ] 7. Explain permissions
- [ ] 8. Select distribution (Public/Unlisted/Private)
- [ ] 9. Review all information
- [ ] 10. Click "Submit for Review"

## Post-Submission

- [ ] Save your extension ID
- [ ] Bookmark your Chrome Web Store listing URL
- [ ] Monitor email for review status
- [ ] Check developer dashboard for updates

## After Approval

- [ ] Update README.md with Chrome Web Store link
- [ ] Share on social media
- [ ] Add badge to GitHub repository
- [ ] Respond to user reviews

---

## Quick Commands

```bash
# Build production version
npm run build

# Create ZIP package for Chrome Web Store
npm run package

# The package will be created as: domain-switcher.zip
```

---

## Review Timeline

- **Typical review time:** 1-3 business days
- **First submission:** May take longer
- **Check status:** Developer dashboard or email

---

## Common Rejection Reasons (Avoid These)

❌ Misleading description or screenshots
❌ Requesting unnecessary permissions
❌ Missing or invalid icons
❌ Broken functionality
❌ Privacy policy missing (if required)
❌ Copyright/trademark violations

---

## Need Help?

- See detailed instructions in `DEPLOYMENT.md`
- [Chrome Web Store Developer Support](https://support.google.com/chrome_webstore)
- [Publishing Guidelines](https://developer.chrome.com/docs/webstore/publish)

---

Good luck! 🚀
