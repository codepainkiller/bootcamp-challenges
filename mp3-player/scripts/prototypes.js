const player = document.getElementById('player')
const icon = player.children[0]
const audio = new Audio('slash_gotten.mp3')

function Mp3Player (song, isPlaying)  {
    this.song = song
    this.isPlaying = isPlaying
}

Mp3Player.prototype.play = async function () {
    icon.textContent = 'pause'
    this.isPlaying = true
    await this.song.play()
}

Mp3Player.prototype.pause = function () {
    icon.textContent = 'play_arrow'
    this.isPlaying = false
    this.song.pause()
}

const mp3 = new Mp3Player(audio, false)

const onClick = () => {
    if (mp3.isPlaying) {
        mp3.pause()
    } else {
        mp3.play()
    }
}

player.addEventListener('click', onClick)




