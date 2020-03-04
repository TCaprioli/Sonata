//column 1 elements
let songCon = document.querySelector('#song-container')
let searchInput = songCon.querySelector('.searchInput')
let sInput = songCon.querySelector('#input')
let songList = document.querySelector('#song-list')
let search = document.querySelector('#search')
let songBanner = document.querySelector('#song-banner-title')


//column 2 elements
let art = document.querySelector('#art')
let player = document.querySelector('#song-player')
let titleText = document.querySelector('#title')
let artist = document.querySelector('#artist')
let likeBtn = document.querySelector('#like-btn')
let likeFormCon = document.querySelector('#like-form-container')
let likeForm = document.querySelector('#like-form-container')
let select = document.querySelector('#like-drop')

//column 3 elements
let playlistCon = document.querySelector('#playlist-container')
let playForm = document.querySelector('#new-playlist-form')
let pInput = playForm.querySelector('input')
let playlistBanner = document.querySelector('#playlist-banner-title')
let playlistSpan = document.querySelector('#playlist-list')


//global data
let allSongs = [];
let allArtists =[];
let allPlaylists =[];
let allArtistsName =[];
let allTitles =[];
let allPlaylistsName =[];
let  allPlaylistSongs =[];


//-------------------------Render Functions----------------------------------



function renderSong(title){
    let div = document.createElement('div')
    div.className = 'div-song-name'
    div.innerText = title
    songList.appendChild(div)

    let selectedSong = allSongs.find(song => song.name === title)
    let newSelectedArtist = allArtists.find(song => song.id === selectedSong.artist_id)

    div.addEventListener('click', event => {
        artist.innerText = newSelectedArtist.name
        titleText.innerText = title
        likeBtn.dataset.id = selectedSong.id
        titleText.append(likeBtn)
        art.src = `songData/jpg/${selectedSong.cover_art}`
        player.src = `songData/mp3/${selectedSong.mp3}`
    })

}

function renderArtist(artist){
    let div = document.createElement('div')
    div.className = 'div-artist-name'
    div.innerText = artist
    songList.appendChild(div)

}

function renderPlaylist(playlist){

    let div = document.createElement('div')
    div.dataset.id = playlist.id
    div.className = 'div-playlist-name'
    div.innerHTML = `${playlist.name} <button><img class='delete-btn' src='songData/jpg/delete.png'></button>`
    playlistSpan.append(div)
}

function renderPlaylistSong(title){

    let div = document.createElement('div')
        div.dataset.id = title.id
        div.className = 'div-playlistsong-name'
        div.innerHTML = title
        playlistSpan.append(div)


        let selectedSong = allSongs.find(song => song.name === title)
        let newSelectedArtist = allArtists.find(song => song.id === selectedSong.artist_id)
        div.addEventListener('click', event => {
            artist.innerText = newSelectedArtist.name
            titleText.innerText = title
            likeBtn.dataset.id = selectedSong.id
            titleText.append(likeBtn)
            art.src = `songData/jpg/${selectedSong.cover_art}`
            player.src = `songData/mp3/${selectedSong.mp3}`
        })
}


function renderEach(songs, playlists){
    songs.forEach(song => renderSong(song))
    playlists.forEach(playlist => {renderPlaylist(playlist)
    renderLikeForm(playlist)})

}

function renderLikeForm(playlist){

    let option = document.createElement('option')
    option.value = playlist.id
    option.innerText = playlist.name
    select.append(option)

}
// //-------------------------------------------------------------------------

// //-------------------------Event Handlers----------------------------------

//post playlist
playForm.addEventListener('submit', event => {
    event.preventDefault()

    fetch("http://localhost:3000/playlists",{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'},
        body: JSON.stringify({name: pInput.value,
        user_id: 2})
    })
    .then(resp => resp.json())
    .then(json => {
        renderPlaylist(json)
        allPlaylists.push(json)
        renderLikeForm(json)
    })

    playForm.reset()
    modal.style.display = 'none'
})
//playlist manipulation
//delete, switch view
playlistCon.addEventListener('click', event => {
   let selectedDiv = event.target.closest('.div-playlist-name')
   let selectedClassName = event.target.className
   if(selectedClassName === 'delete-btn'){
    fetch(`http://localhost:3000/playlists/${selectedDiv.dataset.id}`,{
        method: 'Delete'})

    selectedDiv.remove()}

    if(selectedClassName === 'div-playlist-name'){
        playlistSpan
        playlistBanner.innerHTML = `${selectedDiv.innerText} <button><img class='home-btn' src='songData/jpg/home.png'></button>`
        playlistSpan.innerHTML = ''

        let selectedPlaylist = allPlaylistSongs.filter(playlist_song => playlist_song.playlist_id == selectedDiv.dataset.id)
        let selectedSongIds = selectedPlaylist.map(playlistSong => playlistSong.song_id)
        let newSongs = allSongs.filter(song => selectedSongIds.includes(song.id)).map(song => song.name)

        newSongs.forEach(title => {renderPlaylistSong(title)})

    }

    if(selectedClassName === 'home-btn'){
        playlistBanner.innerText = 'Playlists'
        let newAddBtn = document.createElement('button')
        newAddBtn.id = 'btn'
        newAddBtn.innerText = '+'
        playlistBanner.append(newAddBtn)
        playlistSpan.innerHTML = ''
        allPlaylists.forEach(playlist => renderPlaylist(playlist))
    }

    if(event.target.id === 'btn'){
        modal.style.display = 'block'
    }

})

const modal = document.querySelector("#modal")



sInput.addEventListener('input', event => {
    let userInput = event.target.value
    titleArray = allSongs.map(songInst => songInst.name)
    let filtered
    filtered = allTitles.filter(title => title.toLowerCase().includes(userInput))
    songList.innerText = ""
    renderEach(filtered)
})


songBanner.addEventListener('click', event => {
    let selection = event.target.innerText
    if (selection === 'Songs'){
        songList.innerHTML = ""
        renderEach(allTitles)
    }
    if (selection === 'Artists'){
        songList.innerHTML = ""
        allArtistsName.forEach(artist => renderArtist(artist))

    }
})

search.addEventListener('mouseover', event => {

    if (searchInput.style.display === 'none')
    {searchInput.style.display = 'block'}
    else{
    searchInput.style.display = 'none'}
})

likeBtn.addEventListener('click', event =>{


    if(likeFormCon.style.display === 'none'){
        likeFormCon.style.display = 'block'
    }
    else{
        likeFormCon.style.display ='none'
    }

})



likeForm.addEventListener('submit', event =>{
    event.preventDefault()

    let selectValue = select.value
    let likedSong = likeBtn.dataset.id

    fetch('http://localhost:3000/playlist_songs',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'},
        body: JSON.stringify({playlist_id: selectValue, song_id: likedSong})
    })
    .then(resp => resp.json())
    .then(newPlayListSong => {
        let jsonSong = allSongs.filter(song => song.id == newPlayListSong.song_id)
        let newSong =jsonSong.reduce(song => song.name)
        renderPlaylistSong(newSong.name)
        allPlaylistSongs.push(newPlayListSong)
    })

    likeFormCon.style.display ='none'

})

function renderInitailArtist(title){
  let selectedSong = allSongs.find(song => song.name === title)
  let newSelectedArtist = allArtists.find(song => song.id === selectedSong.artist_id)

  artist.innerText = newSelectedArtist.name
  titleText.innerText = title
  likeBtn.dataset.id = selectedSong.id
  titleText.append(likeBtn)
  art.src = `songData/jpg/${selectedSong.cover_art}`
  player.src = `songData/mp3/${selectedSong.mp3}`
}




//fetching data
fetch('http://localhost:3000/playlist_songs')
.then(resp => resp.json())
.then(contentObject => {
    allSongs = contentObject.songs
    allArtists = contentObject.artists
    allUsers = contentObject.users
    allPlaylists = contentObject.playlists
    allPlaylistSongs = contentObject.playlist_songs
    allPlaylistsName = allPlaylists.map(playlist => playlist.name)
    allTitles = allSongs.map(song => song.name)
    allArtistsName = allArtists.map(artist => artist.name)
    renderEach(allTitles, allPlaylists)

    renderInitailArtist(allSongs[0].name)
})
