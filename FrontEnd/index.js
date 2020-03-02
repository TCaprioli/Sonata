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
let title = document.querySelector('#title')
let art = document.querySelector('#art')
let player = document.querySelector('#song-player')
let artist = document.querySelector('#artist')
let artArray = Object.values(songsObj).map(e => e.art)
let titleArray = Object.values(songsObj).map(e => e.title)
let songArray = Object.values(songsObj).map(e => e.mp3)
let artistArray = Object.values(songsObj).map(e => e.artist)

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

let playBtn = document.querySelector('#btn')
playBtn.addEventListener('click', event => {
    let modal = document.createElement('div')
    let col3 = document.querySelector('#col3')
    modal.className = 'modal'
    
    let form = document.createElement('form')
    modal.style.display = 'block'
    col3.append(modal)
    
})

renderSongs()
console.log(artistArray)