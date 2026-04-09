document.addEventListener('DOMContentLoaded', () => {
    const splashContainer = document.getElementById('splash-container');
    const mainWrapper = document.querySelector('.main-wrapper');
    const settingsIcon = document.querySelector('.settings-icon');
    const settingsPanel = document.querySelector('.settings-panel');
    const colorSwatches = document.querySelectorAll('.color-swatch');
    const professionElement = document.querySelector('.profession');
    const downloadButtonElement = document.querySelector('.download-button');
    const portfolioHeading = document.querySelector('#portfolio-section h2');
    const heroNameElement = document.querySelector('.hero-name');
    const heroTextElement = document.querySelector('.hero-text h1');
    const heroDescriptionElement = document.querySelector('.hero-description');
    const body = document.querySelector('body');
    const themeToggle = document.getElementById('theme-toggle');
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('.content-section');

    // --- Splash Screen ---
    setTimeout(() => {
        splashContainer.style.display = 'none';
        mainWrapper.style.display = 'block';
        AOS.init({ duration: 1000, once: true });
    }, 3000);

    // --- Settings Panel Toggle ---
    settingsIcon.addEventListener('click', () => {
        settingsPanel.style.display = settingsPanel.style.display === 'block' ? 'none' : 'block';
    });

    // --- Color Swatches ---
    const applyAccentColor = (color) => {
        professionElement && (professionElement.style.color = color);
        downloadButtonElement && (downloadButtonElement.style.borderColor = color);
        downloadButtonElement && (downloadButtonElement.style.color = color);
        portfolioHeading && (portfolioHeading.style.borderBottomColor = color);
        heroNameElement && (heroNameElement.style.color = color);
        const nameSpan = heroTextElement?.querySelector('.accent-name');
        if (nameSpan) nameSpan.style.color = color;
    };

    colorSwatches.forEach(swatch => {
        swatch.addEventListener('click', (e) => {
            const selectedColor = e.target.getAttribute('data-color');
            applyAccentColor(selectedColor);
            localStorage.setItem('accentColor', selectedColor);
        });
    });

    // Restore saved accent color
    const savedColor = localStorage.getItem('accentColor');
    if (savedColor) applyAccentColor(savedColor);

    // --- Theme Toggle ---
    const applyTheme = (theme) => {
        body.className = theme;
        themeToggle.textContent = theme === 'dark-theme' ? '🌓' : '☀️';
    };

    themeToggle.addEventListener('click', () => {
        const newTheme = body.classList.contains('dark-theme') ? 'light-theme' : 'dark-theme';
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // Restore saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) applyTheme(savedTheme);

    // --- Navigation Smooth Scroll ---
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetSection = document.querySelector(this.getAttribute('href'));
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
                // Update active section
                sections.forEach(sec => sec.classList.remove('active-section'));
                targetSection.classList.add('active-section');
            }
        });
    });

    // --- Default Active Section ---
    document.getElementById('home-section')?.classList.add('active-section');
});
