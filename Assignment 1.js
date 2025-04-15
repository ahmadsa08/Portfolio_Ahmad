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
    const themeToggle = document.getElementById('theme-toggle'); // Get the theme toggle button
    const navLinks = document.querySelectorAll('nav a'); // Get all navigation links
    const sections = document.querySelectorAll('.content-section'); // Get all sections


    // Show main content and initialize AOS after the splash screen
    setTimeout(function () {
        splashContainer.style.display = 'none';
        mainWrapper.style.display = 'block';
        AOS.init({
            duration: 1000,
            once: true
        });
    }, 3000);

    settingsIcon.addEventListener('click', () => {
        settingsPanel.style.display = settingsPanel.style.display === 'block' ? 'none' : 'none';
    });

    colorSwatches.forEach(swatch => {
        swatch.addEventListener('click', (e) => {
            const selectedColor = e.target.getAttribute('data-color');
            professionElement.style.color = selectedColor;
            downloadButtonElement.style.borderColor = selectedColor;
            downloadButtonElement.style.color = selectedColor;
            portfolioHeading.style.borderBottomColor = selectedColor;
            heroNameElement.style.color = selectedColor;
            const nameSpan = heroTextElement.querySelector('.accent-name');
            if (nameSpan) {
                nameSpan.style.color = selectedColor;
            }
            localStorage.setItem('accentColor', selectedColor);
        });
    });

    const savedColor = localStorage.getItem('accentColor');
    if (savedColor) {
        professionElement.style.color = savedColor;
        downloadButtonElement.style.borderColor = savedColor;
        downloadButtonElement.style.color = savedColor;
        portfolioHeading.style.borderBottomColor = savedColor;
        heroNameElement.style.color = savedColor;
        const nameSpan = heroTextElement.querySelector('.accent-name');
        if (nameSpan) {
            nameSpan.style.color = savedColor;
        }
    }

    // Theme toggle functionality
    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('dark-theme')) {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
            themeToggle.textContent = '☀️'; // Change to sun icon for light theme
        } else {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
            themeToggle.textContent = '🌓'; // Change to moon icon for dark theme
        }
        localStorage.setItem('theme', body.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme');
    });

    // Smooth scrolling for navigation links and section activation
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
             // Use window.location.href to open a new page
            window.location.href = targetId.replace('#', '') + '.html';
           
        });
    });

    // Make the 'Home' section active by default
    document.getElementById('home-section').classList.add('active-section');
});
</script>
