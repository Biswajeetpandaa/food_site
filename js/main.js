// ==================== CONFIGURATION ====================
const CONFIG = {
    currency: '₹',
    taxRate: 0.18,
    animationDuration: 300,
    toastDuration: 3000
};

// ==================== MENU DATA ====================
const menuItems = [
    {
        id: 1,
        name: "Gold Leaf Risotto",
        category: "Mains",
        price: 850,
        image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400&h=300&fit=crop",
        desc: "Saffron infused arborio rice topped with edible 24k gold leaf.",
        rating: 4.9
    },
    {
        id: 2,
        name: "Truffle Wagyu Burger",
        category: "Mains",
        price: 1200,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
        desc: "Premium wagyu beef with black truffle mayo on artisan brioche.",
        rating: 4.8
    },
    {
        id: 3,
        name: "Smoked Salmon Crostini",
        category: "Starters",
        price: 550,
        image: "https://images.unsplash.com/photo-1626645738196-c2a72c7e3e0a?w=400&h=300&fit=crop",
        desc: "Hickory smoked salmon on toasted baguette with dill cream cheese.",
        rating: 4.7
    },
    {
        id: 4,
        name: "Velvet Chocolate Dome",
        category: "Dessert",
        price: 450,
        image: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?w=400&h=300&fit=crop",
        desc: "Dark chocolate mousse encased in a velvet spray shell with raspberry.",
        rating: 4.9
    },
    {
        id: 5,
        name: "Lobster Bisque",
        category: "Starters",
        price: 700,
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop",
        desc: "Creamy French soup made with fresh Atlantic lobster and cognac.",
        rating: 4.8
    },
    {
        id: 6,
        name: "Royal Paneer Tikka",
        category: "Mains",
        price: 600,
        image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&h=300&fit=crop",
        desc: "Cottage cheese marinated in royal spices and charcoal grilled.",
        rating: 4.6
    },
    {
        id: 7,
        name: "Tiramisu Classico",
        category: "Dessert",
        price: 380,
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop",
        desc: "Traditional Italian dessert with espresso-soaked ladyfingers.",
        rating: 4.7
    },
    {
        id: 8,
        name: "Champagne Cocktail",
        category: "Beverages",
        price: 650,
        image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=300&fit=crop",
        desc: "Classic champagne cocktail with Angostura bitters and sugar cube.",
        rating: 4.5
    },
    {
        id: 9,
        name: "Bruschetta Trio",
        category: "Starters",
        price: 420,
        image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400&h=300&fit=crop",
        desc: "Three artisan bruschettas with tomato basil, mushroom, and olive tapenade.",
        rating: 4.6
    },
    {
        id: 10,
        name: "Signature Mocktail",
        category: "Beverages",
        price: 280,
        image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=400&h=300&fit=crop",
        desc: "Refreshing blend of tropical fruits with mint and sparkling water.",
        rating: 4.4
    },
    {
        id: 11,
        name: "Grilled Sea Bass",
        category: "Mains",
        price: 1100,
        image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&h=300&fit=crop",
        desc: "Fresh sea bass with lemon butter sauce and seasonal vegetables.",
        rating: 4.8
    },
    {
        id: 12,
        name: "Crème Brûlée",
        category: "Dessert",
        price: 350,
        image: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=400&h=300&fit=crop",
        desc: "Classic French vanilla custard with caramelized sugar crust.",
        rating: 4.7
    }
];

// ==================== TESTIMONIALS DATA ====================
const testimonials = [
    {
        name: "Sarah Mitchell",
        role: "Food Critic, NY Times",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
        text: "An extraordinary culinary experience. The attention to detail in every dish is remarkable. The Grand Palette has redefined fine dining for me.",
        rating: 5
    },
    {
        name: "James Chen",
        role: "Executive Chef",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
        text: "As a fellow chef, I'm always critical of restaurants. The Grand Palette exceeded all my expectations. The flavor combinations are innovative yet perfectly balanced.",
        rating: 5
    },
    {
        name: "Emily Rodriguez",
        role: "Regular Guest",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
        text: "We celebrate every special occasion here. The ambiance, the service, and most importantly, the food - everything is absolutely perfect.",
        rating: 5
    },
    {
        name: "Michael Thompson",
        role: "Wine Sommelier",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
        text: "The wine selection is impeccable. The sommelier's recommendations have never disappointed. A true gem for wine enthusiasts.",
        rating: 5
    }
];

// ==================== CART STATE ====================
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// ==================== DOM READY ====================
document.addEventListener('DOMContentLoaded', function() {
    initPreloader();
    initNavigation();
    initMenu();
    initTestimonials();
    initReservationForm();
    initNewsletterForm();
    initBackToTop();
    initScrollAnimations();
    initDatePicker();
    updateCartUI();
    checkAuth();
});

// ==================== PRELOADER ====================
function initPreloader() {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                preloader.classList.add('hidden');
            }, 500);
        });
        
        // Fallback if load event already fired
        if (document.readyState === 'complete') {
            setTimeout(() => {
                preloader.classList.add('hidden');
            }, 500);
        }
    }
}

// ==================== NAVIGATION ====================
function initNavigation() {
    const navbar = document.querySelector('.navbar-main');
    const navLinks = document.querySelectorAll('.nav-link-custom');
    
    // Scroll effect for navbar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Active link on scroll
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Smooth scroll for nav links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                    
                    // Close mobile menu
                    const navbarCollapse = document.querySelector('.navbar-collapse');
                    if (navbarCollapse.classList.contains('show')) {
                        const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                        bsCollapse.hide();
                    }
                }
            }
        });
    });
}

// ==================== MENU ====================
function initMenu() {
    renderMenu('all');
    
    // Filter buttons
    const filterBtns = document.querySelectorAll('.btn-filter');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.dataset.filter;
            renderMenu(filter);
        });
    });
}

function renderMenu(filter) {
    const container = document.getElementById('menu-container');
    if (!container) return;
    
    const filteredItems = filter === 'all' 
        ? menuItems 
        : menuItems.filter(item => item.category === filter);
    
    container.innerHTML = filteredItems.map(item => `
        <div class="col-lg-4 col-md-6 menu-item" data-category="${item.category}">
            <div class="menu-card">
                <div class="card-img-wrapper">
                    <img src="${item.image}" alt="${item.name}" loading="lazy">
                    <span class="card-category">${item.category}</span>
                </div>
                <div class="card-body">
                    <h3 class="card-title">${item.name}</h3>
                    <p class="card-text">${item.desc}</p>
                    <div class="card-footer-custom">
                        <span class="card-price">${CONFIG.currency}${item.price}</span>
                        <button class="add-to-cart-btn" onclick="addToCart(${item.id})" aria-label="Add ${item.name} to cart">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
    
    // Animate items
    const items = container.querySelectorAll('.menu-item');
    items.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// ==================== CART FUNCTIONS ====================
function addToCart(itemId) {
    const item = menuItems.find(i => i.id === itemId);
    if (!item) return;
    
    const existingItem = cart.find(i => i.id === itemId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...item, quantity: 1 });
    }
    
    saveCart();
    updateCartUI();
    showToast(`${item.name} added to cart!`);
}

function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    saveCart();
    updateCartUI();
}

function updateQuantity(itemId, change) {
    const item = cart.find(i => i.id === itemId);
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(itemId);
    } else {
        saveCart();
        updateCartUI();
    }
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartUI() {
    const countEl = document.getElementById('cart-count');
    const containerEl = document.getElementById('cart-items-container');
    const subtotalEl = document.getElementById('cart-subtotal');
    const taxEl = document.getElementById('cart-tax');
    const totalEl = document.getElementById('cart-total');
    const checkoutBtn = document.getElementById('checkout-btn');
    
    // Update count badge
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (countEl) {
        countEl.textContent = totalItems;
        countEl.style.display = totalItems > 0 ? 'flex' : 'none';
    }
    
    // Update cart items
    if (containerEl) {
        if (cart.length === 0) {
            containerEl.innerHTML = `
                <div class="cart-empty">
                    <i class="fas fa-shopping-basket"></i>
                    <p>Your cart is empty</p>
                    <span>Add some delicious items from our menu!</span>
                </div>
            `;
        } else {
            containerEl.innerHTML = cart.map(item => `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                    <div class="cart-item-details">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-price">${CONFIG.currency}${item.price}</div>
                        <div class="cart-item-qty">
                            <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">
                                <i class="fas fa-minus"></i>
                            </button>
                            <span>${item.quantity}</span>
                            <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">
                                <i class="fas fa-plus"></i>
                            </button>
                        </div>
                    </div>
                    <button class="qty-btn" onclick="removeFromCart(${item.id})" style="color: #ef4444;">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `).join('');
        }
    }
    
    // Update totals
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * CONFIG.taxRate;
    const total = subtotal + tax;
    
    if (subtotalEl) subtotalEl.textContent = `${CONFIG.currency}${subtotal.toFixed(0)}`;
    if (taxEl) taxEl.textContent = `${CONFIG.currency}${tax.toFixed(0)}`;
    if (totalEl) totalEl.textContent = `${CONFIG.currency}${total.toFixed(0)}`;
    
    // Enable/disable checkout button
    if (checkoutBtn) {
        checkoutBtn.disabled = cart.length === 0;
    }
}

function checkout() {
    if (cart.length === 0) {
        showToast('Your cart is empty!', 'error');
        return;
    }
    
    // Check if user is logged in
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
        showToast('Please login to continue with checkout');
        setTimeout(() => {
            window.location.href = 'auth.html';
        }, 1500);
        return;
    }
    
    // Simulate checkout
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = total * CONFIG.taxRate;
    
    showToast(`Order placed successfully! Total: ${CONFIG.currency}${(total + tax).toFixed(0)}`);
    
    cart = [];
    saveCart();
    updateCartUI();
    
    // Close modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('cartModal'));
    if (modal) modal.hide();
}

// ==================== TESTIMONIALS ====================
function initTestimonials() {
    const track = document.getElementById('testimonials-track');
    const dotsContainer = document.getElementById('testimonials-dots');
    const prevBtn = document.getElementById('prev-testimonial');
    const nextBtn = document.getElementById('next-testimonial');
    
    if (!track || !dotsContainer) return;
    
    let currentIndex = 0;
    
    // Render testimonials
    track.innerHTML = testimonials.map(t => `
        <div class="testimonial-card">
            <div class="testimonial-content">
                <div class="testimonial-rating">
                    ${'<i class="fas fa-star"></i>'.repeat(t.rating)}
                </div>
                <p class="testimonial-text">${t.text}</p>
                <div class="testimonial-author">
                    <img src="${t.avatar}" alt="${t.name}" class="testimonial-avatar">
                    <div class="testimonial-info">
                        <h4>${t.name}</h4>
                        <span>${t.role}</span>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
    
    // Render dots
    dotsContainer.innerHTML = testimonials.map((_, i) => `
        <span class="testimonial-dot ${i === 0 ? 'active' : ''}" data-index="${i}"></span>
    `).join('');
    
    // Update carousel
    function updateCarousel() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        document.querySelectorAll('.testimonial-dot').forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
    }
    
    // Navigation
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
            updateCarousel();
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % testimonials.length;
            updateCarousel();
        });
    }
    
    // Dot navigation
    dotsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('testimonial-dot')) {
            currentIndex = parseInt(e.target.dataset.index);
            updateCarousel();
        }
    });
    
    // Auto-slide
    setInterval(() => {
        currentIndex = (currentIndex + 1) % testimonials.length;
        updateCarousel();
    }, 6000);
}

// ==================== RESERVATION FORM ====================
function initReservationForm() {
    const form = document.getElementById('reservation-form');
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('resName').value,
            phone: document.getElementById('resPhone').value,
            email: document.getElementById('resEmail')?.value,
            guests: document.getElementById('resGuests').value,
            date: document.getElementById('resDate').value,
            time: document.getElementById('resTime').value,
            notes: document.getElementById('resNotes')?.value
        };
        
        // Validate
        if (!formData.name || !formData.phone || !formData.date || !formData.time) {
            showToast('Please fill in all required fields', 'error');
            return;
        }
        
        // Simulate submission
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Processing...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            showToast('Reservation confirmed! We look forward to seeing you.');
            form.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 1500);
    });
}

// ==================== NEWSLETTER FORM ====================
function initNewsletterForm() {
    const form = document.getElementById('newsletter-form');
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = form.querySelector('input[type="email"]').value;
        
        if (!email || !isValidEmail(email)) {
            showToast('Please enter a valid email address', 'error');
            return;
        }
        
        showToast('Thank you for subscribing!');
        form.reset();
    });
}

// ==================== DATE PICKER ====================
function initDatePicker() {
    const dateInput = document.getElementById('resDate');
    if (!dateInput) return;
    
    // Set min date to today
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
    
    // Set max date to 3 months from now
    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 3);
    dateInput.max = maxDate.toISOString().split('T')[0];
}

// ==================== BACK TO TOP ====================
function initBackToTop() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });
    
    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ==================== SCROLL ANIMATIONS ====================
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });
}

// ==================== AUTH FUNCTIONS ====================
function checkAuth() {
    const user = JSON.parse(localStorage.getItem('user'));
    const authSection = document.getElementById('auth-section');
    
    if (!authSection) return;
    
    if (user) {
        authSection.innerHTML = `
            <div class="dropdown">
                <button class="btn btn-outline-gold btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown">
                    <i class="fas fa-user me-2"></i>${user.name || 'Account'}
                </button>
                <ul class="dropdown-menu dropdown-menu-dark">
                    <li><a class="dropdown-item" href="#"><i class="fas fa-user me-2"></i>Profile</a></li>
                    <li><a class="dropdown-item" href="#"><i class="fas fa-receipt me-2"></i>Orders</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="#" onclick="logout()"><i class="fas fa-sign-out-alt me-2"></i>Logout</a></li>
                </ul>
            </div>
        `;
    }
}

function logout() {
    localStorage.removeItem('user');
    showToast('Logged out successfully');
    setTimeout(() => {
        location.reload();
    }, 1000);
}

// ==================== UTILITY FUNCTIONS ====================
function showToast(message, type = 'success') {
    const toastEl = document.getElementById('successToast');
    const messageEl = document.getElementById('toast-message');
    
    if (!toastEl || !messageEl) {
        // Fallback to alert if toast elements not found
        alert(message);
        return;
    }
    
    messageEl.textContent = message;
    
    const icon = toastEl.querySelector('i');
    if (icon) {
        icon.className = type === 'error' 
            ? 'fas fa-exclamation-circle text-danger me-2'
            : 'fas fa-check-circle text-success me-2';
    }
    
    const toast = new bootstrap.Toast(toastEl, { delay: CONFIG.toastDuration });
    toast.show();
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ==================== EXPOSE FUNCTIONS GLOBALLY ====================
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.checkout = checkout;
window.logout = logout;