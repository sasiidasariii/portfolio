document.addEventListener('DOMContentLoaded', function() {
    const main = document.querySelector('.main');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) { // Change 50 to the scroll value you prefer
            main.style.backgroundColor = 'rgba(15, 15, 20, 0.85)';
        } else {
            main.style.backgroundColor = 'transparent';
        }
    });
});