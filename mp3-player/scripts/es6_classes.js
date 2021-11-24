class Mp3Player {
    constructor(song) {
        this.song = song
        this.audio = new Audio(this.song)
        this.isPlaying = false
        const button = document.getElementById('player')
        this.icon = button.children[0]
        button.addEventListener('click', this.handleButton)
    }

    handleButton = async() => {
        if (this.isPlaying) {
            this.pause()
        } else {
            await this.play()
        }
    }

    play = async () => {
        await this.audio.play()
        this.isPlaying = true
        this.icon.textContent = 'pause'
    }

    pause = () => {
        this.audio.pause()
        this.isPlaying = false
        this.icon.textContent = 'play_arrow'
    }

}

new Mp3Player('slash_gotten.mp3')

