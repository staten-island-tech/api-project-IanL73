import './style.css'

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
const EveryPokemonEverResponse = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
if (EveryPokemonEverResponse.status != 200) {
  throw new Error("failed to fetch data :(")
}
else {
  const EveryPokemonEver = await EveryPokemonEverResponse.json()  // Get all the data we need
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
  }else{
    console.log(response1)
    console.log(response2)
    const data1 = await response1.json()
    const data2 = await response2.json()
    console.log(data1)
    console.log(data2)
    const name1 = data1.name  // Create card 1
    const image1 = data1.sprites.front_default
    console.log(card1)
    card1.insertAdjacentHTML(
        "beforeend",
        `
        <h3>${name1}</h3>
        <img src="${image1}"><img/>
        `)

    document.querySelector(".card1").addEventListener("click", () => {  // Tell you weather card 1 or two is wrong
    if (data1.stats[1].base_stat > data2.stats[1].base_stat) {
      document.querySelector(".outcome").innerHTML = ""
      document.querySelector(".outcome").insertAdjacentHTML(
        "afterbegin",
        `<h2>CORRECT</h2>`)
    }else{
      document.querySelector(".outcome").insertAdjacentHTML(
        "afterbegin",
        `<h2>WRONG</h2>`)
    }})


    const name2 = data2.name
    const image2 = data2.sprites.front_default
    console.log(card2)
    card2.insertAdjacentHTML(
        "beforeend",
        `
        <h3>${name2}</h3>
        <img src="${image2}"/>
        `
    )
    document.querySelector(".card2").addEventListener("click", () => {
      if (data1.stats[1].base_stat < data2.stats[1].base_stat) {
        document.querySelector(".outcome").innerHTML = ""
        document.querySelector(".outcome").insertAdjacentHTML(
          "afterbegin",
          `<h2>CORRECT</h2>`)
      }else{
        document.querySelector(".outcome").insertAdjacentHTML(
          "afterbegin",
          `<h2>WRONG</h2>`)
      let response1number = getRandomInt(1350)
      let response2number = getRandomInt(1350)
      while (response1number === response2number) {
        let response2number = getRandomInt(1350)
      }
      const
    }
    
    })
    }
}