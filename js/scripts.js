console.log("@MazinhoBigDaddy chegou!");

//selects
const cardBtn = document.querySelector(".card_acordeon i");
const cardTabuada = document.querySelector("#tabuada");





//funcs
const abreFecha = (e) => {
  cardBtn.classList.toggle("spin");
  cardTabuada.classList.toggle("esconde");

}



//events

cardBtn.addEventListener("click", (e) => {
  abreFecha();
})