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
    document.getElementById('theme-song').src = data.themeSong;
  });

// Theme toggling
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  themeToggle.textContent = document.body.classList.contains('light') ? '☀️' : '🌙';
  localStorage.setItem('theme', document.body.classList.contains('light') ? 'light' : 'dark');
});
if (localStorage.getItem('theme') === 'light') {
  document.body.classList.add('light');
  themeToggle.textContent = '☀️';
}

// Play/pause theme song
let isPlaying = false;
const playBtn = document.getElementById('play-theme');
const audio = document.getElementById('theme-song');
playBtn.addEventListener('click', () => {
  if (!isPlaying) {
    audio.play();
    playBtn.textContent = '⏸ Pause Theme Song';
  } else {
    audio.pause();
    playBtn.textContent = '▶ Play Theme Song';
  }
  isPlaying = !isPlaying;
});
audio.addEventListener('ended', () => {
  playBtn.textContent = '▶ Play Theme Song';
  isPlaying = false;
});