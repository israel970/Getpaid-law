// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    // Mobile menu toggle
    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a:not(.dropdown-toggle)').forEach(link => {
            link.addEventListener('click', function() {
                mobileMenuToggle.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        });
    }

    // Dropdown toggle for mobile
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const dropdown = this.closest('.nav-dropdown');
                dropdown.classList.toggle('active');
            }
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.nav-dropdown')) {
            document.querySelectorAll('.nav-dropdown.active').forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });

    // Close mobile menu on resize to desktop
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            if (mobileMenuToggle) mobileMenuToggle.classList.remove('active');
            if (navLinks) navLinks.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });
});
