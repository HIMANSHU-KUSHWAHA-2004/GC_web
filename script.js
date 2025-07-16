// vibe button
const title = document.getElementById('mainTitle');
const btn = document.getElementById('vibeBtn');
const vibes = [
    '🔥 HOMIES 🔥',
    '🎉 Party Time 🎉',
    '⚡ Vibe Squad ⚡',
    '💫 Non Stop Fun 💫',
    '🤩 Crazy Family 🤩'
];
btn.addEventListener('click', () => {
    const vibe = vibes[Math.floor(Math.random() * vibes.length)];
    title.textContent = vibe;
});

// balloon effect
const navLinks = document.querySelectorAll('.nav-link');
const balloonContainer = document.getElementById('balloonContainer');

navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        createBalloons(20); // number of balloons
        document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

function createBalloons(count) {
    const screenWidth = window.innerWidth;
    const spacing = screenWidth / count; // evenly space across screen

    for (let i = 0; i < count; i++) {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');

        // 🎈 Big balloons
        const size = Math.random() * 40 + 120; // 120px–160px wide
        balloon.style.width = size + 'px';
        balloon.style.height = size * 1.3 + 'px';

        // 🎯 Evenly spaced across the width
        const leftPos = i * spacing + spacing / 2 - size / 2;
        balloon.style.left = leftPos + 'px';

        // ⏳ random animation duration
        balloon.style.animationDuration = (Math.random() * 3 + 4) + 's';

        balloonContainer.appendChild(balloon);

        // remove after animation
        setTimeout(() => balloon.remove(), 7000);
    }
}

// fade-in effect
const faders = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
    faders.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            section.classList.add('visible');
        }
    });
});
