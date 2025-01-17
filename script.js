const heroesData = [
    // EXP Lane 
    { name: "Balmond", image: "https://via.placeholder.com/400x200", counters: ["Alice", "Esmeralda", "Gord"] },
    { name: "Alucard", image: "https://via.placeholder.com/400x200", counters: ["Saber", "Chou", "Minsitthar"] },
    { name: "Bane", image: "https://via.placeholder.com/400x200", counters: ["Pharsa", "Lunox", "Harith"] },
    { name: "Zilong", image: "https://via.placeholder.com/400x200", counters: ["Franco", "Khufra", "Tigreal"] },
    { name: "Freya", image: "https://via.placeholder.com/400x200", counters: ["Saber", "Gusion", "Helcurt"] },
    { name: "Chou", image: "https://via.placeholder.com/400x200", counters: ["Pharsa", "Eudora", "Lunox"] },
    { name: "Sun", image: "https://via.placeholder.com/400x200", counters: ["Karrie", "Wanwan", "Masha"] },
    { name: "Alpha", image: "https://via.placeholder.com/400x200", counters: ["Harith", "Lunox", "Esmeralda"] },
    { name: "Ruby", image: "https://via.placeholder.com/400x200", counters: ["Wanwan", "Natan", "Miya"] },
    { name: "Hilda", image: "https://via.placeholder.com/400x200", counters: ["Karrie", "Thamuz", "Lylia"] },
    { name: "Lapu-Lapu", image: "https://via.placeholder.com/400x200", counters: ["Thamuz", "Yu Zhong", "Alice"] },
    { name: "Roger", image: "https://via.placeholder.com/400x200", counters: ["Saber", "Chou", "Lunox"] },
    { name: "Gatotkaca", image: "https://via.placeholder.com/400x200", counters: ["Karrie", "Esmeralda", "Lunox"] },
    { name: "Argus", image: "https://via.placeholder.com/400x200", counters: ["Saber", "Gusion", "Franco"] },
    { name: "Jawhead", image: "https://via.placeholder.com/400x200", counters: ["Wanwan", "Melissa", "Natan"] },
    { name: "Martis", image: "https://via.placeholder.com/400x200", counters: ["Franco", "Khufra", "Hylos"] },
    { name: "Uranus", image: "https://via.placeholder.com/400x200", counters: ["Karrie", "Kimmy", "Esmeralda"] },
    { name: "Kaja", image: "https://via.placeholder.com/400x200", counters: ["Ling", "Wanwan", "Hayabusa"] },
    { name: "Aldous", image: "https://via.placeholder.com/400x200", counters: ["Franco", "Khufra", "Esmeralda"] },
    { name: "Leomord", image: "https://via.placeholder.com/400x200", counters: ["Lunox", "Karrie", "Esmeralda"] },
    { name: "Thamuz", image: "https://via.placeholder.com/400x200", counters: ["Wanwan", "Lunox", "Esmeralda"] },
    { name: "Minsitthar", image: "https://via.placeholder.com/400x200", counters: ["Chou", "Ling", "Harith"] },
    { name: "Badang", image: "https://via.placeholder.com/400x200", counters: ["Franco", "Khufra", "Ruby"] },
    { name: "Guinevere", image: "https://via.placeholder.com/400x200", counters: ["Esmeralda", "Chou", "Saber"] },
    { name: "Terizla", image: "https://via.placeholder.com/400x200", counters: ["Wanwan", "Esmeralda", "Lunox"] },
    { name: "X.Borg", image: "https://via.placeholder.com/400x200", counters: ["Wanwan", "Melissa", "Karrie"] },
    { name: "Dyrroth", image: "https://via.placeholder.com/400x200", counters: ["Wanwan", "Karrie", "Esmeralda"] },
    { name: "Masha", image: "https://via.placeholder.com/400x200", counters: ["Karrie", "Wanwan", "Minsitthar"] },
    { name: "Silvanna", image: "https://via.placeholder.com/400x200", counters: ["Franco", "Khufra", "Ruby"] },
    { name: "Yu Zhong", image: "https://via.placeholder.com/400x200", counters: ["Wanwan", "Esmeralda", "Lunox"] },
    { name: "Benedetta", image: "https://via.placeholder.com/400x200", counters: ["Franco", "Khufra", "Ruby"] },
    { name: "Khaleed", image: "https://via.placeholder.com/400x200", counters: ["Karrie", "Esmeralda", "Lunox"] },
    { name: "Barats", image: "https://via.placeholder.com/400x200", counters: ["Wanwan", "Melissa", "Esmeralda"] },
    { name: "Paquito", image: "https://via.placeholder.com/400x200", counters: ["Wanwan", "Esmeralda", "Karrie"] },
    { name: "Gloo", image: "https://via.placeholder.com/400x200", counters: ["Wanwan", "Esmeralda", "Lunox"] },
    { name: "Phoveus", image: "https://via.placeholder.com/400x200", counters: ["Wanwan", "Ling", "Lancelot"] },
    { name: "Aulus", image: "https://via.placeholder.com/400x200", counters: ["Wanwan", "Lunox", "Esmeralda"] },
    { name: "Edith", image: "https://via.placeholder.com/400x200", counters: ["Wanwan", "Lunox", "Esmeralda"] },
    { name: "Yin", image: "https://via.placeholder.com/400x200", counters: ["Franco", "Khufra", "Ruby"] },
    { name: "Julian", image: "https://via.placeholder.com/400x200", counters: ["Wanwan", "Esmeralda", "Karrie"] },
    { name: "Fredrinn", image: "https://via.placeholder.com/400x200", counters: ["Wanwan", "Melissa", "Esmeralda"] },
    { name: "Joy", image: "https://via.placeholder.com/400x200", counters: ["Wanwan", "Melissa", "Karrie"] },
    { name: "Arlott", image: "https://via.placeholder.com/400x200", counters: ["Wanwan", "Lunox", "Esmeralda"] },
    // Jungle
    { name: "Ling", image: "https://via.placeholder.com/400x200", counters: ["Franco", "Khufra", "Uranus"] },
    { name: "Lancelot", image: "https://via.placeholder.com/400x200", counters: ["Phoveus", "Khufra", "Tigreal"] },
    { name: "Karina", image: "https://via.placeholder.com/400x200", counters: ["Chou", "Franco", "Ruby"] },
    { name: "Hayabusa", image: "https://via.placeholder.com/400x200", counters: ["Khufra", "Ruby", "Phoveus"] },
    { name: "Helcurt", image: "https://via.placeholder.com/400x200", counters: ["Chou", "Khufra", "Franco"] },
    { name: "Fanny", image: "https://via.placeholder.com/400x200", counters: ["Khufra", "Phoveus", "Tigreal"] },
    { name: "Gusion", image: "https://via.placeholder.com/400x200", counters: ["Franco", "Khufra", "Ruby"] },
    { name: "Alucard", image: "https://via.placeholder.com/400x200", counters: ["Chou", "Khufra", "Ruby"] },
    { name: "Granger", image: "https://via.placeholder.com/400x200", counters: ["Khufra", "Natalia", "Helcurt"] },
    { name: "Roger", image: "https://via.placeholder.com/400x200", counters: ["Chou", "Khufra", "Franco"] },
    { name: "Yi Sun-shin", image: "https://via.placeholder.com/400x200", counters: ["Chou", "Natalia", "Ling"] },
    { name: "Moskov", image: "https://via.placeholder.com/400x200", counters: ["Natalia", "Helcurt", "Ling"] },

    // Gold Lane
    { name: "Wanwan", image: "https://via.placeholder.com/400x200", counters: ["Natalia", "Ling", "Hayabusa"] },
    { name: "Melissa", image: "https://via.placeholder.com/400x200", counters: ["Chou", "Ling", "Natalia"] },
    { name: "Lesley", image: "https://via.placeholder.com/400x200", counters: ["Natalia", "Ling", "Helcurt"] },
    { name: "Kimmy", image: "https://via.placeholder.com/400x200", counters: ["Natalia", "Hayabusa", "Ling"] },
    { name: "Clint", image: "https://via.placeholder.com/400x200", counters: ["Natalia", "Hayabusa", "Ling"] },
    { name: "Brody", image: "https://via.placeholder.com/400x200", counters: ["Natalia", "Helcurt", "Ling"] },
    { name: "Beatrix", image: "https://via.placeholder.com/400x200", counters: ["Chou", "Hayabusa", "Ling"] },
    { name: "Claude", image: "https://via.placeholder.com/400x200", counters: ["Natalia", "Hayabusa", "Helcurt"] },
    { name: "Popol and Kupa", image: "https://via.placeholder.com/400x200", counters: ["Chou", "Hayabusa", "Ling"] },
    { name: "Hanabi", image: "https://via.placeholder.com/400x200", counters: ["Natalia", "Ling", "Helcurt"] },
    { name: "Natan", image: "https://via.placeholder.com/400x200", counters: ["Saber", "Helcurt", "Chou"] },

    // Mid Lane
    { name: "Pharsa", image: "https://via.placeholder.com/400x200", counters: ["Ling", "Saber", "Hayabusa"] },
    { name: "Kagura", image: "https://via.placeholder.com/400x200", counters: ["Chou", "Franco", "Helcurt"] },
    { name: "Lunox", image: "https://via.placeholder.com/400x200", counters: ["Esmeralda", "Thamuz", "Karrie"] },
    { name: "Eudora", image: "https://via.placeholder.com/400x200", counters: ["Chou", "Helcurt", "Natalia"] },
    { name: "Vale", image: "https://via.placeholder.com/400x200", counters: ["Chou", "Khufra", "Franco"] },
    { name: "Valir", image: "https://via.placeholder.com/400x200", counters: ["Chou", "Franco", "Helcurt"] },
    { name: "Chang'e", image: "https://via.placeholder.com/400x200", counters: ["Ling", "Natalia", "Helcurt"] },
    { name: "Lylia", image: "https://via.placeholder.com/400x200", counters: ["Ling", "Franco", "Khufra"] },
    { name: "Cecilion", image: "https://via.placeholder.com/400x200", counters: ["Natalia", "Ling", "Helcurt"] },
    { name: "Yve", image: "https://via.placeholder.com/400x200", counters: ["Ling", "Saber", "Hayabusa"] },
    { name: "Harith", image: "https://via.placeholder.com/400x200", counters: ["Chou", "Khufra", "Ruby"] },
    { name: "Zhask", image: "https://via.placeholder.com/400x200", counters: ["Chou", "Franco", "Helcurt"] },

    // Roam
    { name: "Franco", image: "https://via.placeholder.com/400x200", counters: ["Wanwan", "Beatrix", "Karrie"] },
    { name: "Khufra", image: "https://via.placeholder.com/400x200", counters: ["Ling", "Hayabusa", "Lancelot"] },
    { name: "Tigreal", image: "https://via.placeholder.com/400x200", counters: ["Hayabusa", "Ling", "Lancelot"] },
    { name: "Atlas", image: "https://via.placeholder.com/400x200", counters: ["Wanwan", "Beatrix", "Melissa"] },
    { name: "Lolita", image: "https://via.placeholder.com/400x200", counters: ["Wanwan", "Melissa", "Beatrix"] },
    { name: "Hylos", image: "https://via.placeholder.com/400x200", counters: ["Ling", "Wanwan", "Melissa"] },
    { name: "Minotaur", image: "https://via.placeholder.com/400x200", counters: ["Wanwan", "Melissa", "Beatrix"] },
    { name: "Akai", image: "https://via.placeholder.com/400x200", counters: ["Ling", "Hayabusa", "Lancelot"] },
    { name: "Diggie", image: "https://via.placeholder.com/400x200", counters: ["Franco", "Atlas", "Khufra"] },
    { name: "Estes", image: "https://via.placeholder.com/400x200", counters: ["Chou", "Natalia", "Ling"] }

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
