const musiccontainer = document.querySelector('.music-container')
const playbtn = document.querySelector('#play')
const prevbtn = document.querySelector('#prev')
const nextbtn = document.querySelector('#next')
const musiccontainer = document.querySelector('#audio')
const musiccontainer = document.querySelector('.progress')
const musiccontainer = document.querySelector('.progress-container')
const title = document.querySelector('#title')
const cover = document.querySelector('#cover')

//Song titles
const songs = ['rockabye', 'seeyouagain', 'thankyou']

//Keep track of your songs
let songIndex = 2

//Initially load song info DOM
loadsong(songs[songIndex])

//Update song details
function loadsong(song){
    title.innertext = song
    audio.src = `music/${song}.mp3`
    cover.src = `images/${song}.mp3`
}