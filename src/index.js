// - Make sure you check and understand the data that is given to you!
// - Create a card using JS that represents a single pokemon, use the example image as a reference. 
// You will also find an HTML example commented out in the index.html
// - Use the exact CSS classes you see in the example HTML to obtain the same style for each card
// - The cards should be nested inside <ul class="cards"></ul>
// - Use the official-artwork object key as the images for the card. The images are all inside of the sprites key, in each pokemon object
// pokemon.sprites.other['official-artwork'].front_default

// - Render all the cards on the page that represents all the pokemons, recreating the same layout, using JS



// console.log(data);


const foundPokemons = data.filter(function (data) {
    return data.name
  })


  const pokemonImg= data.map(function(img){
      return img.sprites.front_default
  } )


  const pokemonDescription = data.map(function (descript) {
    return descript.stats
  })

 


function firstPokemonCard(name, pokemonSrc, description ){
    const liEl = document.createElement("li")
    liEl.setAttribute("class", "card")

    const h2El = document.createElement("h2")
    h2El.setAttribute("class", "card--title")
    name = h2El.textContent = foundPokemons[0].name

    const imgEl = document.createElement("img")
    pokemonSrc = imgEl.setAttribute("src", pokemonImg[0])
    imgEl.setAttribute("class", "card--img")
    imgEl.setAttribute("width", "256px")

    const ulEl = document.createElement("ul")
    ulEl.setAttribute("class", "Card--text")
    ulEl.style.listStyle = "none"
   

    description = ulEl.textContent = pokemonDescription[0][0]



    liEl.append(h2El, imgEl, ulEl)
    const cardEl = document.querySelector('.cards')
    cardEl.style.listStyle = "none"
    cardEl.append(liEl)
}


function secondPokemonCard(name, pokemonSrc, description ){
    const liEl = document.createElement("li")
    liEl.setAttribute("class", "card")

    const h2El = document.createElement("h2")
    h2El.setAttribute("class", "card--title")
    name = h2El.textContent = foundPokemons[1].name

    const imgEl = document.createElement("img")
    pokemonSrc = imgEl.setAttribute("src", pokemonImg[1])
    imgEl.setAttribute("class", "card--img")
    imgEl.setAttribute("width", "256px")

    const ulEl = document.createElement("ul")
    ulEl.setAttribute("class", "Card--text")
    description = ulEl.textContent = pokemonDescription[1]


    liEl.append(h2El, imgEl, ulEl)
    const cardEl = document.querySelector('.cards')
    cardEl.append(liEl)
}


function thirdPokemonCard(name, pokemonSrc, description ){
    const liEl = document.createElement("li")
    liEl.setAttribute("class", "card")

    const h2El = document.createElement("h2")
    h2El.setAttribute("class", "card--title")
    name = h2El.textContent = foundPokemons[3].name

    const imgEl = document.createElement("img")
    pokemonSrc = imgEl.setAttribute("src", pokemonImg[3])
    imgEl.setAttribute("class", "card--img")
    imgEl.setAttribute("width", "256px")

    const ulEl = document.createElement("ul")
    ulEl.setAttribute("class", "Card--text")
    description = ulEl.textContent = pokemonDescription[3]


    liEl.append(h2El, imgEl, ulEl)
    const cardEl = document.querySelector('.cards')
    cardEl.append(liEl)
}


function fourthPokemonCard(name, pokemonSrc, description ){
    const liEl = document.createElement("li")
    liEl.setAttribute("class", "card")

    const h2El = document.createElement("h2")
    h2El.setAttribute("class", "card--title")
    name = h2El.textContent = foundPokemons[4].name

    const imgEl = document.createElement("img")
    pokemonSrc = imgEl.setAttribute("src", pokemonImg[4])
    imgEl.setAttribute("class", "card--img")
    imgEl.setAttribute("width", "256px")

    const ulEl = document.createElement("ul")
    ulEl.setAttribute("class", "Card--text")
    description = ulEl.textContent = pokemonDescription[4]


    liEl.append(h2El, imgEl, ulEl)
    const cardEl = document.querySelector('.cards')
    cardEl.append(liEl)
}

function fifthPokemonCard(name, pokemonSrc, description ){
    const liEl = document.createElement("li")
    liEl.setAttribute("class", "card")

    const h2El = document.createElement("h2")
    h2El.setAttribute("class", "card--title")
    name = h2El.textContent = foundPokemons[5].name

    const imgEl = document.createElement("img")
    pokemonSrc = imgEl.setAttribute("src", pokemonImg[5])
    imgEl.setAttribute("class", "card--img")
    imgEl.setAttribute("width", "256px")

    const ulEl = document.createElement("ul")
    ulEl.setAttribute("class", "Card--text")
    description = ulEl.textContent = pokemonDescription[5]


    liEl.append(h2El, imgEl, ulEl)
    const cardEl = document.querySelector('.cards')
    cardEl.append(liEl)
}

function sixthPokemonCard(name, pokemonSrc, description ){
    const liEl = document.createElement("li")
    liEl.setAttribute("class", "card")

    const h2El = document.createElement("h2")
    h2El.setAttribute("class", "card--title")
    name = h2El.textContent = foundPokemons[6].name

    const imgEl = document.createElement("img")
    pokemonSrc = imgEl.setAttribute("src", pokemonImg[6])
    imgEl.setAttribute("class", "card--img")
    imgEl.setAttribute("width", "256px")

    const ulEl = document.createElement("ul")
    ulEl.setAttribute("class", "Card--text")
    description = ulEl.textContent = pokemonDescription[6]


    liEl.append(h2El, imgEl, ulEl)
    const cardEl = document.querySelector('.cards')
    cardEl.append(liEl)
}

firstPokemonCard()
secondPokemonCard()
thirdPokemonCard()
fourthPokemonCard()
fifthPokemonCard()
sixthPokemonCard()

