// Function to search for a hero's counters
function searchHeroCounters() {
    const input = document.getElementById('heroInput').value.toLowerCase();
    const resultsDiv = document.getElementById('results');

    // Clear previous results
    resultsDiv.innerHTML = "";

    // Search the hero dataset
    const hero = heroesData.find(hero => hero.name.toLowerCase() === input);

    if (hero) {
        // Create a hero card
        const heroCard = document.createElement('div');
        heroCard.classList.add('hero-card');

        heroCard.innerHTML = `
            <img src="${hero.image}" alt="${hero.name}" />
            <div class="hero-info">
                <h2>${hero.name}</h2>
                <ul>
                    <li>Counter 1: ${hero.counters[0]}</li>
                    <li>Counter 2: ${hero.counters[1]}</li>
                    <li>Counter 3: ${hero.counters[2]}</li>
                </ul>
            </div>
        `;

        resultsDiv.appendChild(heroCard);
    } else {
        resultsDiv.innerHTML = `<p>No hero found with the name "${input}". Please try again.</p>`;
    }
}

// Attach the search function to the button
document.getElementById('searchBtn').addEventListener('click', searchHeroCounters);
