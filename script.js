// ===========================
// Page Load & Loader
// ===========================
window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 1000);
    }
});

// ===========================
// Navigation
// ===========================
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

// Navbar scroll effect
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
if (hamburger && navLinks) {
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const navItems = navLinks.querySelectorAll('a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

// ===========================
// Statistics Counter Animation
// ===========================
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const updateCounter = () => {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start).toLocaleString();
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target.toLocaleString();
        }
    };
    
    updateCounter();
}

// Intersection Observer for stats
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            entry.target.classList.add('counted');
            const target = parseInt(entry.target.getAttribute('data-target'));
            animateCounter(entry.target, target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number').forEach(stat => {
    statsObserver.observe(stat);
});

// ===========================
// Form Handling
// ===========================
const inquiryForm = document.getElementById('inquiryForm');
if (inquiryForm) {
    inquiryForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simple form validation
        const formData = new FormData(inquiryForm);
        
        // Show success message (in production, this would send to a server)
        alert('Thank you for your inquiry! We will get back to you soon.');
        inquiryForm.reset();
    });
}

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show success message
        alert('Thank you for contacting us! We will respond within 24 hours.');
        contactForm.reset();
    });
}

// ===========================
// Program Modal
// ===========================
function showProgramDetails(programId) {
    const modal = document.getElementById('programModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Update modal content based on programId
        // In a real application, this would fetch data from a database
        updateModalContent(programId);
    }
}

function closeModal() {
    const modal = document.getElementById('programModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

function updateModalContent(programId) {
    // This is a placeholder function
    // In production, you would fetch specific program data
    const modalTitle = document.getElementById('modalTitle');
    if (modalTitle) {
        const programNames = {
            'diploma-business': 'Business Management Diploma',
            'diploma-computing': 'Computing & IT Diploma',
            'diploma-healthcare': 'Health & Social Care Diploma',
            'diploma-hospitality': 'Hospitality Management Diploma',
            'diploma-engineering': 'Engineering Technology Diploma',
            'hdiploma-business': 'Strategic Business Management Higher Diploma',
            'hdiploma-computing': 'Advanced Computing Higher Diploma',
            'hdiploma-finance': 'Finance & Accounting Higher Diploma',
            'hdiploma-marketing': 'Digital Marketing Higher Diploma',
            'hdiploma-hr': 'Human Resource Management Higher Diploma',
            'topup-ba-business': 'BA (Hons) Business Management',
            'topup-bsc-computing': 'BSc (Hons) Computing',
            'topup-ba-healthcare': 'BA (Hons) Health & Social Care',
            'topup-ba-hospitality': 'BA (Hons) Hospitality Management',
            'topup-beng-engineering': 'BEng (Hons) Engineering'
        };
        
        modalTitle.textContent = programNames[programId] || 'Program Details';
    }
}

// Close modal when clicking outside
window.addEventListener('click', function(e) {
    const modal = document.getElementById('programModal');
    if (e.target === modal) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// ===========================
// Tab Functionality
// ===========================
function showTab(tabName) {
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // Remove active class from all buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected tab
    const selectedTab = document.getElementById(tabName);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }
    
    // Add active class to clicked button
    event.target.classList.add('active');
}

// ===========================
// FAQ Accordion
// ===========================
function toggleFAQ(element) {
    const faqItem = element.parentElement;
    const isActive = faqItem.classList.contains('active');
    
    // Close all FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Open clicked item if it wasn't active
    if (!isActive) {
        faqItem.classList.add('active');
    }
}

// ===========================
// Smooth Scroll for Anchor Links
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            const offset = 80;
            const targetPosition = target.offsetTop - offset;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// Scroll Animations
// ===========================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Add fade-in animation to elements
document.querySelectorAll('.program-card, .value-card, .choose-item, .dept-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeInObserver.observe(el);
});

// ===========================
// Apply Button Click Handler
// ===========================
// document.querySelectorAll('.apply-btn').forEach(btn => {
//     btn.addEventListener('click', function(e) {
//         e.preventDefault();
//         alert('Application system coming soon! Please contact admissions@bringthon.ac.uk for more information.');
//     });
// });

// ===========================
// Image Error Handling
// ===========================
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
        this.style.backgroundColor = '#e0e0e0';
        this.style.display = 'flex';
        this.style.alignItems = 'center';
        this.style.justifyContent = 'center';
        this.alt = 'Image placeholder';
    });
});

// ===========================
// Back to Top Button
// ===========================
const backToTop = document.createElement('button');
backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
backToTop.className = 'back-to-top';
backToTop.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: var(--accent-color);
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 999;
    box-shadow: 0 4px 15px rgba(0, 116, 217, 0.3);
`;

document.body.appendChild(backToTop);

window.addEventListener('scroll', function() {
    if (window.scrollY > 500) {
        backToTop.style.opacity = '1';
        backToTop.style.visibility = 'visible';
    } else {
        backToTop.style.opacity = '0';
        backToTop.style.visibility = 'hidden';
    }
});

backToTop.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

backToTop.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-5px)';
});

backToTop.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
});

// ===========================
// Console Welcome Message
// ===========================
console.log('%cWelcome to Bringthon University', 'color: #0074D9; font-size: 20px; font-weight: bold;');
console.log('%cExcellence in Education Since 1892', 'color: #001f3f; font-size: 14px;');