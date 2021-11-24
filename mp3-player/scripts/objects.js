const player = document.getElementById('player')
const icon = player.children[0]
const audio = new Audio('slash_gotten.mp3')

const mp3Player = {
    isPlaying: false,
    async onClick () {
        if (this.isPlaying) {
            icon.textContent = 'play_arrow'
            this.isPlaying = false
            audio.pause()
        } else {
            icon.textContent = 'pause'
            this.isPlaying = true
            await audio.play()
        }
    }
}


player.addEventListener('click', mp3Player.onClick)


