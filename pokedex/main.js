const apiURL = 'https://pokeapi.co/api/v2/pokemon/'
const app = document.getElementById('app')

const fetchData = async (url) => {
    try {
        const response = await fetch(url)
        return await response.json()
    } catch (err) {
        return null
    }
}

const init = async () => {
    const data = await fetchData(apiURL)
    listPokemonsHTML(data)
}

const listPokemonsHTML = (data) => {
    const { results, next, previous } = data
    results.forEach(async item => {
        const pokemon = await fetchData(item.url)
        app.append(createPokemonHTML(pokemon))
    })
}

const createPokemonHTML = (pokemon) => {
    const container = document.createElement('div')
    container.classList.add('pokemon-card')

    const imgEl = document.createElement('img')
    imgEl.setAttribute('src', pokemon.sprites.other['official-artwork'].front_default)

    const nameEl = document.createElement('div')
    nameEl.innerText = pokemon.name

    container.append(imgEl)
    container.append(nameEl)

    return container
}

init()
