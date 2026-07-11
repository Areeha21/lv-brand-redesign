// ============================================
// LOUIS VUITTON - VARIANT 1
// Minimal & Elegant Design - JavaScript
// 4-COLOR PALETTE
// ============================================

// ============================================
// SMOOTH SCROLLING
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================

const nav = document.querySelector('nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  // Add shadow to nav on scroll
  if (currentScroll > 50) {
    nav.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
  } else {
    nav.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
  }
  
  lastScroll = currentScroll;
});

// ============================================
// CART COUNTER
// ============================================

let cartCount = 0;
const cartLink = document.querySelector('a[href="#cart"]');

function updateCartDisplay() {
  if (cartLink) {
    cartLink.textContent = `Cart (${cartCount})`;
  }
}

// Example: Add to cart functionality
function addToCart(itemName) {
  cartCount++;
  updateCartDisplay();
  showNotification(`${itemName} added to cart!`);
}

// ============================================
// NOTIFICATION SYSTEM
// ============================================

function showNotification(message, duration = 3000) {
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #1A1A1A;
    color: #F5F0E8;
    padding: 15px 25px;
    border-radius: 4px;
    font-size: 0.875rem;
    letter-spacing: 0.05em;
    z-index: 9999;
    animation: slideInRight 0.3s ease;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  `;
  
  notification.textContent = message;
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'fadeOut 0.3s ease';
    setTimeout(() => notification.remove(), 300);
  }, duration);
}

// ============================================
// NEWSLETTER FORM VALIDATION & SUBMISSION
// ============================================

const newsletterForm = document.querySelector('.newsletter-form');

if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const emailInput = newsletterForm.querySelector('input[type="email"]');
    const email = emailInput.value.trim();
    
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!email) {
      showNotification('Please enter your email address', 3000);
      return;
    }
    
    if (!emailRegex.test(email)) {
      showNotification('Please enter a valid email address', 3000);
      return;
    }
    
    // Simulate form submission
    const button = newsletterForm.querySelector('button');
    const originalText = button.textContent;
    button.textContent = 'Subscribing...';
    button.disabled = true;
    
    setTimeout(() => {
      button.textContent = 'Subscribed!';
      showNotification('Successfully subscribed to our newsletter!', 4000);
      emailInput.value = '';
      
      setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
      }, 2000);
    }, 1500);
  });
}

// ============================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ============================================

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all collection cards and images
document.querySelectorAll('.collection-card, .story-image, .craftsmanship-image').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// ============================================
// COLLECTION CARD CLICK HANDLER
// ============================================

document.querySelectorAll('.collection-card').forEach(card => {
  card.addEventListener('click', function() {
    const collectionName = this.querySelector('h3').textContent;
    showNotification(`Exploring ${collectionName} collection...`, 2000);
  });
});

// ============================================
// PAGE LOAD ANIMATION
// ============================================

window.addEventListener('load', () => {
  document.body.style.opacity = '1';
});

// Initial opacity
document.body.style.opacity = '0.95';

// ============================================
// UTILITY: Add animations if not in CSS
// ============================================

const style = document.createElement('style');
style.textContent = `
  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  
  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;
document.head.appendChild(style);

// ============================================
// LOG INITIALIZATION
// ============================================
console.log('✓ Louis Vuitton Variant 1 - JavaScript Loaded');
// ============================================
// MOBILE MENU TOGGLE
// ============================================

const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  mobileMenu.classList.toggle('flex');
});