
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);

function renderPokemonCards() {
    const cards = document.querySelector('.cards')
    cards.innerHTML = ''

    // Loop through all pokémon
    data.forEach(pokemon => {
        // Create the list
        const li = document.createElement('li')
        li.className = 'card'

        // Create the h2
        const h2 = document.createElement('h2')
        h2.className = 'card--title'
        h2.textContent = `${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}`
        
        // Create the img
        const img = document.createElement('img')
        img.className = 'card--img'
        img.src = `${pokemon.sprites.other["official-artwork"].front_default}`
        img.width = 256
        
        //Create the ul
        const ul = document.createElement('ul')
        ul.className = 'card--text'
        
        // Loop through all the pokemon's stats
        pokemon.stats.forEach(stat => {
            // Create a list
            const liStat = document.createElement('li')

            // Assign text to the liStat element
            liStat.textContent = `${stat.stat.name.toUpperCase()}: ${stat.base_stat}`

            // Append the list to the ul
            ul.appendChild(liStat)
        })
        
        // Append all elements to the overarching list
        li.appendChild(h2)
        li.appendChild(img)
        li.appendChild(ul)

        // Append the pokemon to the card list
        cards.appendChild(li)
    })
}

// Listener event that shows all the basics when refreshing the website
document.addEventListener('DOMContentLoaded', () => {
    renderPokemonCards()
})