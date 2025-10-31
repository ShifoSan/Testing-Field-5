window.addEventListener('load', () => {
    const loader = document.querySelector('.loader-wrapper');
    if (loader) {
        loader.style.transition = 'opacity 1s ease-out';
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 1000);
    }

    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('change', () => {
            document.body.classList.toggle('light-theme');
        });
    }

    // Search functionality
    const searchInput = document.querySelector('.search-container input');
    if (searchInput) {
        searchInput.addEventListener('keyup', () => {
            const filter = searchInput.value.toUpperCase();
            const mainContent = document.getElementById('main-content');
            const sections = mainContent.getElementsByTagName('section');

            for (let i = 0; i < sections.length; i++) {
                const h2 = sections[i].getElementsByTagName('h2')[0];
                if (h2) {
                    const txtValue = h2.textContent || h2.innerText;
                    if (txtValue.toUpperCase().indexOf(filter) > -1) {
                        sections[i].style.display = '';
                    } else {
                        sections[i].style.display = 'none';
                    }
                }
            }
        });
    }
});