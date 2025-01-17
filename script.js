const heroesData = [
    { name: "Balmond", image: "https://via.placeholder.com/400x200", counters: ["Alice", "Esmeralda", "Gord"] },
    { name: "Alucard", image: "https://via.placeholder.com/400x200", counters: ["Saber", "Chou", "Minsitthar"] },
    { name: "Bane", image: "https://via.placeholder.com/400x200", counters: ["Pharsa", "Lunox", "Harith"] },
    { name: "Zilong", image: "https://via.placeholder.com/400x200", counters: ["Franco", "Khufra", "Tigreal"] },
    { name: "Freya", image: "https://via.placeholder.com/400x200", counters: ["Saber", "Gusion", "Helcurt"] },
    // Add more heroes...
];

document.addEventListener("DOMContentLoaded", () => {
    displayHeroes(heroesData);
});

function displayHeroes(heroes) {
    const heroesList = document.getElementById("heroes-list");
    heroesList.innerHTML = "";
    heroes.forEach(hero => {
        const heroDiv = document.createElement("div");
        heroDiv.classList.add("hero-item");
        heroDiv.innerHTML = `<img src="${hero.image}" alt="${hero.name}" onclick="showCounters('${hero.name}')">`;
        heroesList.appendChild(heroDiv);
    });
}

function showCounters(heroName) {
    const hero = heroesData.find(h => h.name === heroName);
    if (hero) {
        const counterList = document.getElementById("counter-list");
        counterList.innerHTML = hero.counters.map(counter => `<li>${counter}</li>`).join("");
    }
}

function searchHero() {
    const searchTerm = document.getElementById("search").value.toLowerCase();
    const filteredHeroes = heroesData.filter(hero => hero.name.toLowerCase().includes(searchTerm));
    displayHeroes(filteredHeroes);
}
