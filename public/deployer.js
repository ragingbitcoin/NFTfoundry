document.addEventListener('DOMContentLoaded', function() {
    // Fetch API data and populate the deployer page
    fetch('/api/deployer')
      .then(response => response.json())
      .then(data => {
        const deployerContainer = document.getElementById('deployer-container');
        if (data.length > 0) {
          data.forEach(project => {
            const projectCard = createProjectCard(project);
            deployerContainer.appendChild(projectCard);
          });
        } else {
          const noDataMessage = document.createElement('p');
          noDataMessage.textContent = 'No projects available.';
          deployerContainer.appendChild(noDataMessage);
        }
      })
      .catch(error => console.error(error));
  
    // Handle back button click
    const backButton = document.getElementById('back-button');
    backButton.addEventListener('click', function() {
      window.history.back();
    });
  });
  
  function createProjectCard(project) {
    const card = document.createElement('div');
    card.classList.add('project-card');
  
    const title = document.createElement('h3');
    title.textContent = project.title || '##';
    card.appendChild(title);
  
    const description = document.createElement('p');
    description.textContent = project.description || '##';
    card.appendChild(description);
  
    const deployButton = document.createElement('button');
    deployButton.textContent = 'Deploy Now';
    card.appendChild(deployButton);
  
    return card;
  }
  