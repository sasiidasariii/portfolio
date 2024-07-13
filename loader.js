document.addEventListener("DOMContentLoaded", function() {
    const loader = document.getElementById('loader');
    const mainContent = document.getElementById('tcontent');
    
    setTimeout(() => {
        loader.style.animation = 'zoomIn 1s forwards';
        
        // Wait for the zoom-in animation to complete before hiding the loader
        loader.addEventListener('animationend', function() {
            loader.style.display = 'none';
            mainContent.style.display = 'block';
            document.body.style.overflow = 'auto'; // Enable scrolling after content is displayed
        });
    }, 2000); // 2 seconds delay before zooming in
});


