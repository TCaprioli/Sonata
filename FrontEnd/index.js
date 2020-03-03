//column 1 elements
let songCon = document.querySelector('#song-container')
let searchInput = songCon.querySelector('.searchInput')
let sInput = songCon.querySelector('#input')
let songList = document.querySelector('#song-list')
let search = document.querySelector('#search')
let banner = document.querySelector('#banner-title')


//column 2 elements
let art = document.querySelector('#art')
let player = document.querySelector('#song-player')
let titleText = document.querySelector('#title')
let artist = document.querySelector('#artist')


//column 3 elements
let playlistCon = document.querySelector('#playlist-list')
let playForm = document.querySelector('#new-playlist-form')
let pInput = playForm.querySelector('input')


//global data
let allSongs = [];
let allArtists =[];
let allPlaylists =[];
let allArtistsName =[];
let allTitles =[];
let allPlaylistsName =[];


//-------------------------Render Functions----------------------------------



function renderSongs(songs){
   
    songs.forEach(title => {
 
        let div = document.createElement('div')
        div.className = 'div-song-name'
        div.innerText = title
        songList.appendChild(div)

        let selectedSong = allSongs.find(song => song.name === title)
        let newSelectedArtist = allArtists.find(song => song.id === selectedSong.artist_id)

        div.addEventListener('click', event => {
            
            artist.innerText = newSelectedArtist.name
            titleText.innerText = title
            art.src = `songData/jpg/${selectedSong.cover_art}`
            player.src = `songData/mp3/${selectedSong.mp3}`     
        })  
    })  
}

function renderArtists(artists){
      
    artists.forEach(name => {
        let div = document.createElement('div')
        div.className = 'div-artist-name'
        div.innerText = name
        songList.appendChild(div)
    })  
}

function renderPlaylists(playlists){
    playlists.forEach(playlist => {
        
        let div = document.createElement('div')
        div.className = 'div-playlist-name'
        div.innerHTML = `${playlist} <button><img class='delete-btn' src='songData/jpg/delete.png'></button>`
        playlistCon.append(div)
    })
}
// //-------------------------------------------------------------------------

// //-------------------------Event Handlers----------------------------------

//post playlist
playForm.addEventListener('submit', event => {
    event.preventDefault()
     
    let div = document.createElement('div')
    div.className = 'div-playlist-name'
    div.innerText = pInput.value
    playlistCon.append(div)
    console.log(pInput.value)
    fetch("http://localhost:3000/playlists",{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'},
        body: JSON.stringify({name: pInput.value,
        user_id: 2})
    })
    .then(resp => resp.json())
    .then(json => console.log(json))


    modal.style.display = 'none'
})

playlistCon.addEventListener('click', event => {
   let buttonPress = event.target.parentElement.parentElement
   console.log(event.target.parentElement)
    console.log(buttonPress.innerText)
    console.log(allPlaylists)
})



sInput.addEventListener('input', event => {
    let userInput = event.target.value
    titleArray = allSongs.map(songInst => songInst.name) 
    let filtered
    filtered = allTitles.filter(title => title.toLowerCase().includes(userInput))
    console.log(filtered)
    songList.innerText = ""
    renderSongs(filtered)
})


banner.addEventListener('click', event => {
    let selection = event.target.innerText
    if (selection === 'Songs'){
        songList.innerHTML = ""
        renderSongs(allTitles)
    }
    if (selection === 'Artists'){
        songList.innerHTML = ""
        console.log(allArtistsName)
        renderArtists(allArtistsName)
    }
})

search.addEventListener('mouseover', event => {
    
    if (searchInput.style.display === 'none')
    {searchInput.style.display = 'block'}
    else{
    searchInput.style.display = 'none'}
})

   
    


//fetching data
fetch('http://localhost:3000/playlist_songs')
.then(resp => resp.json())
.then(contentObject => {
    allSongs = contentObject.songs
    allArtists = contentObject.artists
    allUsers = contentObject.users
    allPlaylists = contentObject.playlists
    allPlaylistsName = allPlaylists.map(playlist => playlist.name)
    allTitles = allSongs.map(song => song.name)
    allArtistsName = allArtists.map(artist => artist.name)
    renderSongs(allTitles)
    renderArtists(allArtistsName)
    renderPlaylists(allPlaylistsName)
    console.log(allSongs)
})
