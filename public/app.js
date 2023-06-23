// JavaScript code for application-specific functionality
// This file can include custom logic for your application, including interactions with the blockchain, API calls, etc.
// Example: Handling events and updating UI based on wallet connection status

// Dynamic buttons data
const buttonsData = [
  { label: 'Marketplace', url: '/marketplace' },
  { label: 'NFT Tools', url: '/tools' },
  { label: 'NFT Deployer', url: '/deployer' }
];

// Create and append buttons dynamically
const buttonsContainer = document.getElementById('buttonsContainer');
buttonsData.forEach(buttonData => {
  const button = document.createElement('button');
  button.textContent = buttonData.label;
  button.classList.add('button');
  button.addEventListener('click', () => {
    window.location.href = buttonData.url;
  });
  buttonsContainer.appendChild(button);
});
