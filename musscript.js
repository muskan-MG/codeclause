const songs = [
    { title: "Song 1 - Artist 1", src: "song1.mp3" },
    { title: "Song 2 - Artist 2", src: "song2.mp3" },
    { title: "Song 3 - Artist 3", src: "song3.mp3" }
];

let currentSongIndex = 0;
let isPlaying = false;
const audioPlayer = document.getElementById("audioPlayer");
const songTitle = document.getElementById("songTitle");

function selectSong(index) {
    currentSongIndex = index;
    loadSong(songs[currentSongIndex]);
    playSong();
}

function loadSong(song) {
    audioPlayer.src = song.src;
    songTitle.textContent = song.title;
    isPlaying = false;
}

function playSong() {
    audioPlayer.play();
    isPlaying = true;
}

function playPause() {
    if (isPlaying) {
        audioPlayer.pause();
        isPlaying = false;
    } else {
        playSong();
    }
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    selectSong(currentSongIndex);
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    selectSong(currentSongIndex);
}

function changeVolume(value) {
    audioPlayer.volume = value;
}

// Initialize with the first song
loadSong(songs[currentSongIndex]);