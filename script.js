// script.js
const facts = [
    "The Earth's inner core is actually younger than the planet itself - it's still growing by about 1mm in diameter each year.",
    "The pressure at the Earth's core is about 3.6 million atmospheres - equivalent to the weight of 40,000 Eiffel Towers.",
    "The inner core spins slightly faster than the rest of the planet, making about one extra rotation every 1,000 years.",
    "Scientists believe the core is mostly composed of iron (about 85%) and nickel (about 10%), plus some lighter elements.",
    "If you could somehow extract Earth's core, it would be about the size of Mars.",
    "The temperature at the core is approximately as hot as the surface of the Sun.",
    "The outer core is liquid and acts like a giant dynamo, creating Earth's magnetic field.",
    "The core's magnetic field protects Earth from harmful solar radiation.",
    "Studies suggest the inner core might have its own inner core - sometimes called the innermost inner core.",
    "The boundary between the inner and outer core is located approximately 5,150 kilometers below Earth's surface.",
    "The core was formed when Earth was young through a process called gravitational differentiation.",
    "The inner core only became solid about 1-1.5 billion years ago - relatively recent in Earth's 4.5-billion-year history.",
    "The core's rotation helps to keep Earth's magnetic field stable, which is crucial for life as we know it.",
    "Recent research suggests parts of the inner core can be in different phases, some more crystalline than others.",
    "The outer core's movement generates electric currents stronger than any power plant on Earth.",
    "Scientists study the core by analyzing seismic waves from earthquakes.",
    "The inner core's crystalline structure is believed to be more complex than a simple solid sphere.",
    "Some scientists believe the inner core might periodically change its direction of rotation.",
    "The core's composition explains why Earth has the highest density of all the planets in our solar system.",
    
    
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
