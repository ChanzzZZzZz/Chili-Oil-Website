// Navigation Menu Class
class NavigationMenu {
    constructor() {
        this.menuToggler = document.getElementById('menu-toggler');
        this.sideSection = document.getElementById('side-section');
        this.sideClose = document.getElementById('side-close');
        this.overlay = document.getElementById('overlay');
        this.menuLinks = document.querySelectorAll('.menu-link');
        
        this.init();
    }

    init() {
        this.attachEventListeners();
    }

    attachEventListeners() {
        // Open side menu
        if (this.menuToggler) {
            this.menuToggler.addEventListener('click', () => this.openMenu());
        }

        // Close menu button
        if (this.sideClose) {
            this.sideClose.addEventListener('click', () => this.closeMenu());
        }

        // Close menu when clicking overlay
        if (this.overlay) {
            this.overlay.addEventListener('click', () => this.closeMenu());
        }

        // Close menu when clicking a link
        this.menuLinks.forEach(link => {
            link.addEventListener('click', () => this.closeMenu());
        });
    }

    openMenu() {
        if (this.sideSection && this.overlay) {
            this.sideSection.classList.add('active');
            this.overlay.classList.add('active');
        }
    }

    closeMenu() {
        if (this.sideSection && this.overlay) {
            this.sideSection.classList.remove('active');
            this.overlay.classList.remove('active');
        }
    }
}

// Smooth Scroll Class
class SmoothScroll {
    constructor() {
        this.anchorLinks = document.querySelectorAll('a[href^="#"]');
        this.init();
    }

    init() {
        this.attachEventListeners();
    }

    attachEventListeners() {
        this.anchorLinks.forEach(anchor => {
            anchor.addEventListener('click', (e) => this.handleClick(e));
        });
    }

    handleClick(e) {
        e.preventDefault();
        const target = document.querySelector(e.currentTarget.getAttribute('href'));
        
        if (target) {
            this.scrollToTarget(target);
        }
    }

    scrollToTarget(target) {
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Contact Form Class
class ContactForm {
    constructor() {
        this.form = document.querySelector('.contact-form');
        this.init();
    }

    init() {
        if (this.form) {
            this.attachEventListeners();
        }
    }

    attachEventListeners() {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    handleSubmit(e) {
        e.preventDefault();
        this.showSuccessMessage();
        this.resetForm();
    }

    showSuccessMessage() {
        alert('Thank you for your message! We will get back to you soon.');
    }

    resetForm() {
        this.form.reset();
    }
}

// Application Class - Main Controller
class ChiliOilApp {
    constructor() {
        this.navigationMenu = null;
        this.smoothScroll = null;
        this.contactForm = null;
        
        this.init();
    }

    init() {
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initializeComponents());
        } else {
            this.initializeComponents();
        }
    }

    initializeComponents() {
        this.navigationMenu = new NavigationMenu();
        this.smoothScroll = new SmoothScroll();
        this.contactForm = new ContactForm();
        
        console.log('Chili Oil App initialized successfully!');
    }
}

// Initialize the application
const app = new ChiliOilApp();