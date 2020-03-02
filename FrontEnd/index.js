let songsObj = {
    jaAraE : {
        title: 'JA ARA E',
        art: 'songData/jpg/ja-ara-e.jpg',
        artist: 'Burna Boy', 
        mp3: 'songData/mp3/ja-ara-e.mp3'},
    bestPart: {
        title:'Best Part',
        art:'songData/jpg/best-part.jpeg',
        artist:'H.E.R & Daniel Ceasar',
        mp3: 'songData/mp3/best-part.mp3'}
}

let songList = document.querySelector('#song-list')
let playlist = document.querySelector('#playlist-list')
let title = document.querySelector('#title')
let art = document.querySelector('#art')
let player = document.querySelector('#song-player')
let artist = document.querySelector('#artist')

//arrays mapped from test object
let artArray = Object.values(songsObj).map(e => e.art)
let titleArray = Object.values(songsObj).map(e => e.title)
let songArray = Object.values(songsObj).map(e => e.mp3)
let artistArray = Object.values(songsObj).map(e => e.artist)
//------------------------------------------------



function renderSongs(){
    titleArray.forEach(song => {
        let div = document.createElement('div')
        div.className = 'div-song-name'
        div.innerText = song
        songList.appendChild(div)

        div.addEventListener('click', event => {
            let lowerSong = song.replace(/ /g,'-').toLowerCase()
            title.innerText = song
            art.src = artArray.filter(e => e.includes(lowerSong))
            player.src = songArray.filter(e => e.includes(lowerSong))
            artist.innerText = artistArray.filter(e => e.includes(lowerSong))
            
        })
    })
}

let playForm = document.querySelector('#new-playlist-form')

playForm.addEventListener('submit', event => {
    event.preventDefault()
    let input = playForm.querySelector('input').value
    let div = document.createElement('div')
    div.className = 'div-playlist-name'
    div.innerText = input
    playlist.append(div)

    modal.style.display = 'none'
})

function fetchContent(){
    return fetch('http://localhost:3000/playlist_songs')
    .then(resp => resp.json())
    .then(json => console.log(json))
}

fetchContent()
renderSongs()
console.log(artistArray)