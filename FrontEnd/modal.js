const modal = document.querySelector("#modal")

let playBtn = document.querySelector('#btn')
playBtn.addEventListener('click', event => {
    modal.style.display = "block"
})

// Hide the form
modal.addEventListener("click", e => {
  if (e.target.dataset.action === "close") {
    modal.style.display = "none"
  }
})