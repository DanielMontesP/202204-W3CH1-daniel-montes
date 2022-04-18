import Asesor from "./Asesor.js";
import Escudero from "./Escudero.js";
import Luchador from "./Luchador.js";
import Personaje from "./Personaje.js";
import Rey from "./Rey.js";
import ButtonComponent from "../components/ButtonComponent.js";

const container = document.querySelector(".container");

const startButton = new ButtonComponent(container, "Winter is coming");

export const joffrey = new Rey("Joffrey", "Baratheon", 16, 2);
export const jaime = new Luchador("Jaime", "Lannister", 45, "Espada", 7);
export const daenerys = new Luchador(
  "Daenerys",
  "Targaryen",
  30,
  "Dragones",
  10
);
export const tyrion = new Asesor("Tyrion", "Lannister", 40, daenerys);
export const bronn = new Escudero("Bronn", "AguasNegras", 54, 0, jaime);

// console.log(ListaPersonajes);
