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
let titleText = document.querySelector('#title')
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
    fetchContent().then(contentObject =>{
        nestedSongsArray = contentObject.songs
        nestedArtistsArray = contentObject.artists
        titleArray = nestedSongsArray.map(songInst => songInst.name)

        titleArray.forEach(title => {

            
            let div = document.createElement('div')
            div.className = 'div-song-name'
            div.innerText = title
            songList.appendChild(div)
            div.addEventListener('click', event => {
                
                let desiredObject = nestedSongsArray.find(e => e.name === title)
                let newSelectedArtist = nestedArtistsArray.find(e => e.id === desiredObject.artist_id)
                
                artist.innerText = newSelectedArtist.name
                titleText.innerText = title
                art.src = `songData/jpg/${desiredObject.cover_art}`
                player.src = `songData/mp3/${desiredObject.mp3}`
                   
            })
        })
    })
    
}

function renderArtists(){
    fetchContent().then(contentObject => {
        let nestedArtistsArray = contentObject.artists  
        let artistArray = nestedArtistsArray.map(e => e.name)
        artistArray.forEach(name => {
            let div = document.createElement('div')
            div.className = 'div-artist-name'
            div.innerText = name
            songList.appendChild(div)
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

    let banner = document.querySelector('#banner-title')

    banner.addEventListener('click', event => {
        let selection = event.target.innerText
        if (selection === 'Songs'){
            songList.innerHTML = ""
            renderSongs()
        }
        if (selection === 'Artists'){
            songList.innerHTML = ""
            renderArtists()
        }
    })



function fetchContent(){
    return fetch('http://localhost:3000/playlist_songs')
    .then(resp => resp.json())
}


renderSongs()

console.log(artistArray)