const audio = new Audio('slash_gotten.mp3')
const player = document.getElementById('player')
const icon = player.children[0]
let isPlaying = false

const onClick = async () => {
    if (isPlaying) {
        icon.textContent = 'play_arrow'
        isPlaying = false
        audio.pause()
    } else {
        icon.textContent = 'pause'
        isPlaying = true
        await audio.play()
    }
}

player.addEventListener('click', onClick)
