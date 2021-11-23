const foundPokemons = data.filter(function (data) {
    return data.name
  })


  const pokemonImg= data.map(function(img){
      return img.sprites.front_default
  } )


  const pokemonDescription = data.map(function (descript) {
    return descript.stats[0].base_stat
  })



//   const statsLiEL = document.createElement("li")
//   description = statsLiEL.textContent = [`HP`]
    // ulEl.append(statsLiEL)
    // , ATATCK ,DEFENSE, SPECIAL-ATTA CK, SPECIAL-DEFENSE,SPEED

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
    // description = ulEl.textContent = 

    const pokemonHp = document.createElement('li')
    pokemonHp.textContent = ` HP ${pokemonDescription[0]}`
    ulEl.append(pokemonHp)

    liEl.append(h2El, imgEl, ulEl)
    const cardEl = document.querySelector('.cards')
    cardEl.style.listStyle = "none"
    cardEl.display
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
    ulEl.style.listStyle = 'none'

    const pokemonHp = document.createElement('li')
    pokemonHp.textContent = ` HP ${pokemonDescription[1]}`
    ulEl.append(pokemonHp)


    liEl.append(h2El, imgEl, ulEl)
    const cardEl = document.querySelector('.cards')
    cardEl.append(liEl)
}


function thirdPokemonCard(name, pokemonSrc, description ){
    const liEl = document.createElement("li")
    liEl.setAttribute("class", "card")

    const h2El = document.createElement("h2")
    h2El.setAttribute("class", "card--title")
    name = h2El.textContent = foundPokemons[2].name

    const imgEl = document.createElement("img")
    pokemonSrc = imgEl.setAttribute("src", pokemonImg[2])
    imgEl.setAttribute("class", "card--img")
    imgEl.setAttribute("width", "256px")

    const ulEl = document.createElement("ul")
    ulEl.setAttribute("class", "Card--text")
    ulEl.style.listStyle = 'none'

    const pokemonHp = document.createElement('li')
    pokemonHp.textContent = ` HP ${pokemonDescription[2]}`
    ulEl.append(pokemonHp)

    liEl.append(h2El, imgEl, ulEl)
    const cardEl = document.querySelector('.cards')
    cardEl.append(liEl)
}


function fourthPokemonCard(name, pokemonSrc, description ){
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
    ulEl.style.listStyle = 'none'

    const pokemonHp = document.createElement('li')
    pokemonHp.textContent = ` HP ${pokemonDescription[3]}`
    ulEl.append(pokemonHp)


    liEl.append(h2El, imgEl, ulEl)
    const cardEl = document.querySelector('.cards')
    cardEl.append(liEl)
}

function fifthPokemonCard(name, pokemonSrc, description ){
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
    ulEl.style.listStyle = 'none'

    const pokemonHp = document.createElement('li')
    pokemonHp.textContent = ` HP ${pokemonDescription[4]}`
    ulEl.append(pokemonHp)


    liEl.append(h2El, imgEl, ulEl)
    const cardEl = document.querySelector('.cards')
    cardEl.append(liEl)
}

function sixthPokemonCard(name, pokemonSrc, description ){
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
    ulEl.style.listStyle = 'none'

    const pokemonHp = document.createElement('li')
    pokemonHp.textContent = ` HP ${pokemonDescription[5]}`
    ulEl.append(pokemonHp)


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

