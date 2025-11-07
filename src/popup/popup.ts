import { DomainConfig, StorageData, DEFAULT_CONFIG } from '../types';
import './popup.css';

// DOM Elements
const targetDomainInput = document.getElementById('targetDomain') as HTMLInputElement;
const targetPortInput = document.getElementById('targetPort') as HTMLInputElement;
const useHttpsCheckbox = document.getElementById('useHttps') as HTMLInputElement;
const switchDomainButton = document.getElementById('switchDomain') as HTMLButtonElement;
const previewUrlDiv = document.getElementById('previewUrl') as HTMLDivElement;
const statusDiv = document.getElementById('status') as HTMLDivElement;

// Load saved config on popup open
async function loadConfig() {
  try {
    const result = await chrome.storage.sync.get('config') as StorageData;
    const config: DomainConfig = result.config || DEFAULT_CONFIG;

    targetDomainInput.value = config.targetDomain;
    targetPortInput.value = config.targetPort || '';
    useHttpsCheckbox.checked = config.useHttps;

    updatePreview();
  } catch (error) {
    console.error('Error loading config:', error);
  }
}

// Save config to storage (auto-save, no status message)
async function saveConfig() {
  try {
    const config: DomainConfig = {
      targetDomain: targetDomainInput.value.trim() || 'localhost',
      targetPort: targetPortInput.value.trim(),
      useHttps: useHttpsCheckbox.checked,
    };

    await chrome.storage.sync.set({ config });
  } catch (error) {
    console.error('Error saving config:', error);
    showStatus('Failed to save configuration', 'error');
  }
}

// Update preview URL
async function updatePreview() {
  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    if (!tab?.url) {
      previewUrlDiv.textContent = 'No active tab';
      return;
    }

    const currentUrl = new URL(tab.url);
    const domain = targetDomainInput.value.trim() || 'localhost';
    const port = targetPortInput.value.trim();
    const protocol = useHttpsCheckbox.checked ? 'https' : 'http';

    const portString = port ? `:${port}` : '';
    const newUrl = `${protocol}://${domain}${portString}${currentUrl.pathname}${currentUrl.search}${currentUrl.hash}`;

    previewUrlDiv.textContent = newUrl;
  } catch (error) {
    console.error('Error updating preview:', error);
    previewUrlDiv.textContent = 'Error generating preview';
  }
}

// Switch domain
async function switchDomain() {
  try {
    // Save current config first
    await saveConfig();

    // Send message to background script
    await chrome.runtime.sendMessage({ action: 'switchDomain' });

    showStatus('Opening in new tab...', 'success');

    // Close popup after a short delay
    setTimeout(() => {
      window.close();
    }, 500);
  } catch (error) {
    console.error('Error switching domain:', error);
    showStatus('Failed to switch domain', 'error');
  }
}

// Show status message
function showStatus(message: string, type: 'success' | 'error') {
  statusDiv.textContent = message;
  statusDiv.className = `text-center text-sm min-h-[20px] mt-3 font-medium transition-all duration-200 ${
    type === 'success'
      ? 'text-emerald-600'
      : 'text-rose-600'
  }`;

  setTimeout(() => {
    statusDiv.textContent = '';
    statusDiv.className = 'text-center text-sm min-h-[20px] mt-3 font-medium';
  }, 3000);
}

// Event listeners
switchDomainButton.addEventListener('click', switchDomain);

// Update preview when inputs change
targetDomainInput.addEventListener('input', updatePreview);
targetPortInput.addEventListener('input', updatePreview);
useHttpsCheckbox.addEventListener('change', updatePreview);

// Initialize
loadConfig();
