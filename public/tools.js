document.addEventListener('DOMContentLoaded', function() {
    // Fetch API data and populate the tools page
    fetch('/api/tools')
      .then(response => response.json())
      .then(data => {
        const toolsContainer = document.getElementById('tools-container');
        if (data.length > 0) {
          data.forEach(tool => {
            const toolCard = createToolCard(tool);
            toolsContainer.appendChild(toolCard);
          });
        } else {
          const noDataMessage = document.createElement('p');
          noDataMessage.textContent = 'No tools available.';
          toolsContainer.appendChild(noDataMessage);
        }
      })
      .catch(error => console.error(error));
  
    // Handle back button click
    const backButton = document.getElementById('back-button');
    backButton.addEventListener('click', function() {
      window.history.back();
    });
  });
  
  function createToolCard(tool) {
    const card = document.createElement('div');
    card.classList.add('tool-card');
  
    const title = document.createElement('h3');
    title.textContent = tool.title || '##';
    card.appendChild(title);
  
    const description = document.createElement('p');
    description.textContent = tool.description || '##';
    card.appendChild(description);
  
    const link = document.createElement('a');
    link.href = tool.url || '#';
    link.textContent = 'Learn More';
    card.appendChild(link);
  
    return card;
  }
  