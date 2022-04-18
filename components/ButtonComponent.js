import { showCards } from "../js/AppUtils.js";

import { createLista } from "../js/personajes.js";

class ButtonComponent {
  element;

  constructor(parentElement, text) {
    this.element = document.createElement("button");

    this.element.textContent = text;
    this.element.className = "action-button";
    parentElement.append(this.element);

    this.element.addEventListener("click", () => {
      debugger;
      showCards(createLista());
    });
  }
}

export default ButtonComponent;
