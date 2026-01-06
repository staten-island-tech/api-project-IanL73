import './style.css'

const card1 = document.querySelector(".card1");
const response1 = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
const card2 = document.querySelector(".card2");
const response2 = await fetch("https://pokeapi.co/api/v2/pokemon/tyranitar-mega")
if (response1.status !== 200 & response2.status !== 200){
  throw new Error("Failed to fetch data :(")
}
else {
  const data1 = await response1.json()
  console.log(data1)
  const image1 = data1.sprites.front_default
  console.log(card1)
  card1.insertAdjacentHTML(
      "beforeend",
      `<img src="${image1}"/>`)
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
}

if (response1.status !== 200){
  throw new Error("Failed to fetch data :(")
}
else {
  const data2 = await response2.json()
  console.log(data2.sprites.front_default)
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