// Menu Data
const menuData = [
    // Hot Coffee
    {
        id: 1,
        name: "Espresso",
        category: "hot-coffee",
        price: 3.50,
        description: "Rich and bold, a perfect shot of pure coffee",
        image: "img/espresso.jpg"
    },
    {
        id: 2,
        name: "Americano",
        category: "hot-coffee",
        price: 4.00,
        description: "Espresso with hot water for a smooth taste",
        image: "img/americano.jpg"
    },
    {
        id: 3,
        name: "Cappuccino",
        category: "hot-coffee",
        price: 4.50,
        description: "Espresso with steamed milk and thick foam",
        image: "img/cappuccino.jpg"
    },
    {
        id: 4,
        name: "Latte",
        category: "hot-coffee",
        price: 4.75,
        description: "Smooth espresso with creamy steamed milk",
        image: "img/latte.jpg"
    },
    {
        id: 5,
        name: "Mocha",
        category: "hot-coffee",
        price: 5.25,
        description: "Rich chocolate blended with espresso and milk",
        image: "img/mocha.jpg"
    },
    {
        id: 6,
        name: "Caramel Macchiato",
        category: "hot-coffee",
        price: 5.50,
        description: "Vanilla and caramel with espresso and milk",
        image: "img/caramel-macchiato.jpg"
    },
    {
        id: 7,
        name: "Flat White",
        category: "hot-coffee",
        price: 4.50,
        description: "Velvety microfoam over a double shot of espresso",
        image: "img/flat-white.webp"
    },
    {
        id: 8,
        name: "Turkish Coffee",
        category: "hot-coffee",
        price: 4.25,
        description: "Traditional strong coffee with a rich aroma",
        image: "https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=400&q=80"
    },
    
    // Cold Coffee
    {
        id: 9,
        name: "Iced Latte",
        category: "cold-coffee",
        price: 5.00,
        description: "Chilled espresso with cold milk over ice",
        image: "img/iced-latte.webp"
    },
    {
        id: 10,
        name: "Cold Brew",
        category: "cold-coffee",
        price: 4.75,
        description: "Smooth, slow-steeped coffee served cold",
        image: "img/coldbrew.jpg"
    },
    {
        id: 11,
        name: "Iced Americano",
        category: "cold-coffee",
        price: 4.25,
        description: "Espresso shots over ice with cold water",
        image: "img/icedamericano.jpg"
    },
    {
        id: 12,
        name: "Frappe",
        category: "cold-coffee",
        price: 5.50,
        description: "Blended iced coffee with whipped cream",
        image: "img/frappe.jpeg"
    },
    {
        id: 13,
        name: "Iced Mocha",
        category: "cold-coffee",
        price: 5.75,
        description: "Chocolate and espresso over ice with milk",
        image: "img/iced mocha.jpg"
    },
    {
        id: 14,
        name: "Vanilla Iced Coffee",
        category: "cold-coffee",
        price: 5.25,
        description: "Sweet vanilla flavor with iced coffee",
        image: "img/iced-vanilla-latte-2.webp"
    },
    
    // Pastries
    {
        id: 15,
        name: "Croissant",
        category: "pastries",
        price: 3.50,
        description: "Buttery, flaky French pastry",
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&q=80"
    },
    {
        id: 16,
        name: "Chocolate Muffin",
        category: "pastries",
        price: 3.75,
        description: "Rich chocolate muffin with chocolate chips",
        image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=400&q=80"
    },
    {
        id: 17,
        name: "Blueberry Scone",
        category: "pastries",
        price: 3.50,
        description: "Fresh blueberries in a buttery scone",
        image: "img/blueberry-scone.jpg"
    },
    {
        id: 18,
        name: "Cinnamon Roll",
        category: "pastries",
        price: 4.25,
        description: "Sweet roll with cinnamon and cream cheese frosting",
        image: "img/cinnamon-roll.jpg"
    },
    {
        id: 20,
        name: "Banana Bread",
        category: "pastries",
        price: 3.25,
        description: "Moist banana bread with walnuts",
        image: "img/bananabread.jpg"
    },
    
    // Snacks
    {
        id: 21,
        name: "Bagel with Cream Cheese",
        category: "snacks",
        price: 4.00,
        description: "Fresh bagel with plain or flavored cream cheese",
        image: "img/Bagel_CreamCheese.webp"
    },
    {
        id: 22,
        name: "Avocado Toast",
        category: "snacks",
        price: 6.50,
        description: "Mashed avocado on toasted sourdough",
        image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&q=80"
    },
    {
        id: 23,
        name: "Grilled Sandwich",
        category: "snacks",
        price: 7.00,
        description: "Grilled cheese and tomato sandwich",
        image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&q=80"
    },
    {
        id: 24,
        name: "Fruit Salad",
        category: "snacks",
        price: 5.50,
        description: "Fresh seasonal fruits with honey drizzle",
        image: "https://images.unsplash.com/photo-1564093497595-593b96d80180?w=400&q=80"
    },
    {
        id: 25,
        name: "Granola Bar",
        category: "snacks",
        price: 2.50,
        description: "Homemade granola with nuts and dried fruits",
        image: "img/granola.jpg"
    },
    {
        id: 26,
        name: "Cookie Assortment",
        category: "snacks",
        price: 3.00,
        description: "Three freshly baked cookies of your choice",
        image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&q=80"
    }
];

// Blog Data with at least 10 posts
const blogData = [
    {
        id: 1,
        title: "The Art of Pour Over Coffee",
        author: "Sarah Johnson",
        date: "2024-02-15",
        category: "Brewing Tips",
        excerpt: "Discover the meticulous technique behind the perfect pour over coffee and why it's worth the extra effort.",
        content: "Pour over coffee is more than just a brewing method—it's an art form that allows you to control every aspect of your coffee's flavor profile. The slow, deliberate process of pouring hot water over freshly ground coffee creates a cup that's clean, complex, and full of nuanced flavors...",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
        readTime: "5 min read"
    },
    {
        id: 2,
        title: "Single Origin vs. Blends: What's the Difference?",
        author: "Michael Chen",
        date: "2024-02-10",
        category: "Coffee Education",
        excerpt: "Understanding the difference between single origin and blend coffees can help you make better choices for your taste preferences.",
        content: "When you walk into a specialty coffee shop, you'll often see terms like 'single origin' and 'blend' on the menu. But what do these terms really mean, and how do they affect your coffee experience? Single origin coffees come from one specific region or farm, showcasing unique characteristics of that particular terroir...",
        image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80",
        readTime: "6 min read"
    },
    {
        id: 3,
        title: "5 Common Coffee Brewing Mistakes",
        author: "Emma Davis",
        date: "2024-02-05",
        category: "Brewing Tips",
        excerpt: "Avoid these common pitfalls to ensure every cup of coffee you brew is exceptional.",
        content: "Even experienced coffee lovers sometimes make mistakes that can negatively impact their brew. Here are five common errors and how to avoid them: 1. Using stale coffee beans - always buy fresh and use within two weeks of roasting. 2. Incorrect water temperature - aim for 195-205°F for optimal extraction...",
        image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&q=80",
        readTime: "4 min read"
    },
    {
        id: 4,
        title: "The Journey of Coffee: From Bean to Cup",
        author: "James Wilson",
        date: "2024-01-28",
        category: "Coffee Education",
        excerpt: "Follow the fascinating journey coffee beans take from farms around the world to your morning cup.",
        content: "Have you ever wondered about the incredible journey your morning coffee takes before it reaches your cup? It all starts at coffee farms in the 'Bean Belt' - the tropical region between the Tropics of Cancer and Capricorn. Coffee cherries are hand-picked at peak ripeness, then processed to extract the green coffee beans...",
        image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&q=80",
        readTime: "7 min read"
    },
    {
        id: 6,
        title: "Espresso 101: A Beginner's Guide",
        author: "David Martinez",
        date: "2024-01-15",
        category: "Coffee Education",
        excerpt: "Everything you need to know about espresso, from what it is to how to make the perfect shot at home.",
        content: "Espresso is the foundation of many beloved coffee drinks, but what exactly is it? Contrary to popular belief, espresso isn't a type of coffee bean or roast—it's a brewing method. By forcing hot water through finely-ground coffee under high pressure, you create a concentrated, flavorful shot topped with golden crema...",
        image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=800&q=80",
        readTime: "5 min read"
    },
    {
        id: 7,
        title: "The Perfect Milk Foam: Latte Art Basics",
        author: "Sophie Turner",
        date: "2024-01-08",
        category: "Barista Skills",
        excerpt: "Master the technique of steaming milk and creating beautiful latte art designs that will impress everyone.",
        content: "Latte art transforms a simple coffee drink into a work of art. The key to perfect latte art lies in properly steamed milk—it should be smooth, glossy, and free of large bubbles. Start by purging your steam wand, then position it just below the milk's surface to create a whirlpool effect...",
        image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&q=80",
        readTime: "6 min read"
    },
];
