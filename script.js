console.log(window);
console.log(document);

// const card = document.getElementsByClassName("card"); HTML COLLECTION
// const card = document.getElementsByClassName("card")[0]; CARD

const card = document.querySelector(".card");
const title = document.querySelector("#title");

const btn = document.querySelector(".btn");

const parent = btn.parentNode; // Card Body

const parent2 = btn.closest(".card");

const sibling = btn.nextElementSibling;

const sibling2 = btn.previousElementSibling;

const divAll = document.querySelectorAll(".input");

divAll.forEach((element) => {
  console.log(element);
});

console.log(card.firstChild);
console.log(card.firstElementChild);
console.log(card.lastElementChild);
console.log(card.children);
console.log(card.lastChild);

btn.textContent = "Test";

btn.innerHTML = "<i>Html</i>";

console.log(divAll);

console.log(sibling2);

console.log(sibling);

console.log(parent2); // till Card

console.log(parent);

console.log(btn);

console.log(title);

console.log(card);
