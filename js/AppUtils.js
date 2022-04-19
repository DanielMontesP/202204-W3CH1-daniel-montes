import { createLista } from "./personajes.js";

const container = document.querySelector(".container");
let cardContainer = "";
let charOverlay = "";
const crearElemento = (Father, Tag, Style) => {
  const newElement = document.createElement(Tag);
  newElement.className = Style;
  Father.appendChild(newElement);
  return newElement;
};
const paintIcon = (fatherContainer, PersonType) => {
  // const emoji = document.createElement("i");
  // emoji.className = "emoji";
  // debugger;
  // switch (PersonType) {
  //   case "Asesor":
  //     emoji.classList.add("emojiAsesor");
  //     break;
  //   case "Rey":
  //     emoji.classList.add("emojiRey");
  //     break;
  //   case "Escudero":
  //     emoji.classList.add("emojiEscudero");
  //     break;
  //   case "Luchador":
  //     emoji.classList.add("emojiLuchador");
  //     break;
  //   default:
  // }
  const emoji = crearElemento(fatherContainer, "i", "emoji");
  switch (PersonType) {
    case "Asesor":
      emoji.classList.add("emojiAsesor");
      break;
    case "Rey":
      emoji.classList.add("emojiRey");
      break;
    case "Escudero":
      emoji.classList.add("emojiEscudero");
      break;
    case "Luchador":
      emoji.classList.add("emojiLuchador");
      break;
    default:
  }
  // fatherContainer.appendChild(emoji);
};

const paintContainer = () => {
  // const card = document.createElement("ul");
  // card.className = "characters-list row list-unstyled";
  // container.append(card);
  const card = crearElemento(
    container,
    "ul",
    "characters-list row list-unstyled"
  );
  return card;
};
const personEstado = (Person) => {
  if (Person.estado === "vivo") {
  } else {
  }
  return "";
};
const paintPersonInfo = (fatherContainer, Person) => {
  // debugger;
  const card = document.createElement("h3");
  card.innerHTML =
    `${Person.nombre}<br>` +
    `Edad: ${Person.edad} años<br>${personEstado(Person)}`;
  card.className = "character__name";
  fatherContainer.appendChild(card);
  return card;
};
const paintPhoto = (fatherContainer, Person) => {
  // debugger;
  const img = document.createElement("img");
  img.alt = `${Person.nombre} ${Person.familia}`;
  // img.className = "emoji";

  switch (Person.nombre) {
    case "Tyrion":
      img.classList.className = "character__picture card-img-top";
      img.src = "../img/tyrion.jpeg";
      break;
    case "Joffrey":
      img.classList.className = "character__picture card-img-top";
      img.src = "../img/joffrey.jpeg";
      break;
    case "Jaime":
      img.classList.className = "character__picture card-img-top";
      img.src = "../img/jaime.jpeg";
      break;
    case "Daenerys":
      img.classList.className = "character__picture card-img-top";
      img.src = "../img/daenerys.jpeg";
      break;
    case "Bronn":
      img.classList.className = "character__picture card-img-top";
      img.src = "../img/bronn.jpeg";
      break;
    default:
  }
  img.classList.add("character__picture", "card-img-top");
  fatherContainer.appendChild(img);
};

const paintBody = (fatherContainer, Person) => {
  cardContainer = document.createElement("div");
  cardContainer.className = "card-body";
  fatherContainer.appendChild(cardContainer);
  const cardH2 = document.createElement("h2");
  cardH2.className = "character__name card-title h4";
  cardContainer.appendChild(cardH2);
  cardH2.innerHTML = `${Person.nombre} ${Person.familia}`;

  const cardDivCharInfo = document.createElement("div");
  cardDivCharInfo.className = "character__info";
  cardContainer.appendChild(cardDivCharInfo);

  const ulListUnstyled = crearElemento(cardDivCharInfo, "ul", "list-unstyled");
  let ulLi = crearElemento(ulListUnstyled, "li", "");
  ulLi.innerHTML = `Edad: ${Person.edad} años`;
  ulLi = crearElemento(ulListUnstyled, "li", "");
  ulLi.innerHTML = " Estados ";
  if (Person.vivo) {
    crearElemento(ulLi, "i", "fas fa-thumbs-up");
  } else {
    crearElemento(ulLi, "i", "fas fa-thumbs-down");
  }

  charOverlay = crearElemento(cardContainer, "div", "character__overlay");
  ulLi = crearElemento(charOverlay, "ul", "list-unstyled");
  let liLi = crearElemento(ulLi, "li", "");
  if (Person.anyosReinado !== undefined) {
    liLi.innerHTML = `Años de reinado: ${Person.anyosReinado}`;
  }
  liLi = crearElemento(ulLi, "li", "");
  if (Person.arma !== undefined) {
    liLi.innerHTML += `Arma: ${Person.arma}`;
  }
  liLi = crearElemento(ulLi, "li", "");
  if (Person.valordestreza !== undefined) {
    liLi.innerHTML += `Destreza: ${Person.valordestreza}`;
  }
  liLi = crearElemento(ulLi, "li", "");
  if (Person.valorpelotismo !== undefined) {
    liLi.innerHTML += `Peloteo: ${Person.valorpelotismo}`;
  }
  liLi = crearElemento(ulLi, "li", "");
  liLi.innerHTML += "Asesora a: ";
  liLi = crearElemento(ulLi, "li", "");
  ulLi.innerHTML += "Sirve a: ";
};

const paintCardContainer = (fatherContainer, Person) => {
  cardContainer = document.createElement("div");
  cardContainer.className = "card character__card";
  fatherContainer.appendChild(cardContainer);
  paintIcon(cardContainer, Person.constructor.name);
  paintPhoto(cardContainer, Person);
  paintBody(cardContainer, Person);
};

const paintCols = (fatherContainer, Person) => {
  const col = document.createElement("li");
  col.className = "character col";
  fatherContainer.appendChild(col);

  paintCardContainer(col, Person);
};
const paintFooter = (Person, Element) => {
  const divButtons = crearElemento(Element, "div", "character__actions");
  const btHablar = crearElemento(divButtons, "button", "character__action btn");
  btHablar.innerHTML = "Habla";

  btHablar.addEventListener("click", () => {
    document.querySelector(".comunications").Style.visibility = "visible";
  });
  const btMorir = crearElemento(divButtons, "button", "character__action btn");
  btMorir.innerHTML = "Muere";

  btMorir.addEventListener("click", () => {
    debugger;
    Person.vivo.toggle();

    if (Person.vivo) {
      document.querySelector(".fas fa-thumbs-up").Style.visibility = true;
      document.querySelector(".fas fa-thumbs-down").Style.visibility = false;
    } else {
      document.querySelector(".fas fa-thumbs-down").Style.visibility = true;
      document.querySelector(".fas fa-thumbs-up").Style.visibility = false;
    }
  });
};
const paintCard = (Person) => {
  const fatherContainer = paintContainer();
  paintCols(fatherContainer, Person);
  paintFooter(Person, charOverlay);
  // paintPersonInfo(fatherContainer, Person);
  // paintIcon(fatherContainer, Person.constructor.name);
};

const paintCards = (Personajes) => {
  Personajes.forEach((personaje) => {
    paintCard(personaje);
  });

  const html =
    "<div class='comunications'><p class='comunications__text display-1'>Una frase que dice alguien</p><img class='comunications__picture' src='img/no-one.jpg' alt='Nombre y familia del que habla'></div>";

  document.body.innerHTML += html;
};

export const showCards = () => {
  // console.log();
  paintCards(createLista());
};
