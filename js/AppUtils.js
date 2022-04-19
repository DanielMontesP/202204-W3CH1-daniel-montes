import { createLista } from "./personajes.js";
const container = document.querySelector(".container");

const paintIcon = (fatherContainer, PersonType) => {
  const img = document.createElement("img");
  img.className = "emoji";
  // debugger;
  switch (PersonType) {
    case "Asesor":
      img.classList.add("emojiAsesor");
      break;
    case "Rey":
      img.classList.add("emojiRey");
      break;
    case "Escudero":
      img.classList.add("emojiEscudero");
      break;
    case "Luchador":
      img.classList.add("emojiLuchador");
      break;
    default:
  }

  fatherContainer.appendChild(img);
};

const paintContainer = () => {
  let card = document.createElement("div");
  card.className = "character character__card";
  container.append(card);
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
  let card = document.createElement("h3");
  card.innerHTML =
    Person.nombre +
    "<br>" +
    "Edad: " +
    Person.edad +
    " años<br>" +
    personEstado(Person);
  card.className = "character__name";
  fatherContainer.appendChild(card);
  return card;
};
const paintPhoto = (fatherContainer, Person) => {
  const img = document.createElement("img");
  // img.className = "emoji";
  //debugger;
  switch (Person.nombre) {
    case "Tyrion":
      img.classList.add("photo", "photoTyrion", "character__picture");
      break;
    case "Joffrey":
      img.classList.add("photo", "photoJoffrey", "character__picture");
      img.src = "../img/joffrey.jpeg";
      break;
    case "Jaime":
      img.classList.add("photo", "photoJaime", "character__picture");
      break;
    case "Daenerys":
      img.classList.add("photo", "photoDaenerys", "character__picture");
      break;
    case "Bronn":
      img.classList.add("photo", "photoBronn", "character__picture");
      break;
    default:
  }

  fatherContainer.appendChild(img);
};
const paintCard = (Person) => {
  const fatherContainer = paintContainer();
  paintPhoto(fatherContainer, Person);
  paintPersonInfo(fatherContainer, Person);
  paintIcon(fatherContainer, Person.constructor.name);
};

const paintCards = (Personajes) => {
  Personajes.forEach((personaje) => {
    paintCard(personaje);
  });
};

export const showCards = () => {
  // console.log();
  paintCards(createLista());
};
