let songList = document.querySelector('#song-list')
let title = document.querySelector('#title')
let songArray = ['Tempted to Touch', 'Best Part', 'JA ARA E', 'Shea Butter Baby','Machinegun Funk', 'Lost']

function renderSongs(){
    songArray.forEach(song => {
        let div = document.createElement('div')
        div.className = 'div-song-name'
        div.innerText = song
        songList.appendChild(div)

        div.addEventListener('click', event => {
            title.innerText = song
        })
    })
}

renderSongs()