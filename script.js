// =========================
// Part 1: Basics (Variables, Conditionals)
// =========================
let userName = "Lucie";
let userAge = 20;

if (userAge >= 18) {
  console.log(userName + " is an adult.");
} else {
  console.log(userName + " is a minor.");
}

// =========================
// Part 2: Functions
// =========================
function greet(name) {
  return "Hello, " + name + "!";
}

function calculateTotal(price, quantity) {
  return price * quantity;
}

console.log(greet("Lucie"));
console.log("Total: $" + calculateTotal(100, 3));

// =========================
// Part 3: Loops
// =========================
// Example 1: for loop
for (let i = 1; i <= 5; i++) {
  console.log("Count: " + i);
}

// Example 2: while loop
let countdown = 5;
while (countdown > 0) {
  console.log("Countdown: " + countdown);
  countdown--;
}

// =========================
// Part 4: DOM Manipulation
// =========================
const message = document.getElementById("message");
const changeBtn = document.getElementById("changeBtn");
const countBtn = document.getElementById("countBtn");
const list = document.getElementById("list");

// Example 1: Change text on button click
changeBtn.addEventListener("click", function() {
  message.textContent = "The message has been changed with JavaScript!";
});

// Example 2: Countdown when button clicked
countBtn.addEventListener("click", function() {
  let count = 5;
  const interval = setInterval(() => {
    if (count > 0) {
      message.textContent = "Countdown: " + count;
      count--;
    } else {
      message.textContent = "Done!";
      clearInterval(interval);
    }
  }, 1000);
});

// Example 3: Generate list dynamically
const fruits = ["Apple", "Banana", "Cherry"];
fruits.forEach(fruit => {
  let li = document.createElement("li");
  li.textContent = fruit;
  list.appendChild(li);
});