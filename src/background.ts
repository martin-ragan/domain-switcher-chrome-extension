import { DomainConfig, StorageData, DEFAULT_CONFIG } from './types';

// Listen for messages from popup
chrome.runtime.onMessage.addListener((message, _sender) => {
  if (message.action === 'switchDomain') {
    handleDomainSwitch();
  }
  return true;
});

async function handleDomainSwitch() {
  try {
    // Get current active tab
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    if (!tab?.url) {
      console.error('No active tab found');
      return;
    }

    // Get stored config
    const result = await chrome.storage.sync.get('config') as StorageData;
    const config: DomainConfig = result.config || DEFAULT_CONFIG;

    // Parse current URL
    const currentUrl = new URL(tab.url);

    // Build new URL with target domain
    const protocol = config.useHttps ? 'https' : 'http';
    const port = config.targetPort ? `:${config.targetPort}` : '';
    const newOrigin = `${protocol}://${config.targetDomain}${port}`;

    // Preserve path, search params, and hash
    const newUrl = `${newOrigin}${currentUrl.pathname}${currentUrl.search}${currentUrl.hash}`;

    // Open in new tab
    await chrome.tabs.create({ url: newUrl });

  } catch (error) {
    console.error('Error switching domain:', error);
  }
}
