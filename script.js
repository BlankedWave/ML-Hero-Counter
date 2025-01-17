const heroesData = [

    { name: "Kadita", image: "assets/images/kadita.png", counters: ["Lancelot", "Chou", "Gord"] },
    { name: "Esmeralda", image: "assets/images/esmeralda.png", counters: ["Balmond", "Alice", "Gord"] },
    { name: "Faramis", image: "assets/images/faramis.png", counters: ["Natalia", "Gusion", "Chou"] },
    { name: "Cecilion", image: "assets/images/cecilion.png", counters: ["Gusion", "Hayabusa", "Aldous"] },
    { name: "Baxia", image: "assets/images/baxia.png", counters: ["Chou", "Lancelot", "Aldous"] },
    { name: "Carmilla", image: "assets/images/carmilla.png", counters: ["Masha", "Aldous", "Chou"] },
    { name: "Luo Yi", image: "assets/images/luoyi.png", counters: ["Natalia", "Gord", "Kaja"] },
    { name: "Mathilda", image: "assets/images/mathilda.png", counters: ["Chou", "Aldous", "Lancelot"] },
    { name: "Karrie", image: "assets/images/karrie.png", counters: ["Tanking", "Chou", "Aldous"] },
    { name: "Xavier", image: "assets/images/xavier.png", counters: ["Natalia", "Chou", "Fanny"] },
    { name: "Novaria", image: "assets/images/novaria.png", counters: ["Lylia", "Gord", "Harith"] },
    { name: "Ixia", image: "assets/images/ixia.png", counters: ["Chou", "Lancelot", "Aldous"] },
    { name: "Nolan", image: "assets/images/nolan.png", counters: ["Zilong", "Leomord", "Chou"] },
    { name: "Cici", image: "assets/images/cici.png", counters: ["Masha", "Chou", "Leomord"] },
    { name: "Chip", image: "assets/images/chip.png", counters: ["Gusion", "Aldous", "Hayabusa"] },
    { name: "Zhuxin", image: "assets/images/zhuxin.png", counters: ["Natalia", "Lancelot", "Chou"] },
    { name: "Suyou", image: "assets/images/suyou.png", counters: ["Gord", "Lylia", "Fanny"] },
    { name: "Lukas", image: "assets/images/lukas.png", counters: ["Balmond", "Leomord", "Masha"] },
    { name: "Balmond", image: "https://via.placeholder.com/400x200", counters: ["Alice", "Esmeralda", "Gord"] },
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
    { name: "Ling", image: "https://via.placeholder.com/400x200", counters: ["Franco", "Khufra", "Uranus"] },
    { name: "Lancelot", image: "https://via.placeholder.com/400x200", counters: ["Phoveus", "Khufra", "Tigreal"] },
    { name: "Karina", image: "https://via.placeholder.com/400x200", counters: ["Chou", "Franco", "Ruby"] },
    { name: "Hayabusa", image: "https://via.placeholder.com/400x200", counters: ["Khufra", "Ruby", "Phoveus"] },
    { name: "Helcurt", image: "https://via.placeholder.com/400x200", counters: ["Chou", "Khufra", "Franco"] },
    { name: "Fanny", image: "https://via.placeholder.com/400x200", counters: ["Khufra", "Chou", "Saber"] },
    { name: "Gusion", image: "https://via.placeholder.com/400x200", counters: ["Franco", "Khufra", "Ruby"] },
    { name: "Alucard", image: "https://via.placeholder.com/400x200", counters: ["Chou", "Khufra", "Ruby"] },
    { name: "Granger", image: "https://via.placeholder.com/400x200", counters: ["Khufra", "Natalia", "Helcurt"] },
    { name: "Roger", image: "https://via.placeholder.com/400x200", counters: ["Chou", "Khufra", "Franco"] },
    { name: "Yi Sun-shin", image: "https://via.placeholder.com/400x200", counters: ["Chou", "Natalia", "Ling"] },
    { name: "Moskov", image: "https://via.placeholder.com/400x200", counters: ["Natalia", "Helcurt", "Ling"] },
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
    { name: "Pharsa", image: "https://via.placeholder.com/400x200", counters: ["Ling", "Saber", "Hayabusa"] },
    { name: "Kagura", image: "assets/images/kagura.png", counters: ["Chou", "Franco", "Helcurt"] },
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

const heroContainer = document.getElementById("hero-container");
const counterList = document.getElementById("counter-list");

// Function to render hero cards
function renderHeroes(heroes) {
    heroContainer.innerHTML = "";
    heroes.forEach(hero => {
        const card = document.createElement("div");
        card.classList.add("hero-card");
        card.innerHTML = `
            <img src="${hero.image}" alt="${hero.name}">
            <h3>${hero.name}</h3>
        `;
        card.addEventListener("click", () => showCounters(hero));
        heroContainer.appendChild(card);
    });
}

// Function to show counter heroes
function showCounters(hero) {
    counterList.innerHTML = "";
    hero.counters.forEach(counter => {
        const listItem = document.createElement("li");
        listItem.textContent = counter;
        counterList.appendChild(listItem);
    });
}

// Search Functionality
document.getElementById("search-bar").addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    const filteredHeroes = heroesData.filter(hero => hero.name.toLowerCase().includes(query));
    renderHeroes(filteredHeroes);
});

// Initial rendering
renderHeroes(heroesData);
