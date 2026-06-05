    // ── Clock
    function updateClock() {
        document.getElementById('clock').textContent = new Date().toLocaleTimeString();
    }
    setInterval(updateClock, 1000);
    updateClock();

    // ── Footer year
    document.getElementById('footerYear').textContent = new Date().getFullYear();

    // ── Hamburger
    function toggleMenu() {
        const m = document.getElementById('sideMenu');
        m.style.display = m.style.display === 'flex' ? 'none' : 'flex';
    }

    // ── Timeline year selector
    function selectYear(year) {
        document.querySelectorAll('.year-marker').forEach(m => m.classList.remove('active'));
        document.querySelectorAll('.exp-panel').forEach(p => p.classList.remove('active'));
        document.querySelector(`[data-year="${year}"]`).classList.add('active');
        document.getElementById(`panel-${year}`).classList.add('active');
    }

    // ── Scroll reveal
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // ── Skill bars animate on scroll
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.querySelectorAll('.skill-bar').forEach(bar => {
                    const w = getComputedStyle(bar).getPropertyValue('--w') || bar.style.getPropertyValue('--w');
                    bar.style.transform = `scaleX(${parseFloat(w) || 1})`;
                    bar.classList.add('animated');
                });
            }
        });
    }, { threshold: 0.2 });
    document.querySelectorAll('.skills-grid').forEach(el => skillObserver.observe(el));