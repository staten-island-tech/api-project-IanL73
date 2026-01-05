import './style.css'

const container = document.querySelector(".card1");
const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
if (response.status !== 200){
  throw new Error("Failed to fetch data :(")
}
else {
  const data = await response.json()
  console.log(data.sprites.front_default)
  const image = data.sprites.front_shiny
  console.log(container)
  container.insertAdjacentHTML(
      "beforeend",
      `<img src="${image}"/>`)
}