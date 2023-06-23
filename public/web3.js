// JavaScript code for interacting with Web3 library
// This file can include the necessary Web3 library code and initialization logic
// Example: Initializing Web3 and handling wallet connection

// Initialize Web3
let web3;

// Function to initialize Web3
function initWeb3() {
  // Check if Web3 is already injected by the browser
  if (typeof window.ethereum !== 'undefined') {
    // Use the injected Web3 provider
    web3 = new Web3(window.ethereum);
  } else {
    // Fallback to a local development provider
    web3 = new Web3('http://localhost:8545');
  }
}

// Function to handle wallet connection
async function connectWallet() {
  try {
    // Request user permission to connect their wallet
    await window.ethereum.enable();
  
    // Get the selected account
    const accounts = await web3.eth.getAccounts();
    const selectedAccount = accounts[0];
  
    // Use the selected account for further interactions
    console.log('Connected wallet:', selectedAccount);
  
    // TODO: Add your code to handle wallet connection and subsequent interactions with the blockchain
  } catch (error) {
    console.error('Failed to connect wallet:', error);
  }
}

// Initialize Web3 on page load
initWeb3();
