/////////////////////////////////////////
///        WORKSPACE SCRIPT JS        ///
/////////////////////////////////////////

// Hamburger Menu (Mobile)
function toggleMenu() {
    const menu = document.getElementById('sideMenu');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}

// Update Clock
function updateClock() {
    document.getElementById('clock').textContent = new Date().toLocaleTimeString();
}

setInterval(updateClock, 1000);
updateClock();

// Filter Search Project
const searchInput = document.getElementById('projectSearch');
const filterInput = document.getElementById('projectFilter');

function filterProjects() {

    const keyword = searchInput.value.toLowerCase();
    const category = filterInput.value;

    document.querySelectorAll('.project-card').forEach(card => {

        const text = card.innerText.toLowerCase();
        const cardCategory = card.dataset.category;

        const matchesSearch = text.includes(keyword);
        const matchesCategory = category === 'all' || cardCategory.includes(category);

        card.style.display = matchesSearch && matchesCategory
            ? 'block'
            : 'none';

    });

}
// Filter Input
searchInput.addEventListener('input', filterProjects);
filterInput.addEventListener('change', filterProjects);