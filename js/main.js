// Main JavaScript for Java Buzz Coffee Shop

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initMenu();
    initBlog();
    initMap();
    initOrderForm();
    initScrollEffects();
    initModals();
});

// ============ NAVIGATION ============
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Mobile menu toggle
    mobileMenuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        const icon = mobileMenuToggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navHeight = navbar.offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                navMenu.classList.remove('active');
                mobileMenuToggle.querySelector('i').classList.add('fa-bars');
                mobileMenuToggle.querySelector('i').classList.remove('fa-times');
                
                // Update active link
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
    
    // Sticky navbar on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// ============ MENU SECTION ============
function initMenu() {
    const menuGrid = document.getElementById('menuGrid');
    const menuTabs = document.querySelectorAll('.menu-tab');
    
    // Display all menu items initially
    displayMenuItems('all');
    
    // Menu tab filtering
    menuTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            menuTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            const category = this.getAttribute('data-category');
            displayMenuItems(category);
        });
    });
}

function displayMenuItems(category) {
    const menuGrid = document.getElementById('menuGrid');
    let filteredItems = category === 'all' ? menuData : menuData.filter(item => item.category === category);
    
    menuGrid.innerHTML = filteredItems.map(item => `
        <div class="menu-card" data-id="${item.id}">
            <div class="menu-card-image" style="background-image: url('${item.image}');"></div>
            <div class="menu-card-content">
                <h3>${item.name}</h3>
                <p class="menu-card-description">${item.description}</p>
                <div class="menu-card-footer">
                    <span class="price">$${item.price.toFixed(2)}</span>
                    <button class="add-to-order-btn" onclick="addToOrder(${item.id})">
                        <i class="fas fa-plus"></i> Add
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// ============ BLOG SECTION ============
function initBlog() {
    const blogGrid = document.getElementById('blogGrid');
    
    // Display first 6 blog posts
    const displayedBlogs = blogData.slice(0, 6);
    
    blogGrid.innerHTML = displayedBlogs.map(post => `
        <article class="blog-card" data-id="${post.id}">
            <div class="blog-card-image" style="background-image: url('${post.image}');"></div>
            <div class="blog-card-content">
                <div class="blog-card-meta">
                    <span class="blog-category">${post.category}</span>
                    <span class="blog-date"><i class="far fa-calendar"></i> ${formatDate(post.date)}</span>
                </div>
                <h3>${post.title}</h3>
                <p class="blog-excerpt">${post.excerpt}</p>
                <div class="blog-card-footer">
                    <span class="blog-author"><i class="fas fa-user"></i> ${post.author}</span>
                    <span class="blog-read-time"><i class="far fa-clock"></i> ${post.readTime}</span>
                </div>
                <button class="read-more-btn" onclick="openBlogModal(${post.id})">
                    Read More <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        </article>
    `).join('');
}

function formatDate(dateStr) {
    const date = new Date(dateStr);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

function openBlogModal(postId) {
    const post = blogData.find(p => p.id === postId);
    if (!post) return;
    
    const modal = document.getElementById('blogModal');
    const modalContent = document.getElementById('blogModalContent');
    
    modalContent.innerHTML = `
        <div class="blog-modal-header">
            <img src="${post.image}" alt="${post.title}">
        </div>
        <div class="blog-modal-body">
            <div class="blog-modal-meta">
                <span class="blog-category">${post.category}</span>
                <span class="blog-date">${formatDate(post.date)}</span>
            </div>
            <h2>${post.title}</h2>
            <div class="blog-author-info">
                <i class="fas fa-user-circle"></i>
                <span>By ${post.author}</span>
                <span class="separator">•</span>
                <span>${post.readTime}</span>
            </div>
            <div class="blog-content">
                <p>${post.content}</p>
            </div>
            <div class="blog-share">
                <h4>Share this article:</h4>
                <div class="share-buttons">
                    <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}" target="_blank" class="share-btn facebook">
                        <i class="fab fa-facebook-f"></i> Facebook
                    </a>
                    <a href="https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}" target="_blank" class="share-btn twitter">
                        <i class="fab fa-twitter"></i> Twitter
                    </a>
                    <a href="https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(post.title)}" target="_blank" class="share-btn linkedin">
                        <i class="fab fa-linkedin-in"></i> LinkedIn
                    </a>
                    <a href="https://pinterest.com/pin/create/button/?url=${encodeURIComponent(window.location.href)}&description=${encodeURIComponent(post.title)}" target="_blank" class="share-btn pinterest">
                        <i class="fab fa-pinterest-p"></i> Pinterest
                    </a>
                    <button onclick="copyToClipboard('${window.location.href}')" class="share-btn copy">
                        <i class="fas fa-link"></i> Copy Link
                    </button>
                </div>
            </div>
        </div>
    `;
    
    modal.style.display = 'flex';
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Link copied to clipboard!');
    });
}

// ============ MAP INITIALIZATION ============
function initMap() {
    // Initialize Leaflet map
    const map = L.map('map').setView([40.7589, -73.9851], 15);
    
    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19
    }).addTo(map);
    
    // Custom coffee icon
    const coffeeIcon = L.divIcon({
        html: '<i class="fas fa-coffee" style="color: #6F4E37; font-size: 24px;"></i>',
        className: 'custom-marker',
        iconSize: [30, 30]
    });
    
    // Add marker
    const marker = L.marker([40.7589, -73.9851], { icon: coffeeIcon }).addTo(map);
    marker.bindPopup('<b>Java Buzz Coffee Shop</b><br>123 Coffee Street<br>New York, NY 10001');
}

// ============ ORDER FORM ============
let orderItems = [];

function initOrderForm() {
    const orderForm = document.getElementById('orderForm');
    const orderType = document.getElementById('orderType');
    const deliveryAddressGroup = document.getElementById('deliveryAddressGroup');
    const orderItemsContainer = document.getElementById('orderItemsContainer');
    
    // Populate order items
    populateOrderItems();
    
    // Show/hide delivery address based on order type
    orderType.addEventListener('change', function() {
        if (this.value === 'delivery') {
            deliveryAddressGroup.style.display = 'block';
            document.getElementById('deliveryAddress').required = true;
        } else {
            deliveryAddressGroup.style.display = 'none';
            document.getElementById('deliveryAddress').required = false;
        }
    });
    
    // Handle form submission
    orderForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (orderItems.length === 0) {
            alert('Please select at least one item for your order.');
            return;
        }
        
        // Generate order number
        const orderNumber = 'JB' + Date.now().toString().slice(-8);
        
        // Show success modal
        document.getElementById('orderNumber').textContent = orderNumber;
        document.getElementById('orderModal').style.display = 'flex';
        
        // Reset form and order
        orderForm.reset();
        orderItems = [];
        updateOrderSummary();
        populateOrderItems();
    });
}

function populateOrderItems() {
    const orderItemsContainer = document.getElementById('orderItemsContainer');
    
    orderItemsContainer.innerHTML = menuData.map(item => `
        <div class="order-item">
            <input type="checkbox" id="order-item-${item.id}" value="${item.id}" onchange="toggleOrderItem(${item.id})">
            <label for="order-item-${item.id}">
                <span class="order-item-name">${item.name}</span>
                <span class="order-item-price">$${item.price.toFixed(2)}</span>
            </label>
            <input type="number" id="qty-${item.id}" min="1" value="1" class="order-item-qty" onchange="updateOrderSummary()">
        </div>
    `).join('');
}

function addToOrder(itemId) {
    // Scroll to order section
    const orderSection = document.getElementById('order');
    const navHeight = document.getElementById('navbar').offsetHeight;
    window.scrollTo({
        top: orderSection.offsetTop - navHeight,
        behavior: 'smooth'
    });
    
    // Check the item
    const checkbox = document.getElementById(`order-item-${itemId}`);
    if (checkbox && !checkbox.checked) {
        checkbox.checked = true;
        toggleOrderItem(itemId);
    }
}

function toggleOrderItem(itemId) {
    const checkbox = document.getElementById(`order-item-${itemId}`);
    const item = menuData.find(i => i.id === itemId);
    
    if (checkbox.checked) {
        if (!orderItems.find(i => i.id === itemId)) {
            orderItems.push({ ...item, quantity: 1 });
        }
    } else {
        orderItems = orderItems.filter(i => i.id !== itemId);
    }
    
    updateOrderSummary();
}

function updateOrderSummary() {
    const summaryContent = document.getElementById('orderSummaryContent');
    const totalPriceElement = document.getElementById('totalPrice');
    
    if (orderItems.length === 0) {
        summaryContent.innerHTML = '<p class="empty-cart">No items selected</p>';
        totalPriceElement.textContent = '$0.00';
        return;
    }
    
    let total = 0;
    summaryContent.innerHTML = orderItems.map(item => {
        const qtyInput = document.getElementById(`qty-${item.id}`);
        const qty = qtyInput ? parseInt(qtyInput.value) : 1;
        const itemTotal = item.price * qty;
        total += itemTotal;
        
        return `
            <div class="summary-item">
                <span>${item.name} x ${qty}</span>
                <span>$${itemTotal.toFixed(2)}</span>
            </div>
        `;
    }).join('');
    
    totalPriceElement.textContent = '$' + total.toFixed(2);
}

// ============ MODALS ============
function initModals() {
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.modal-close');
    
    // Close modal when clicking close button
    closeButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            this.closest('.modal').style.display = 'none';
        });
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        modals.forEach(modal => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
}

function closeOrderModal() {
    document.getElementById('orderModal').style.display = 'none';
}

// ============ SCROLL EFFECTS ============
function initScrollEffects() {
    // Scroll indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        });
    }
    
    // Hide scroll indicator after scrolling
    window.addEventListener('scroll', function() {
        if (scrollIndicator && window.scrollY > 100) {
            scrollIndicator.style.opacity = '0';
        } else if (scrollIndicator) {
            scrollIndicator.style.opacity = '1';
        }
    });
}

// ============ NEWSLETTER FORM ============
document.querySelector('.newsletter-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for subscribing to our newsletter!');
    this.reset();
});
