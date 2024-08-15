const decreaseBtn = document.getElementById('decreaseBtn');
const increaseBtn = document.getElementById('increaseBtn');
const resetBtn = document.getElementById('resetBtn');
const counterLabel = document.getElementById('counterLabel');
let count = 0;
let interval;

function startIncreasing() {
  interval = setInterval(() => {
    count++;
    counterLabel.textContent = count;
  }, 100); 
}

function startDecreasing() {
  interval = setInterval(() => {
    count--;
    counterLabel.textContent = count;
  }, 100); 
}

function resetCounter() {
  count = 0;
  counterLabel.textContent = count;
}

increaseBtn.addEventListener('mousedown', startIncreasing);
increaseBtn.addEventListener('mouseup', () => clearInterval(interval));
increaseBtn.addEventListener('mouseleave', () => clearInterval(interval));

decreaseBtn.addEventListener('mousedown', startDecreasing);
decreaseBtn.addEventListener('mouseup', () => clearInterval(interval));
decreaseBtn.addEventListener('mouseleave', () => clearInterval(interval));

resetBtn.addEventListener('click', resetCounter);
