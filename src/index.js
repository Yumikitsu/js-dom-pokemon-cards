const state = {
    currentSprite: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 20 Pokemon total
    backOrFront: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
}

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

        // Create a div for button and image
        const div = document.createElement('div')
        div.className = 'card--imgAndbuttons'

        // Create the previous button
        const previousBtn = document.createElement('button')
        previousBtn.className = 'card--button'
        previousBtn.textContent = '<'
        previousBtn.onclick = () => decrementSprite(pokemon.id)
        
        // Create the img
        const img = document.createElement('img')
        img.className = 'card--img'
        img.src = spriteSelection(pokemon.id)
        img.width = 256
        img.onclick = () => flipPokemon(pokemon.id)

        // Create the next button
        const nextBtn = document.createElement('button')
        nextBtn.className = 'card--button'
        nextBtn.textContent = '>'
        nextBtn.onclick = () => incrementSprite(pokemon.id)

        // Append buttons and image to the div
        div.appendChild(previousBtn)
        div.appendChild(img)
        div.appendChild(nextBtn)

        // Create the ul
        const ul = document.createElement('ul')
        ul.className = 'card--text'
        
        // Create a div to put the stats in
        const div1 = document.createElement('div')
        div1.className = 'card--text-stats'

        // First li will be the Spirte Appearance text
        const div1li = document.createElement('li')
        div1li.className = 'card--text-base'
        div1li.textContent = 'Base Stats'

        div1.appendChild(div1li)

        // Loop through all the pokemon's stats
        pokemon.stats.forEach(stat => {
            // Create a list
            const liStat = document.createElement('li')

            // Assign text to the liStat element
            liStat.textContent = `${stat.stat.name.toUpperCase()}: ${stat.base_stat}`
            liStat.className = 'card--text-base-stats'

            // Append the list to the div
            div1.appendChild(liStat)
        })

        // Create a div to put the games the pokemon have appeared in
        const div2 = document.createElement('div')
        div2.className = 'card--text-games'

        // First li will be the Spirte Appearance text
        const div2li = document.createElement('li')
        div2li.className = 'card--text-appearance'
        div2li.textContent = 'Appearances'

        div2.appendChild(div2li)

        // Call the function for game appearances
        gameAppearances(pokemon.id, div2)

        //Append the divs to the ul
        ul.appendChild(div1)
        ul.appendChild(div2)
        
        // Append all elements to the overarching list
        li.appendChild(h2)
        li.appendChild(div)
        li.appendChild(ul)

        // Append the pokemon to the card list
        cards.appendChild(li)
    })
}

// Function to select the correct game appearances
function gameAppearances(id, div) {
    switch(state.currentSprite[id - 1]) {
        case 0:
            // Create a list
            const liGame = document.createElement('li')
    
            // Assign text to the liGame element
            liGame.textContent = `Official Artwork`

            // Append the list to the div
            div.appendChild(liGame)
            return null
        case 1:
            for (let i = 0; i < 3; i++) {
                // Create a list
                const liGame = document.createElement('li')
    
                // Assign text to the liGame element
                liGame.textContent = `${data[id - 1].game_indices[i].version.name.charAt(0).toUpperCase() + data[id - 1].game_indices[i].version.name.slice(1)}`
    
                // Append the list to the div
                div.appendChild(liGame)
            }
            return null
        case 2:
            for (let i = 3; i < 6; i++) {
                // Create a list
                const liGame = document.createElement('li')
    
                // Assign text to the liGame element
                liGame.textContent = `${data[id - 1].game_indices[i].version.name.charAt(0).toUpperCase() + data[id - 1].game_indices[i].version.name.slice(1)}`
    
                // Append the list to the div
                div.appendChild(liGame)
            }
            return null
        case 3:
            for (let i = 6; i < 11; i++) {
                // Create a list
                const liGame = document.createElement('li')
    
                // Assign text to the liGame element
                liGame.textContent = `${data[id - 1].game_indices[i].version.name.charAt(0).toUpperCase() + data[id - 1].game_indices[i].version.name.slice(1)}`
    
                // Append the list to the div
                div.appendChild(liGame)
            }
            return null
        case 4:
            for (let i = 11; i < 16; i++) {
                // Create a list
                const liGame = document.createElement('li')
    
                // Assign text to the liGame element
                liGame.textContent = `${data[id - 1].game_indices[i].version.name.charAt(0).toUpperCase() + data[id - 1].game_indices[i].version.name.slice(1)}`
    
                // Append the list to the div
                div.appendChild(liGame)
            }
            return null
        case 5:
            for (let i = 16; i < 20; i++) {
                // Create a list
                const liGame = document.createElement('li')
    
                // Assign text to the liGame element
                liGame.textContent = `${data[id - 1].game_indices[i].version.name.charAt(0).toUpperCase() + data[id - 1].game_indices[i].version.name.slice(1)}`
    
                // Append the list to the div
                div.appendChild(liGame)
            }
            return null
    }
}

// Function to select the correct sprite
function spriteSelection(id) {
    if (state.backOrFront[id - 1] === 0)
    {
        switch(state.currentSprite[id - 1]) {
            case 0:
                return `${data[id - 1].sprites.other["official-artwork"].front_default}`
            case 1:
                return `${data[id - 1].sprites.versions["generation-i"]["red-blue"].front_default}`
            case 2:
                return `${data[id - 1].sprites.versions["generation-ii"].gold.front_default}`
            case 3:
                return `${data[id - 1].sprites.versions["generation-iii"]["ruby-sapphire"].front_default}`
            case 4:
                return `${data[id - 1].sprites.versions["generation-iv"].platinum.front_default}`
            case 5:
                return `${data[id - 1].sprites.versions["generation-v"]["black-white"].front_default}`
        }
    } else {
        switch(state.currentSprite[id - 1]) {
            case 0:
                return `${data[id - 1].sprites.other["official-artwork"].front_default}`
            case 1:
                return `${data[id - 1].sprites.versions["generation-i"]["red-blue"].back_default}`
            case 2:
                return `${data[id - 1].sprites.versions["generation-ii"].gold.back_default}`
            case 3:
                return `${data[id - 1].sprites.versions["generation-iii"]["ruby-sapphire"].back_default}`
            case 4:
                return `${data[id - 1].sprites.versions["generation-iv"].platinum.back_default}`
            case 5:
                return `${data[id - 1].sprites.versions["generation-v"]["black-white"].back_default}`
        }
    }
}

// Function to increment sprite selected
function incrementSprite(id) {
    state.currentSprite[id - 1]++
    if (state.currentSprite[id - 1] > 5) {
        state.currentSprite[id - 1] = 0
    }
    renderPokemonCards()
}

// Function to decrement sprite selected
function decrementSprite(id) {
    state.currentSprite[id - 1]--
    if (state.currentSprite[id - 1] < 0) {
        state.currentSprite[id - 1] = 5
    }
    renderPokemonCards()
}

function flipPokemon(id) {
    state.backOrFront[id - 1]++
    if (state.backOrFront[id - 1] > 1) {
        state.backOrFront[id - 1] = 0
    }
    renderPokemonCards()
}

// Listener event that shows all the basics when refreshing the website
document.addEventListener('DOMContentLoaded', () => {
    renderPokemonCards()
})