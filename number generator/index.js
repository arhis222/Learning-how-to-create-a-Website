
const randomNumber = document.getElementById("randomNumber");
const rollBtn = document.getElementById("rollBtn");

const min = -100;
const max = 100; 

rollBtn.addEventListener("click", () => {
    randomNumber.textContent = Math.floor(Math.random() * (max - min + 1) + min);
    });