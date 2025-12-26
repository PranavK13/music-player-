const songs = [
    {
        name: "Jab tak",
        artist: "Artist One",
        path: "song1.mp3",
        cover: "cover1.jpg"
    },
    {
        name: "Song Two",
        artist: "Artist Two",
        path: "song2.mp3",
        cover: "cover2.jpg"
    }
];

let index = 0;
const audio = document.getElementById("audio");
const song = document.getElementById("song");
const artist = document.getElementById("artist");
const cover = document.getElementById("cover");
const progress = document.getElementById("progress");
const playBtn = document.getElementById("play");

function loadSong() {
    audio.src = songs[index].path;
    song.innerText = songs[index].name;
    artist.innerText = songs[index].artist;
    cover.src = songs[index].cover;
}

loadSong();

function playPause() {
    if (audio.paused) {
        audio.play();
        playBtn.innerText = "⏸";
    } else {
        audio.pause();
        playBtn.innerText = "▶";
    }
}

function nextSong() {
    index = (index + 1) % songs.length;
    loadSong();
    audio.play();
    playBtn.innerText = "⏸";
}

function prevSong() {
    index = (index - 1 + songs.length) % songs.length;
    loadSong();
    audio.play();
    playBtn.innerText = "⏸";
}

audio.addEventListener("timeupdate", () => {
    progress.value = (audio.currentTime / audio.duration) * 100 || 0;
});

progress.addEventListener("input", () => {
    audio.currentTime = (progress.value / 100) * audio.duration;
});
