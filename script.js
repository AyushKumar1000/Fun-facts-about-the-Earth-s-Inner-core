// script.js
const facts = [
    "The Earth's inner core is growing by about 1mm in diameter each year.",
    "The inner core is as hot as the surface of the Sun (~5,400°C).",
    "The core's pressure is equal to 40,000 Eiffel Towers.",
    "The inner core spins faster than the rest of the planet.",
    "The inner core is 88% iron."
    // Add more facts as needed
];

let currentFactIndex = -1;

document.getElementById('next-fact').addEventListener('click', () => {
    currentFactIndex = (currentFactIndex + 1) % facts.length;
    const factDisplay = document.getElementById('current-fact');
    factDisplay.textContent = facts[currentFactIndex];
    
    // Add fade effect
    factDisplay.style.opacity = 0;
    setTimeout(() => {
        factDisplay.style.opacity = 1;
    }, 50);
});
