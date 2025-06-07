<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Alex Kralie RP Reference Sheet</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <header>
      <h1 id="charName">Character Name</h1>
      <button id="theme-toggle">Toggle Theme</button>
    </header>
    <main>
      <section class="character-profile">
        <img id="profilePic" src="" alt="Profile Picture" class="profile-pic">
        <div class="profile-details">
          <p><strong>Age:</strong> <span id="charAge"></span></p>
          <p><strong>Pronouns:</strong> <span id="charPronouns"></span></p>
          <p><strong>Alignment:</strong> <span id="charAlign"></span></p>
          <p><strong>Occupation:</strong> <span id="charJob"></span></p>
          <p><strong>Physical Description:</strong> <span id="charDesc"></span></p>
          <p><strong>Personality:</strong> <span id="charPersonality"></span></p>
          <p><strong>Notable Quote:</strong> <span id="charQuote"></span></p>
          <p><strong>Fun Fact:</strong> <span id="charFact"></span></p>
          <button id="play-theme">Play Alex’s Theme</button>
          <audio id="theme-song"></audio>
        </div>
      </section>
      <section class="backstory-section">
        <h3>Backstory</h3>
        <div id="charBackstory"></div>
      </section>
      <section class="compendium">
        <h3>Other Characters</h3>
        <div class="gallery" id="charCompendium"></div>
      </section>
    </main>
    <footer>
      <small>RP Reference Sheet | Not affiliated with Marble Hornets</small>
    </footer>
  </div>
  <script src="script.js"></script>
</body>
</html>