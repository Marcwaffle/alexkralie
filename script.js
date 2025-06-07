// Dark mode default: dark unless user previously picked light
(function () {
  if (!localStorage.getItem('theme')) {
    document.body.classList.remove('light');
    document.body.classList.add('dark');
    document.body.classList.remove('light'); // ensure
  } else if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light');
    document.body.classList.remove('dark');
    document.getElementById('theme-toggle').textContent = '☀️';
  }
})();

// Load character JSON and fill in content
fetch('alex.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('charName').textContent = data.name;
    document.getElementById('profilePic').src = data.profilePic;
    document.getElementById('profilePic').alt = `Profile picture of ${data.name}`;
    document.getElementById('charAge').textContent = data.age;
    document.getElementById('charPronouns').textContent = data.pronouns;
    document.getElementById('charAlign').textContent = data.alignment;
    document.getElementById('charJob').textContent = data.occupation;
    document.getElementById('charDesc').textContent = data.physicalDescription;
    document.getElementById('charPersonality').textContent = data.personality;
    document.getElementById('charQuote').textContent = data.quote;
    document.getElementById('charFact').textContent = data.funFact;
    document.getElementById('charBackstory').textContent = data.backstory;

    // Goals & Motivation
    function fillGoals(listId, arr) {
      const ul = document.getElementById(listId);
      ul.innerHTML = "";
      if (arr && arr.length) {
        arr.forEach(g => {
          const li = document.createElement('li');
          li.textContent = g;
          ul.appendChild(li);
        });
      } else {
        const li = document.createElement('li');
        li.textContent = "None specified.";
        ul.appendChild(li);
      }
    }
    fillGoals('currentGoals', data.goals?.current || []);
    fillGoals('pastGoals', data.goals?.past || []);

    // Spotify playlist embed
    if (data.spotifyPlaylist) {
      document.getElementById('spotify-embed').innerHTML =
        `<iframe src="${data.spotifyPlaylist}" width="100%" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
    }
  });

// Theme toggling
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  let isLight = document.body.classList.contains('light');
  themeToggle.textContent = isLight ? '☀️' : '🌙';
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});
if (localStorage.getItem('theme') === 'light') {
  document.body.classList.add('light');
  themeToggle.textContent = '☀️';
} else {
  document.body.classList.remove('light');
  themeToggle.textContent = '🌙';
}