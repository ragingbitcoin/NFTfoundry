document.addEventListener('DOMContentLoaded', function() {
    // Fetch API data and populate the profile page
    fetch('/api/profile')
      .then(response => response.json())
      .then(data => {
        if (data) {
          populateProfileData(data);
        } else {
          displayNoDataMessage();
        }
      })
      .catch(error => console.error(error));
  
    // Handle back button click
    const backButton = document.getElementById('back-button');
    backButton.addEventListener('click', function() {
      window.history.back();
    });
  
    // Handle edit button click
    const editButton = document.getElementById('edit-button');
    editButton.addEventListener('click', function() {
      window.location.href = '/edit-profile';
    });
  });
  
  function populateProfileData(profile) {
    const profileName = document.getElementById('profile-name');
    const profileBio = document.getElementById('profile-bio');
    const profileEmail = document.getElementById('profile-email');
    const profileImage = document.getElementById('profile-image');
  
    profileName.textContent = profile.name || '##';
    profileBio.textContent = profile.bio || '##';
    profileEmail.textContent = profile.email || '##';
  
    if (profile.image) {
      profileImage.src = profile.image;
      profileImage.alt = 'Profile Picture';
    } else {
      profileImage.src = 'placeholder-image.png';
      profileImage.alt = 'Placeholder Image';
    }
  }
  
  function displayNoDataMessage() {
    const profileContainer = document.getElementById('profile-container');
    const noDataMessage = document.createElement('p');
    noDataMessage.textContent = 'No profile data available.';
    profileContainer.appendChild(noDataMessage);
  }
  