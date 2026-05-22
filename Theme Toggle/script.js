

const themeCheckbox = document.getElementById('theme-checkbox');
const body = document.body;


const initTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
        body.classList.add('dark');
        themeCheckbox.checked = true;
    } else {
        body.classList.remove('dark');
        themeCheckbox.checked = false;
    }
};


const handleThemeToggle = () => {
    if (themeCheckbox.checked) {
        body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }
};


themeCheckbox.addEventListener('change', handleThemeToggle);


document.addEventListener('DOMContentLoaded', initTheme);