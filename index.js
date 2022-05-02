const score = document.querySelector("h3");
let counter = 0;
let nbBubble = 0;
let difficulté;
let niveau;
difficulté = prompt("Entrez la difficulté(facile, moyen, difficile, hardcore)");

if (difficulté == "facile") {
  niveau = 3000;
} else if (difficulté == "moyen") {
  niveau = 2000;
} else if (difficulté == "difficile") {
  niveau = 1000;
} else {
  niveau = 500;
}

let interval = setInterval(bubbleMarker, niveau);

if (nbBubble > 40) {
  clearInterval(interval);
}

function bubbleMarker() {
  ++nbBubble;
  console.log(nbBubble);
  const bubble = document.createElement("span");
  bubble.classList.add("bubble");
  document.body.appendChild(bubble);

  const size = Math.random() * 100 + 100 + "px";
  bubble.style.height = size;
  bubble.style.width = size;

  bubble.style.top = Math.random() * 100 + 50 + "%";
  bubble.style.left = Math.random() * 100 + "%";

  const plusMinus = Math.random() > 0.5 ? 1 : -1;
  bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

  bubble.addEventListener("click", () => {
    bubble.remove();
    ++counter;
    score.textContent = counter;
  });

  setTimeout(() => {
    bubble.remove();
  }, 8000);

  if (nbBubble > 39) {
    clearInterval(interval);
    setTimeout(() => {
      let resulat;
      if (counter == nbBubble) {
        resulat = "Vous avez gagné";
      } else {
        resulat = "Vous avez perdu";
      }
      alert(`Score : ${counter}/${nbBubble}, ${resulat}`);
    }, 4000);
  }
}
