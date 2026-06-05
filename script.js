// Mobile Menu Toggle
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn?.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('#mobileMenu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form values
        const formData = new FormData(contactForm);

        // Show success message
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = '✨ Message Sent! ✨';
        submitBtn.disabled = true;
        submitBtn.classList.add('opacity-50');

        // Reset form
        contactForm.reset();

        // Reset button after 3 seconds
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            submitBtn.classList.remove('opacity-50');
        }, 3000);
    });
}

// Program Card Click Handlers
document.querySelectorAll('.group').forEach(card => {
    card.addEventListener('click', function() {
        // Add a little animation on click
        this.style.animation = 'none';
        setTimeout(() => {
            this.style.animation = '';
        }, 10);
    });
});

// Add scroll animation effect
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-in');
        }
    });
}, observerOptions);

// Observe program cards
document.querySelectorAll('.group').forEach(card => {
    observer.observe(card);
});

// Observe about section items
document.querySelectorAll('.flex.gap-4').forEach(item => {
    observer.observe(item);
});

// Add magic particles effect on page load
function createMagicParticle() {
    const particle = document.createElement('div');
    const size = Math.random() * 20 + 10;
    const duration = Math.random() * 3 + 2;
    const left = Math.random() * window.innerWidth;
    const top = Math.random() * window.innerHeight;

    particle.style.cssText = `
        position: fixed;
        left: ${left}px;
        top: ${top}px;
        width: ${size}px;
        height: ${size}px;
        background: radial-gradient(circle, rgba(168, 85, 247, 0.6), transparent);
        border-radius: 50%;
        pointer-events: none;
        z-index: -1;
        animation: float ${duration}s ease-in-out infinite;
        opacity: 0.1;
    `;

    document.body.appendChild(particle);

    setTimeout(() => particle.remove(), duration * 1000);
}

// Create particles occasionally
setInterval(() => {
    if (Math.random() > 0.7) {
        createMagicParticle();
    }
}, 2000);

// Add keyboard shortcuts info
document.addEventListener('keydown', (e) => {
    // Jump to top with Home key
    if (e.key === 'Home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

console.log('🧙‍♂️ Welcome to Learning Wizards! Let the magic of learning begin! ✨');
