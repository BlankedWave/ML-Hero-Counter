const heroesData = [

    { name: "Alice", image: "assets/images/alice.png", counters: ["Balmond", "Esmeralda", "Gord"] },
    { name: "Nana", image: "assets/images/nana.png", counters: ["Lancelot", "Chou", "Aldous"] },
    { name: "Saber", image: "assets/images/saber.png", counters: ["Lancelot", "Chou", "Aldous"] },
    { name: "Miya", image: "assets/images/miya.png", counters: ["Lancelot", "Chou", "Aldous"] },
    { name: "Rafaela", image: "assets/images/rafaela.png", counters: ["Chou", "Aldous", "Lancelot"] },
    { name: "Layla", image: "assets/images/layla.png", counters: ["Lancelot", "Chou", "Aldous"] },
    { name: "Bruno", image: "assets/images/bruno.png", counters: ["Chou", "Aldous", "Lancelot"] },
    { name: "Natalia", image: "assets/images/natalia.png", counters: ["Gord", "Chou", "Lancelot"] },
    { name: "Gord", image: "assets/images/gord.png", counters: ["Natalia", "Aldous", "Lancelot"] },
    { name: "Johnson", image: "assets/images/johnson.png", counters: ["Lancelot", "Chou", "Aldous"] },
    { name: "Cyclops", image: "assets/images/cyclops.png", counters: ["Natalia", "Chou", "Gusion"] },
    { name: "Grock", image: "assets/images/grock.png", counters: ["Lancelot", "Aldous", "Chou"] },
    { name: "Harley", image: "assets/images/harley.png", counters: ["Chou", "Lancelot", "Aldous"] },
    { name: "Vexana", image: "assets/images/vexana.png", counters: ["Gord", "Lylia", "Natalia"] },
    { name: "Irithel", image: "assets/images/irithel.png", counters: ["Lancelot", "Chou", "Aldous"] },
    { name: "Aurora", image: "assets/images/aurora.png", counters: ["Lancelot", "Gusion", "Hayabusa"] },
    { name: "Odette", image: "assets/images/odette.png", counters: ["Natalia", "Gusion", "Lancelot"] },
    { name: "Angela", image: "assets/images/angela.png", counters: ["Chou", "Aldous", "Lancelot"] },
    { name: "Selena", image: "assets/images/selena.png", counters: ["Kaja", "Chou", "Aldous"] },
    { name: "Hanzo", image: "assets/images/hanzo.png", counters: ["Chou", "Aldous", "Masha"] },
    { name: "Belerick", image: "assets/images/belerick.png", counters: ["Lancelot", "Gusion", "Chou"] },
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
    { name: "Balmond", image: "assets/images/balmond.png", counters: ["Alice", "Esmeralda", "Gord"] },
    { name: "Bane", image: "assets/images/bane.png", counters: ["Pharsa", "Lunox", "Harith"] },
    { name: "Zilong", image: "assets/images/zilong.png", counters: ["Franco", "Khufra", "Tigreal"] },
    { name: "Freya", image: "assets/images/freya.png", counters: ["Saber", "Gusion", "Helcurt"] },
    { name: "Chou", image: "assets/images/chou.png", counters: ["Pharsa", "Eudora", "Lunox"] },
    { name: "Sun", image: "assets/images/sun.png", counters: ["Karrie", "Wanwan", "Masha"] },
    { name: "Alpha", image: "assets/images/alpha.png", counters: ["Harith", "Lunox", "Esmeralda"] },
    { name: "Ruby", image: "assets/images/ruby.png", counters: ["Wanwan", "Natan", "Miya"] },
    { name: "Hilda", image: "assets/images/hilda.png", counters: ["Karrie", "Thamuz", "Lylia"] },
    { name: "Lapu-Lapu", image: "assets/images/lapulapu.png", counters: ["Thamuz", "Yu Zhong", "Alice"] },
    { name: "Roger", image: "assets/images/roger.png", counters: ["Saber", "Chou", "Lunox"] },
    { name: "Gatotkaca", image: "assets/images/gatotkaca.png", counters: ["Karrie", "Esmeralda", "Lunox"] },
    { name: "Argus", image: "assets/images/argus.png", counters: ["Saber", "Gusion", "Franco"] },
    { name: "Jawhead", image: "assets/images/jawhead.png", counters: ["Wanwan", "Melissa", "Natan"] },
    { name: "Martis", image: "assets/images/martis.png", counters: ["Franco", "Khufra", "Hylos"] },
    { name: "Uranus", image: "assets/images/uranus.png", counters: ["Karrie", "Kimmy", "Esmeralda"] },
    { name: "Kaja", image: "assets/images/kaja.png", counters: ["Ling", "Wanwan", "Hayabusa"] },
    { name: "Aldous", image: "assets/images/aldous.png", counters: ["Franco", "Khufra", "Esmeralda"] },
    { name: "Leomord", image: "assets/images/leomord.png", counters: ["Lunox", "Karrie", "Esmeralda"] },
    { name: "Thamuz", image: "assets/images/thamuz.png", counters: ["Wanwan", "Lunox", "Esmeralda"] },
    { name: "Minsitthar", image: "assets/images/minsitthar.png", counters: ["Chou", "Ling", "Harith"] },
    { name: "Badang", image: "assets/images/badang.png", counters: ["Franco", "Khufra", "Ruby"] },
    { name: "Guinevere", image: "assets/images/guinevere.png", counters: ["Esmeralda", "Chou", "Saber"] },
    { name: "Terizla", image: "assets/images/terizla.png", counters: ["Wanwan", "Esmeralda", "Lunox"] },
    { name: "X.Borg", image: "assets/images/x.borg.png", counters: ["Wanwan", "Melissa", "Karrie"] },
    { name: "Dyrroth", image: "assets/images/dyrroth.png", counters: ["Wanwan", "Karrie", "Esmeralda"] },
    { name: "Masha", image: "assets/images/masha.png", counters: ["Karrie", "Wanwan", "Minsitthar"] },
    { name: "Silvanna", image: "assets/images/silvanna.png", counters: ["Franco", "Khufra", "Ruby"] },
    { name: "Yu Zhong", image: "assets/images/yuzhong.png", counters: ["Wanwan", "Esmeralda", "Lunox"] },
    { name: "Benedetta", image: "assets/images/benedetta.png", counters: ["Franco", "Khufra", "Ruby"] },
    { name: "Khaleed", image: "assets/images/khaleed.png", counters: ["Karrie", "Esmeralda", "Lunox"] },
    { name: "Barats", image: "assets/images/barats.png", counters: ["Wanwan", "Melissa", "Esmeralda"] },
    { name: "Paquito", image: "assets/images/paquito.png", counters: ["Wanwan", "Esmeralda", "Karrie"] },
    { name: "Gloo", image: "assets/images/gloo.png", counters: ["Wanwan", "Esmeralda", "Lunox"] },
    { name: "Phoveus", image: "assets/images/phoveus.png", counters: ["Wanwan", "Ling", "Lancelot"] },
    { name: "Aulus", image: "assets/images/aulus.png", counters: ["Wanwan", "Lunox", "Esmeralda"] },
    { name: "Edith", image: "assets/images/edith.png", counters: ["Wanwan", "Lunox", "Esmeralda"] },
    { name: "Yin", image: "assets/images/yin.png", counters: ["Franco", "Khufra", "Ruby"] },
    { name: "Julian", image: "assets/images/julian.png", counters: ["Wanwan", "Esmeralda", "Karrie"] },
    { name: "Fredrinn", image: "assets/images/fredrinn.png", counters: ["Wanwan", "Melissa", "Esmeralda"] },
    { name: "Joy", image: "assets/images/joy.png", counters: ["Wanwan", "Melissa", "Karrie"] },
    { name: "Arlott", image: "assets/images/arlott.png", counters: ["Wanwan", "Lunox", "Esmeralda"] },
    { name: "Ling", image: "assets/images/ling.jpg", counters: ["Franco", "Khufra", "Uranus"] },
    { name: "Lancelot", image: "assets/images/lancelot.png", counters: ["Phoveus", "Khufra", "Tigreal"] },
    { name: "Karina", image: "assets/images/karina.png", counters: ["Chou", "Franco", "Ruby"] },
    { name: "Hayabusa", image: "assets/images/hayabusa.png", counters: ["Khufra", "Ruby", "Phoveus"] },
    { name: "Helcurt", image: "assets/images/helcurt.jpg", counters: ["Chou", "Khufra", "Franco"] },
    { name: "Fanny", image: "assets/images/fanny.png", counters: ["Khufra", "Chou", "Saber"] },
    { name: "Gusion", image: "assets/images/gusion.png", counters: ["Franco", "Khufra", "Ruby"] },
    { name: "Alucard", image: "assets/images/alucard.png", counters: ["Chou", "Khufra", "Ruby"] },
    { name: "Granger", image: "assets/images/granger.png", counters: ["Khufra", "Natalia", "Helcurt"] },
    { name: "Yi Sun-shin", image: "assets/images/yisunshin.png", counters: ["Chou", "Natalia", "Ling"] },
    { name: "Moskov", image: "assets/images/moskov.png", counters: ["Natalia", "Helcurt", "Ling"] },
    { name: "Wanwan", image: "assets/images/wanwan.png", counters: ["Natalia", "Ling", "Hayabusa"] },
    { name: "Melissa", image: "assets/images/melissa.png", counters: ["Chou", "Ling", "Natalia"] },
    { name: "Lesley", image: "assets/images/lesley.png", counters: ["Natalia", "Ling", "Helcurt"] },
    { name: "Kimmy", image: "assets/images/kimmy.png", counters: ["Natalia", "Hayabusa", "Ling"] },
    { name: "Clint", image: "assets/images/clint.png", counters: ["Natalia", "Hayabusa", "Ling"] },
    { name: "Brody", image: "assets/images/brody.png", counters: ["Natalia", "Helcurt", "Ling"] },
    { name: "Beatrix", image: "assets/images/beatrix.png", counters: ["Chou", "Hayabusa", "Ling"] },
    { name: "Claude", image: "assets/images/claude.png", counters: ["Natalia", "Hayabusa", "Helcurt"] },
    { name: "Popol and Kupa", image: "assets/images/popolnkupa.png", counters: ["Chou", "Hayabusa", "Ling"] },
    { name: "Hanabi", image: "assets/images/hanabi.png", counters: ["Natalia", "Ling", "Helcurt"] },
    { name: "Natan", image: "assets/images/natan.png", counters: ["Saber", "Helcurt", "Chou"] },
    { name: "Pharsa", image: "assets/images/pharsa.png", counters: ["Ling", "Saber", "Hayabusa"] },
    { name: "Kagura", image: "assets/images/kagura.png", counters: ["Chou", "Franco", "Helcurt"] },
    { name: "Lunox", image: "assets/images/lunox.png", counters: ["Esmeralda", "Thamuz", "Karrie"] },
    { name: "Eudora", image: "assets/images/eudora.png", counters: ["Chou", "Helcurt", "Natalia"] },
    { name: "Vale", image: "assets/images/vale.png", counters: ["Chou", "Khufra", "Franco"] },
    { name: "Valir", image: "assets/images/valir.png", counters: ["Chou", "Franco", "Helcurt"] },
    { name: "Chang'e", image: "assets/images/change.png", counters: ["Ling", "Natalia", "Helcurt"] },
    { name: "Lylia", image: "assets/images/lylia.png", counters: ["Ling", "Franco", "Khufra"] },
    { name: "Cecilion", image: "assets/images/cecilion.png", counters: ["Natalia", "Ling", "Helcurt"] },
    { name: "Yve", image: "assets/images/yve.png", counters: ["Ling", "Saber", "Hayabusa"] },
    { name: "Harith", image: "assets/images/harith.png", counters: ["Chou", "Khufra", "Ruby"] },
    { name: "Zhask", image: "assets/images/zhask.png", counters: ["Chou", "Franco", "Helcurt"] },
    { name: "Franco", image: "assets/images/franco.png", counters: ["Wanwan", "Beatrix", "Karrie"] },
    { name: "Khufra", image: "assets/images/khufra.png", counters: ["Ling", "Hayabusa", "Lancelot"] },
    { name: "Tigreal", image: "assets/images/tigreal.png", counters: ["Hayabusa", "Ling", "Lancelot"] },
    { name: "Atlas", image: "assets/images/atlas.png", counters: ["Wanwan", "Beatrix", "Melissa"] },
    { name: "Lolita", image: "assets/images/lolita.png", counters: ["Wanwan", "Melissa", "Beatrix"] },
    { name: "Hylos", image: "assets/images/hylos.png", counters: ["Ling", "Wanwan", "Melissa"] },
    { name: "Minotaur", image: "assets/images/wanwan.png", counters: ["Wanwan", "Melissa", "Beatrix"] },
    { name: "Akai", image: "assets/images/akai.png", counters: ["Ling", "Hayabusa", "Lancelot"] },
    { name: "Diggie", image: "assets/images/diggie.png", counters: ["Franco", "Atlas", "Khufra"] },
    { name: "Estes", image: "assets/images/estes.png", counters: ["Chou", "Natalia", "Ling"] }

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
