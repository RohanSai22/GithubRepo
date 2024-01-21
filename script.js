async function fetchUserData(username) {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const userData = await response.json();
      return userData;
    } catch (error) {
      console.error('Error fetching user data:', error);
      return null;
    }
  }
  
  async function fetchRepos(username) {
    try {
      const response = await fetch(`https://api.github.com/users/${username}/repos`);
      const repos = await response.json();
      return repos;
    } catch (error) {
      console.error('Error fetching repositories:', error);
      return [];
    }
  }
  
  async function displayUserAndRepos(username) {
    const userData = await fetchUserData(username);
    const repos = await fetchRepos(username);
  
    if (userData) {
      document.getElementById('profile-name').textContent = userData.name || username;
      document.getElementById('profile-bio').textContent = userData.bio || 'Bio';
      document.getElementById('profile-location').textContent = userData.location || 'India';
      document.getElementById('twitter-link').href = userData.twitter || '#';
  
      const reposContainer = document.getElementById('repos');
      reposContainer.innerHTML = '';
  
      repos.forEach(repo => {
        const repoElement = document.createElement('div');
        repoElement.classList.add('repo');
  
        repoElement.innerHTML = `
                  <h3>${repo.name}</h3>
                  <p>${repo.description || 'No description available'}</p>
                  <a href="${repo.html_url}" target="_blank">View on GitHub</a>
              `;
  
        reposContainer.appendChild(repoElement);
      });
    }
  }
  
  
  const username = 'Rohansai22'; // her we eneter the username to get details about user we can alternatively use a page for getting details from the user and rediecting them here 
  displayUserAndRepos(username);
  