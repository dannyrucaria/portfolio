// Hamburger Menu (Mobile)
function toggleMenu() {
    const menu = document.getElementById('sideMenu');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}

// CLOCK
    function toggleMenu() {
        const menu = document.getElementById('sideMenu');
        menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
    }

    function updateClock() {
        document.getElementById('clock').textContent = new Date().toLocaleTimeString();
    }

    setInterval(updateClock, 1000);
    updateClock();

// READ MORE
const cards = document.querySelectorAll('.project-card');

cards.forEach(card => {
    const button = card.querySelector('.read-more');

    button.addEventListener('click', () => {
        card.classList.toggle('active');

        button.textContent =
            card.classList.contains('active')
            ? 'Show Less'
            : 'Read More';
    });
});

// SEARCH FILTER
const searchInput = document.getElementById('searchInput');
const projectCards = document.querySelectorAll('.project-card');

searchInput.addEventListener('keyup', () => {
    const value = searchInput.value.toLowerCase();

    projectCards.forEach(card => {
        const text = card.innerText.toLowerCase();
        card.style.display = text.includes(value) ? 'flex' : 'none';
    });
});
