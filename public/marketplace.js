document.addEventListener('DOMContentLoaded', function() {
    // Fetch API data and populate the marketplace page
    fetch('/api/nfts')
      .then(response => response.json())
      .then(data => {
        const marketplaceContainer = document.getElementById('marketplace-container');
        if (data.length > 0) {
          data.forEach(nft => {
            const nftCard = createNFTCard(nft);
            marketplaceContainer.appendChild(nftCard);
          });
        } else {
          const noDataMessage = document.createElement('p');
          noDataMessage.textContent = 'No NFTs available.';
          marketplaceContainer.appendChild(noDataMessage);
        }
      })
      .catch(error => console.error(error));
  
    // Handle search button click
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');
    searchButton.addEventListener('click', function() {
      const searchTerm = searchInput.value;
      // Perform search logic and update the marketplace display
      // ...
    });
  
    // Handle back button click
    const backButton = document.getElementById('back-button');
    backButton.addEventListener('click', function() {
      window.history.back();
    });
  });
  
  function createNFTCard(nft) {
    const card = document.createElement('div');
    card.classList.add('nft-card');
  
    const image = document.createElement('img');
    image.src = nft.image || 'placeholder-image.png';
    card.appendChild(image);
  
    const title = document.createElement('h3');
    title.textContent = nft.title || '##';
    card.appendChild(title);
  
    const description = document.createElement('p');
    description.textContent = nft.description || '##';
    card.appendChild(description);
  
    return card;
  }
  