import './style.css'

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
const EveryPokemonEverResponse = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
if (EveryPokemonEverResponse.status != 200) {
  throw new Error("failed to fetch data :(")
}
else {
  const EveryPokemonEver = await EveryPokemonEverResponse.json()
  let response1number = getRandomInt(1350)
  const response1 = await fetch(EveryPokemonEver.results[response1number].url)
  const card1 = document.querySelector(".card1");
  let response2number = getRandomInt(1350)
  while (response1number === response2number) {
    let response2number = getRandomInt(1350)
  }
  const response2 = await fetch(EveryPokemonEver.results[response2number].url)
  const card2 = document.querySelector(".card2");
  if (response1.status !== 200 & response2.status !== 200){
    throw new Error("Failed to fetch data :(")
  }
  else {
    console.log(response1)
    console.log(response2)
    const data1 = await response1.json()
    const data2 = await response2.json()
    console.log(data1)
    console.log(data2)
    const name1 = data  // WORKING ON THIS DON'T IGNORE >:(
    const image1 = data1.sprites.front_default
    console.log(card1)
    card1.insertAdjacentHTML(
        "beforeend",
        `<h3>${image}</h3>`)
    console.log(data1)
    document.querySelector(".card1").addEventListener("click", () => {
    if (data1.stats[1].base_stat > data2.stats[1].base_stat) {
      document.querySelector(".container").insertAdjacentHTML(
        "beforeend",
        `<h2>CORRECT</h2>`)
    }else{
      document.querySelector(".container").insertAdjacentHTML(
        "beforeend",
        `<h2>WRONG</h2>`)
    }
    })
    const image2 = data2.sprites.front_default
    console.log(card2)
    card2.insertAdjacentHTML(
        "beforeend",
        `<img src="${image2}"/>`
    )
    document.querySelector(".card2").addEventListener("click", () => {
    if (data1.stats[1].base_stat < data2.stats[1].base_stat) {
      document.querySelector(".container").insertAdjacentHTML(
        "beforeend",
        `<h2>CORRECT</h2>`)
    }else{
      document.querySelector(".container").insertAdjacentHTML(
        "beforeend",
        `<h2>WRONG</h2>`)
    }
    })
  }
}