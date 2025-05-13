const songs = [
  { title: "Sample Song 1", src: "music/song1.mp3" },
  { title: "Sample Song 2", src: "music/song2.mp3" },
  { title: "Sample Song 3", src: "music/song3.mp3" },
];

let currentSong = 0;
const audio = document.getElementById("audio");
const title = document.getElementById("title");
const playPauseBtn = document.getElementById("playPause");

function loadSong(index) {
  const song = songs[index];
  audio.src = song.src;
  title.textContent = song.title;
}

function togglePlay() {
  if (audio.paused) {
    audio.play();
    playPauseBtn.textContent = "⏸️";
  } else {
    audio.pause();
    playPauseBtn.textContent = "▶️";
  }
}

function prevSong() {
  currentSong = (currentSong - 1 + songs.length) % songs.length;
  loadSong(currentSong);
  audio.play();
  playPauseBtn.textContent = "⏸️";
}

function nextSong() {
  currentSong = (currentSong + 1) % songs.length;
  loadSong(currentSong);
  audio.play();
  playPauseBtn.textContent = "⏸️";
}

// Auto-load first song
loadSong(currentSong);
