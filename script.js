const heroesData = [
    { name: "Balmond", image: "https://via.placeholder.com/400x200", counters: ["Alice", "Esmeralda", "Gord"] },
    { name: "Alucard", image: "https://via.placeholder.com/400x200", counters: ["Saber", "Chou", "Minsitthar"] },
    { name: "Bane", image: "https://via.placeholder.com/400x200", counters: ["Pharsa", "Lunox", "Harith"] },
    // Add more heroes as required
];

const heroContainer = document.getElementById('heroContainer');
const counterList = document.getElementById('counterList');
const heroSearch = document.getElementById('heroSearch');

// Function to display hero cards
function displayHeroes(heroes) {
    heroContainer.innerHTML = '';
    heroes.forEach(hero => {
        const heroCard = document.createElement('div');
        heroCard.classList.add('hero-card');
        heroCard.innerHTML = `
            <img src="${hero.image}" alt="${hero.name}">
            <p>${hero.name}</p>
        `;
        heroCard.addEventListener('click', () => displayCounters(hero.counters));
        heroContainer.appendChild(heroCard);
    });
}

// Function to display counter heroes
function displayCounters(counters) {
    counterList.innerHTML = '';
    counters.forEach(counter => {
        const counterItem = document.createElement('li');
        counterItem.textContent = counter;
        counterList.appendChild(counterItem);
    });
}

// Search functionality
heroSearch.addEventListener('input', () => {
    const query = heroSearch.value.toLowerCase();
    const filteredHeroes = heroesData.filter(hero =>
        hero.name.toLowerCase().includes(query)
    );
    displayHeroes(filteredHeroes);
});

// Initially display all heroes
displayHeroes(heroesData);
