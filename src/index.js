// - Make sure you check and understand the data that is given to you!
// - Create a card using JS that represents a single pokemon, use the example image as a reference. 
// You will also find an HTML example commented out in the index.html
// - Use the exact CSS classes you see in the example HTML to obtain the same style for each card
// - The cards should be nested inside <ul class="cards"></ul>
// - Use the official-artwork object key as the images for the card. The images are all inside of the sprites key, in each pokemon object
// pokemon.sprites.other['official-artwork'].front_default

// - Render all the cards on the page that represents all the pokemons, recreating the same layout, using JS



// console.log(data);


const foundUsers = data.filter(function (data) {
    return data.name
  })




function createPokemonCard(name, src, description ){
    const liEl = document.createElement("li")
    liEl.setAttribute("class", "card")

    const h2El = document.createElement("h2")
    h2El.setAttribute("class", "card--title")
    h2El.textContent = name

    const imgEl = document.createElement("img")
    imgEl.setAttribute("src", src);
    imgEl.setAttribute("class", "card--img");
    imgEl.setAttribute("width", "256px");

    const ulEl = document.createElement("ul")
    ulEl.setAttribute("class", "Card--text")
    ulEl.textContent = description


    liEl.prepend(h2El, imgEl, ulEl)
    const cardEl = document.querySelector('.cards')
    cardEl.append(liEl)





   

    // const liEl = document.querySelector('.card')
    // const h2El = document.querySelector('.card--title')
    // const imgEl = document.querySelector('.card--img')
    // const ulEl = document.querySelector('.card--text')
    // liEl.prepend(h2El, imgEl, ulEl)

    // const cardEl = document.querySelector('.cards')
    // cardEl.append(liEl)
}

createPokemonCard(  "Pikachu",
"https://static.wikia.nocookie.net/wii/images/8/89/Pikachu.jpg",
"Piiiikachuuuuuuu!"
)
