document.addEventListener('DOMContentLoaded', function() {
    // Fetch API data and populate the edit profile form
    fetch('/api/profile')
      .then(response => response.json())
      .then(data => {
        if (data) {
          populateProfileForm(data);
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
  
    // Handle save button click
    const saveButton = document.getElementById('save-button');
    saveButton.addEventListener('click', function() {
      saveProfileData();
    });
  });
  
  function populateProfileForm(profile) {
    const profileNameInput = document.getElementById('profile-name-input');
    const profileBioInput = document.getElementById('profile-bio-input');
    const profileEmailInput = document.getElementById('profile-email-input');
  
    profileNameInput.value = profile.name || '';
    profileBioInput.value = profile.bio || '';
    profileEmailInput.value = profile.email || '';
  }
  
  function saveProfileData() {
    const profileNameInput = document.getElementById('profile-name-input');
    const profileBioInput = document.getElementById('profile-bio-input');
    const profileEmailInput = document.getElementById('profile-email-input');
  
    const profileData = {
      name: profileNameInput.value,
      bio: profileBioInput.value,
      email: profileEmailInput.value
    };
  
    // Send profile data to the server for saving
    fetch('/api/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(profileData)
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          alert('Profile data saved successfully.');
        } else {
          alert('Failed to save profile data.');
        }
      })
      .catch(error => console.error(error));
  }
  
  function displayNoDataMessage() {
    const profileContainer = document.getElementById('profile-container');
    const noDataMessage = document.createElement('p');
    noDataMessage.textContent = 'No profile data available.';
    profileContainer.appendChild(noDataMessage);
  }
  