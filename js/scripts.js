console.log("@MazinhoBigDaddy chegou!");


//selects
const cardBtnSme = document.querySelector("#card_sme i");
const cardSme = document.querySelector("#cont_sme");

const cardBtnTabuada = document.querySelector("#card_tabuada i");
const cardTabuada = document.querySelector("#cont_tabuada");

const cardBtnAdvogados = document.querySelector("#card_advogados i");
const cardAdvogados = document.querySelector("#cont_advogados");

const cardBtnQr = document.querySelector("#card_qr i");
const cardQr = document.querySelector("#cont_qr");

const cardBtnToDo = document.querySelector("#card_todo i");
const cardToDo = document.querySelector("#cont_todo");

const cardBtnSenha = document.querySelector("#card_senha i");
const cardSenha = document.querySelector("#cont_senha");

const cardBtnForm1 = document.querySelector("#card_form1 i");
const cardForm1 = document.querySelector("#cont_form1");

const cardBtnCalcImcV1 = document.querySelector("#card_calcimcv1 i");
const cardCalcImcV1 = document.querySelector("#cont_calcimcv1");

const cardBtnCalcImcV2 = document.querySelector("#card_calcimcv2 i");
const cardCalcImcV2 = document.querySelector("#cont_calcimcv2");

const cardBtnClima = document.querySelector("#card_clima i");
const cardClima = document.querySelector("#cont_clima");

const cardBtnCuriAndro = document.querySelector("#card_curiandro i");
const cardCuriAndro = document.querySelector("#cont_curiandro");

const cardBtnCordel = document.querySelector("#card_cordel i");
const cardCordel = document.querySelector("#cont_cordel");

const cardBtnQuiz = document.querySelector("#card_quiz i");
const cardQuiz = document.querySelector("#cont_quiz");


//funcs
const abreFechaSme = (e) => {
  cardBtnSme.classList.toggle("spin");
  cardSme.classList.toggle("esconde");
};

const abreFechaTabuada = (e) => {
  cardBtnTabuada.classList.toggle("spin");
  cardTabuada.classList.toggle("esconde");
};

const abreFechaAdvogados = (e) => {
  cardBtnAdvogados.classList.toggle("spin");
  cardAdvogados.classList.toggle("esconde");
};

const abreFechaQr = (e) => {
  cardBtnQr.classList.toggle("spin");
  cardQr.classList.toggle("esconde");
};

const abreFechaToDo = (e) => {
  cardBtnToDo.classList.toggle("spin");
  cardToDo.classList.toggle("esconde");
};

const abreFechaSenha = (e) => {
  cardBtnSenha.classList.toggle("spin");
  cardSenha.classList.toggle("esconde");
};

const abreFechaForm1 = (e) => {
  cardBtnForm1.classList.toggle("spin");
  cardForm1.classList.toggle("esconde");
};

const abreFechaCalcImcV1 = (e) => {
  cardBtnCalcImcV1.classList.toggle("spin");
  cardCalcImcV1.classList.toggle("esconde");
};

const abreFechaCalcImcV2 = (e) => {
  cardBtnCalcImcV2.classList.toggle("spin");
  cardCalcImcV2.classList.toggle("esconde");
};

const abreFechaClima = (e) => {
  cardBtnClima.classList.toggle("spin");
  cardClima.classList.toggle("esconde");
};

const abreFechaCuriAndro = (e) => {
  cardBtnCuriAndro.classList.toggle("spin");
  cardCuriAndro.classList.toggle("esconde");
};

const abreFechaCordel = (e) => {
  cardBtnCordel.classList.toggle("spin");
  cardCordel.classList.toggle("esconde");
};

const abreFechaQuiz = (e) => {
  cardBtnQuiz.classList.toggle("spin");
  cardQuiz.classList.toggle("esconde");
};


//events
cardBtnSme.addEventListener("click", (e) => {
  abreFechaSme();
});

cardBtnTabuada.addEventListener("click", (e) => {
  abreFechaTabuada();
});

cardBtnAdvogados.addEventListener("click", (e) => {
  abreFechaAdvogados();
});

cardBtnQr.addEventListener("click", (e) => {
  abreFechaQr();
});

cardBtnToDo.addEventListener("click", (e) => {
  abreFechaToDo();
});

cardBtnSenha.addEventListener("click", (e) => {
  abreFechaSenha();
});

cardBtnForm1.addEventListener("click", (e) => {
  abreFechaForm1();
});

cardBtnCalcImcV1.addEventListener("click", (e) => {
  abreFechaCalcImcV1();
});

cardBtnCalcImcV2.addEventListener("click", (e) => {
  abreFechaCalcImcV2();
});

cardBtnClima.addEventListener("click", (e) => {
  abreFechaClima();
});

cardBtnCuriAndro.addEventListener("click", (e) => {
  abreFechaCuriAndro();
});

cardBtnCordel.addEventListener("click", (e) => {
  abreFechaCordel();
});

cardBtnQuiz.addEventListener("click", (e) => {
  abreFechaQuiz();
});