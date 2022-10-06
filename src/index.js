import Button from "./components/Button";
import Header from "./components/Header";

const root = document.getElementById("root");

const state = {
  msg: "Wahoo",
  txt: "Click Me",
  buttons: Array.from({ length: 100 }, (_, i) => i + 1),
};

function renderButtons(buttons) {
  return buttons.map((buttonNum) => Button({ txt: buttonNum })).join("\n");
}

function render() {
  return `<main>
      ${Header(state)}${Button(state)}${renderButtons(state.buttons)}
    </main>`;
}

root.innerHTML = render();
