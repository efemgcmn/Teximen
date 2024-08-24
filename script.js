// script.js
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');

    menuToggle.addEventListener('click', function() {
        mainNav.classList.toggle('active');
    });

    // Menüyü tıklama dışında kapatmak için
    document.addEventListener('click', function(event) {
        if (!menuToggle.contains(event.target) && !mainNav.contains(event.target)) {
            mainNav.classList.remove('active');
        }
    });
});
