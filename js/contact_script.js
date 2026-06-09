/////////////////////////////////
//         CONTACT.JS          //
/////////////////////////////////

// Hamburger Menu (Mobile)
function toggleMenu() {
    const menu = document.getElementById('sideMenu');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}

// Clock
function updateClock() {

    const clock = document.getElementById('clock');

    const now = new Date();

    clock.textContent = now.toLocaleTimeString();

}

setInterval(updateClock, 1000);

updateClock();
