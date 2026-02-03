// Mock data for restaurants and menu items - Enhanced for Swiggy-style UI

// PUBLIC_INTERFACE
export const restaurants = [
  {
    id: 1,
    name: "The Golden Spoon",
    cuisine: "Italian, Continental",
    rating: 4.5,
    deliveryTime: "30-40",
    priceRange: "$$",
    priceForTwo: "₹400 for two",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop",
    description: "Authentic Italian cuisine with a modern twist",
    isVeg: false,
    isPureVeg: false,
    promoted: true,
    offerText: "50% off up to ₹100",
    hasOffer: true,
    badges: ["Bestseller"],
    eta: "35 mins",
    distanceKm: 2.3,
    deliveryFee: "₹40"
  },
  {
    id: 2,
    name: "Burger Boulevard",
    cuisine: "Burgers, American",
    rating: 4.2,
    deliveryTime: "20-30",
    priceRange: "$",
    priceForTwo: "₹300 for two",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop",
    description: "Best burgers in town with premium ingredients",
    isVeg: false,
    isPureVeg: false,
    promoted: false,
    offerText: "20% off | Use code BURGER20",
    hasOffer: true,
    badges: [],
    eta: "25 mins",
    distanceKm: 1.8,
    deliveryFee: "Free"
  },
  {
    id: 3,
    name: "Spice Garden",
    cuisine: "Indian, North Indian",
    rating: 4.7,
    deliveryTime: "35-45",
    priceRange: "$$",
    priceForTwo: "₹500 for two",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop",
    description: "Traditional Indian flavors and spices",
    isVeg: true,
    isPureVeg: true,
    promoted: true,
    offerText: "Free delivery on orders above ₹249",
    hasOffer: true,
    badges: ["Pure Veg"],
    eta: "40 mins",
    distanceKm: 3.5,
    deliveryFee: "Free"
  },
  {
    id: 4,
    name: "Sushi Express",
    cuisine: "Japanese, Sushi",
    rating: 4.8,
    deliveryTime: "25-35",
    priceRange: "$$$",
    priceForTwo: "₹800 for two",
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop",
    description: "Fresh sushi and Japanese delicacies",
    isVeg: false,
    isPureVeg: false,
    promoted: false,
    offerText: "10% off on orders above ₹599",
    hasOffer: true,
    badges: ["Chef's Special"],
    eta: "30 mins",
    distanceKm: 4.2,
    deliveryFee: "₹50"
  },
  {
    id: 5,
    name: "Taco Fiesta",
    cuisine: "Mexican, Tex-Mex",
    rating: 4.3,
    deliveryTime: "20-30",
    priceRange: "$",
    priceForTwo: "₹350 for two",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop",
    description: "Authentic Mexican street food experience",
    isVeg: false,
    isPureVeg: false,
    promoted: true,
    offerText: "Buy 1 Get 1 Free on all tacos",
    hasOffer: true,
    badges: ["Bestseller", "Fast Delivery"],
    eta: "25 mins",
    distanceKm: 2.1,
    deliveryFee: "₹30"
  },
  {
    id: 6,
    name: "Green Bowl",
    cuisine: "Healthy, Salads",
    rating: 4.6,
    deliveryTime: "25-35",
    priceRange: "$$",
    priceForTwo: "₹450 for two",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
    description: "Fresh, healthy bowls and salads",
    isVeg: true,
    isPureVeg: true,
    promoted: false,
    offerText: "Flat ₹75 off on orders above ₹299",
    hasOffer: true,
    badges: ["Pure Veg", "Healthy"],
    eta: "30 mins",
    distanceKm: 2.8,
    deliveryFee: "₹35"
  },
  {
    id: 7,
    name: "Pizza Paradise",
    cuisine: "Italian, Pizza",
    rating: 4.4,
    deliveryTime: "30-40",
    priceRange: "$$",
    priceForTwo: "₹400 for two",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop",
    description: "Wood-fired pizzas with artisan toppings",
    isVeg: false,
    isPureVeg: false,
    promoted: false,
    offerText: "",
    hasOffer: false,
    badges: [],
    eta: "35 mins",
    distanceKm: 5.2,
    deliveryFee: "₹45"
  },
  {
    id: 8,
    name: "Dragon Wok",
    cuisine: "Chinese, Asian",
    rating: 4.5,
    deliveryTime: "30-40",
    priceRange: "$",
    priceForTwo: "₹300 for two",
    image: "https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=400&h=300&fit=crop",
    description: "Authentic Chinese wok dishes",
    isVeg: false,
    isPureVeg: false,
    promoted: true,
    offerText: "50% off up to ₹100 | Use code DRAGON50",
    hasOffer: true,
    badges: ["Fast Delivery"],
    eta: "35 mins",
    distanceKm: 3.7,
    deliveryFee: "₹40"
  },
  {
    id: 9,
    name: "Mediterranean Breeze",
    cuisine: "Mediterranean, Lebanese",
    rating: 4.6,
    deliveryTime: "35-45",
    priceRange: "$$",
    priceForTwo: "₹550 for two",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop",
    description: "Fresh Mediterranean cuisine and mezze",
    isVeg: false,
    isPureVeg: false,
    promoted: false,
    offerText: "",
    hasOffer: false,
    badges: [],
    eta: "40 mins",
    distanceKm: 6.5,
    deliveryFee: "₹50"
  },
  {
    id: 10,
    name: "Thai Delight",
    cuisine: "Thai, Asian",
    rating: 4.7,
    deliveryTime: "30-40",
    priceRange: "$$",
    priceForTwo: "₹500 for two",
    image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=400&h=300&fit=crop",
    description: "Authentic Thai curries and noodles",
    isVeg: false,
    isPureVeg: false,
    promoted: false,
    offerText: "20% off on orders above ₹399",
    hasOffer: true,
    badges: ["Bestseller"],
    eta: "35 mins",
    distanceKm: 4.8,
    deliveryFee: "₹45"
  },
  {
    id: 11,
    name: "BBQ Nation",
    cuisine: "American, BBQ",
    rating: 4.3,
    deliveryTime: "40-50",
    priceRange: "$$$",
    priceForTwo: "₹700 for two",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop",
    description: "Slow-cooked BBQ and grilled meats",
    isVeg: false,
    isPureVeg: false,
    promoted: false,
    offerText: "",
    hasOffer: false,
    badges: [],
    eta: "45 mins",
    distanceKm: 7.3,
    deliveryFee: "₹60"
  },
  {
    id: 12,
    name: "Veggie Delight",
    cuisine: "Healthy, Indian",
    rating: 4.8,
    deliveryTime: "25-35",
    priceRange: "$",
    priceForTwo: "₹250 for two",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop",
    description: "100% vegetarian comfort food",
    isVeg: true,
    isPureVeg: true,
    promoted: true,
    offerText: "40% off up to ₹80",
    hasOffer: true,
    badges: ["Pure Veg", "Bestseller"],
    eta: "30 mins",
    distanceKm: 1.5,
    deliveryFee: "Free"
  }
];

// PUBLIC_INTERFACE
export const menuItems = {
  1: [ // The Golden Spoon
    { id: 101, name: "Margherita Pizza", price: 12.99, category: "Bestsellers", isVeg: true, hasOffer: true, offerText: "20% off", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=200&h=200&fit=crop", description: "Classic Italian pizza with fresh mozzarella" },
    { id: 102, name: "Penne Arrabiata", price: 14.99, category: "Bestsellers", isVeg: true, hasOffer: false, offerText: "", image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=200&h=200&fit=crop", description: "Spicy tomato pasta with garlic and herbs" },
    { id: 103, name: "Chicken Parmesan", price: 16.99, category: "Recommended", isVeg: false, hasOffer: true, offerText: "₹50 off", image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=200&h=200&fit=crop", description: "Breaded chicken with marinara and cheese" },
    { id: 104, name: "Tiramisu", price: 6.99, category: "Desserts", isVeg: true, hasOffer: false, offerText: "", image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=200&h=200&fit=crop", description: "Classic Italian coffee-flavored dessert" },
    { id: 105, name: "Caesar Salad", price: 8.99, category: "Starters", isVeg: false, hasOffer: false, offerText: "", image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=200&h=200&fit=crop", description: "Crisp romaine with Caesar dressing" }
  ],
  2: [ // Burger Boulevard
    { id: 201, name: "Classic Burger", price: 9.99, category: "Bestsellers", isVeg: false, hasOffer: true, offerText: "Buy 1 Get 1", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&h=200&fit=crop", description: "Juicy beef patty with lettuce and tomato" },
    { id: 202, name: "Veggie Burger", price: 8.99, category: "Bestsellers", isVeg: true, hasOffer: true, offerText: "15% off", image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=200&h=200&fit=crop", description: "Plant-based patty with all the fixings" },
    { id: 203, name: "Cheese Fries", price: 5.99, category: "Sides", isVeg: true, hasOffer: false, offerText: "", image: "https://images.unsplash.com/photo-1630431341973-02e6a1f33fff?w=200&h=200&fit=crop", description: "Crispy fries loaded with melted cheese" },
    { id: 204, name: "Chocolate Shake", price: 4.99, category: "Beverages", isVeg: true, hasOffer: false, offerText: "", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=200&h=200&fit=crop", description: "Thick and creamy chocolate milkshake" },
    { id: 205, name: "Onion Rings", price: 4.99, category: "Sides", isVeg: true, hasOffer: false, offerText: "", image: "https://images.unsplash.com/photo-1639024471283-03518883512d?w=200&h=200&fit=crop", description: "Crispy fried onion rings" }
  ],
  3: [ // Spice Garden
    { id: 301, name: "Paneer Tikka", price: 11.99, category: "Bestsellers", isVeg: true, hasOffer: true, offerText: "Free delivery", image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=200&h=200&fit=crop", description: "Grilled cottage cheese with spices" },
    { id: 302, name: "Butter Chicken", price: 15.99, category: "Recommended", isVeg: false, hasOffer: false, offerText: "", image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=200&h=200&fit=crop", description: "Creamy tomato curry with tender chicken" },
    { id: 303, name: "Dal Makhani", price: 10.99, category: "Recommended", isVeg: true, hasOffer: true, offerText: "₹30 off", image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=200&h=200&fit=crop", description: "Rich black lentils in creamy gravy" },
    { id: 304, name: "Garlic Naan", price: 3.99, category: "Breads", isVeg: true, hasOffer: false, offerText: "", image: "https://images.unsplash.com/photo-1619871368029-6c1e6b10b26c?w=200&h=200&fit=crop", description: "Soft flatbread with garlic butter" },
    { id: 305, name: "Gulab Jamun", price: 5.99, category: "Desserts", isVeg: true, hasOffer: false, offerText: "", image: "https://images.unsplash.com/photo-1642484824893-6e79c52d6a31?w=200&h=200&fit=crop", description: "Sweet milk dumplings in sugar syrup" }
  ],
  4: [ // Sushi Express
    { id: 401, name: "California Roll", price: 13.99, category: "Bestsellers", isVeg: false, hasOffer: true, offerText: "10% off", image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=200&h=200&fit=crop", description: "Crab, avocado, and cucumber roll" },
    { id: 402, name: "Salmon Sashimi", price: 16.99, category: "Recommended", isVeg: false, hasOffer: false, offerText: "", image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=200&h=200&fit=crop", description: "Fresh sliced salmon" },
    { id: 403, name: "Veggie Roll", price: 10.99, category: "Bestsellers", isVeg: true, hasOffer: true, offerText: "₹40 off", image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=200&h=200&fit=crop", description: "Assorted vegetables in seaweed" },
    { id: 404, name: "Miso Soup", price: 4.99, category: "Soups", isVeg: true, hasOffer: false, offerText: "", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=200&h=200&fit=crop", description: "Traditional Japanese soybean soup" },
    { id: 405, name: "Green Tea Ice Cream", price: 5.99, category: "Desserts", isVeg: true, hasOffer: false, offerText: "", image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=200&h=200&fit=crop", description: "Creamy green tea flavored ice cream" }
  ],
  5: [ // Taco Fiesta
    { id: 501, name: "Chicken Tacos", price: 9.99, category: "Bestsellers", isVeg: false, hasOffer: true, offerText: "BOGO", image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=200&h=200&fit=crop", description: "Three soft tacos with grilled chicken" },
    { id: 502, name: "Veggie Burrito", price: 8.99, category: "Bestsellers", isVeg: true, hasOffer: true, offerText: "20% off", image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=200&h=200&fit=crop", description: "Rice, beans, and vegetables wrapped" },
    { id: 503, name: "Nachos Supreme", price: 7.99, category: "Starters", isVeg: true, hasOffer: false, offerText: "", image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=200&h=200&fit=crop", description: "Tortilla chips with cheese and salsa" },
    { id: 504, name: "Guacamole", price: 5.99, category: "Sides", isVeg: true, hasOffer: false, offerText: "", image: "https://images.unsplash.com/photo-1604903676664-37bc3eb9cbe7?w=200&h=200&fit=crop", description: "Fresh avocado dip with chips" },
    { id: 505, name: "Churros", price: 4.99, category: "Desserts", isVeg: true, hasOffer: false, offerText: "", image: "https://images.unsplash.com/photo-1599599810694-3f8e0b2bc0fb?w=200&h=200&fit=crop", description: "Fried dough pastry with cinnamon sugar" }
  ],
  6: [ // Green Bowl
    { id: 601, name: "Quinoa Power Bowl", price: 11.99, category: "Bestsellers", isVeg: true, hasOffer: true, offerText: "₹75 off", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=200&h=200&fit=crop", description: "Quinoa with roasted vegetables" },
    { id: 602, name: "Avocado Toast", price: 8.99, category: "Breakfast", isVeg: true, hasOffer: false, offerText: "", image: "https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?w=200&h=200&fit=crop", description: "Smashed avocado on multigrain toast" },
    { id: 603, name: "Green Smoothie", price: 6.99, category: "Beverages", isVeg: true, hasOffer: true, offerText: "Free add-on", image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=200&h=200&fit=crop", description: "Spinach, banana, and apple smoothie" },
    { id: 604, name: "Acai Bowl", price: 9.99, category: "Breakfast", isVeg: true, hasOffer: false, offerText: "", image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=200&h=200&fit=crop", description: "Acai blend topped with fresh fruits" },
    { id: 605, name: "Kale Salad", price: 10.99, category: "Salads", isVeg: true, hasOffer: false, offerText: "", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=200&h=300&fit=crop", description: "Fresh kale with lemon dressing" }
  ],
  7: [ // Pizza Paradise
    { id: 701, name: "Pepperoni Pizza", price: 14.99, category: "Bestsellers", isVeg: false, hasOffer: false, offerText: "", image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=200&h=200&fit=crop", description: "Classic pepperoni with mozzarella" },
    { id: 702, name: "Veggie Supreme", price: 13.99, category: "Bestsellers", isVeg: true, hasOffer: false, offerText: "", image: "https://images.unsplash.com/photo-1511689660979-10d2b1aada49?w=200&h=200&fit=crop", description: "Loaded with fresh vegetables" },
    { id: 703, name: "BBQ Chicken Pizza", price: 15.99, category: "Recommended", isVeg: false, hasOffer: false, offerText: "", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200&h=200&fit=crop", description: "BBQ sauce with grilled chicken" },
    { id: 704, name: "Garlic Bread", price: 5.99, category: "Sides", isVeg: true, hasOffer: false, offerText: "", image: "https://images.unsplash.com/photo-1573140401552-3fab0b24f2af?w=200&h=200&fit=crop", description: "Toasted bread with garlic butter" },
    { id: 705, name: "Brownie", price: 4.99, category: "Desserts", isVeg: true, hasOffer: false, offerText: "", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=200&h=200&fit=crop", description: "Chocolate fudge brownie" }
  ],
  8: [ // Dragon Wok
    { id: 801, name: "Kung Pao Chicken", price: 12.99, category: "Bestsellers", isVeg: false, hasOffer: true, offerText: "50% off", image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=200&h=200&fit=crop", description: "Spicy stir-fried chicken with peanuts" },
    { id: 802, name: "Vegetable Chow Mein", price: 10.99, category: "Bestsellers", isVeg: true, hasOffer: true, offerText: "₹60 off", image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=200&h=200&fit=crop", description: "Stir-fried noodles with vegetables" },
    { id: 803, name: "Spring Rolls", price: 6.99, category: "Starters", isVeg: true, hasOffer: false, offerText: "", image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=200&h=200&fit=crop", description: "Crispy vegetable spring rolls" },
    { id: 804, name: "Fried Rice", price: 9.99, category: "Mains", isVeg: false, hasOffer: false, offerText: "", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=200&h=200&fit=crop", description: "Wok-tossed rice with eggs and vegetables" },
    { id: 805, name: "Fortune Cookie", price: 1.99, category: "Desserts", isVeg: true, hasOffer: false, offerText: "", image: "https://images.unsplash.com/photo-1606312619070-d48b4ba7a6eb?w=200&h=200&fit=crop", description: "Crispy cookie with a fortune inside" }
  ],
  9: [ // Mediterranean Breeze
    { id: 901, name: "Lamb Gyro", price: 13.99, category: "Bestsellers", isVeg: false, hasOffer: false, offerText: "", image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=200&h=200&fit=crop", description: "Grilled lamb in pita with tzatziki" },
    { id: 902, name: "Falafel Wrap", price: 10.99, category: "Bestsellers", isVeg: true, hasOffer: false, offerText: "", image: "https://images.unsplash.com/photo-1593504049359-74330189a345?w=200&h=200&fit=crop", description: "Crispy falafel in flatbread" },
    { id: 903, name: "Hummus Platter", price: 8.99, category: "Starters", isVeg: true, hasOffer: false, offerText: "", image: "https://images.unsplash.com/photo-1605449278209-b0e9cc3e5321?w=200&h=200&fit=crop", description: "Chickpea dip with pita bread" },
    { id: 904, name: "Greek Salad", price: 9.99, category: "Salads", isVeg: true, hasOffer: false, offerText: "", image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=200&h=200&fit=crop", description: "Fresh vegetables with feta cheese" },
    { id: 905, name: "Baklava", price: 5.99, category: "Desserts", isVeg: true, hasOffer: false, offerText: "", image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=200&h=200&fit=crop", description: "Sweet pastry with nuts and honey" }
  ],
  10: [ // Thai Delight
    { id: 1001, name: "Pad Thai", price: 12.99, category: "Bestsellers", isVeg: false, hasOffer: true, offerText: "20% off", image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=200&h=200&fit=crop", description: "Stir-fried rice noodles with shrimp" },
    { id: 1002, name: "Green Curry", price: 13.99, category: "Recommended", isVeg: true, hasOffer: true, offerText: "₹50 off", image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=200&h=200&fit=crop", description: "Spicy coconut curry with vegetables" },
    { id: 1003, name: "Tom Yum Soup", price: 8.99, category: "Soups", isVeg: false, hasOffer: false, offerText: "", image: "https://images.unsplash.com/photo-1547928576-631d6dbd2c85?w=200&h=200&fit=crop", description: "Hot and sour Thai soup with shrimp" },
    { id: 1004, name: "Thai Iced Tea", price: 4.99, category: "Beverages", isVeg: true, hasOffer: false, offerText: "", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=200&h=200&fit=crop", description: "Sweet and creamy Thai tea" },
    { id: 1005, name: "Mango Sticky Rice", price: 6.99, category: "Desserts", isVeg: true, hasOffer: false, offerText: "", image: "https://images.unsplash.com/photo-1598084991519-c90900bc9df0?w=200&h=200&fit=crop", description: "Sweet rice with fresh mango" }
  ],
  11: [ // BBQ Nation
    { id: 1101, name: "Smoked Brisket", price: 18.99, category: "Bestsellers", isVeg: false, hasOffer: false, offerText: "", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=200&h=200&fit=crop", description: "Slow-smoked beef brisket" },
    { id: 1102, name: "BBQ Ribs", price: 19.99, category: "Bestsellers", isVeg: false, hasOffer: false, offerText: "", image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=200&h=200&fit=crop", description: "Fall-off-the-bone pork ribs" },
    { id: 1103, name: "Pulled Pork Sandwich", price: 14.99, category: "Recommended", isVeg: false, hasOffer: false, offerText: "", image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=200&h=200&fit=crop", description: "Tender pulled pork on a bun" },
    { id: 1104, name: "Coleslaw", price: 4.99, category: "Sides", isVeg: true, hasOffer: false, offerText: "", image: "https://images.unsplash.com/photo-1620158526143-9167c2d96f3d?w=200&h=200&fit=crop", description: "Creamy cabbage salad" },
    { id: 1105, name: "Apple Pie", price: 6.99, category: "Desserts", isVeg: true, hasOffer: false, offerText: "", image: "https://images.unsplash.com/photo-1535920527002-b35e96722eb9?w=200&h=200&fit=crop", description: "Classic American apple pie" }
  ],
  12: [ // Veggie Delight
    { id: 1201, name: "Veggie Pizza", price: 11.99, category: "Bestsellers", isVeg: true, hasOffer: true, offerText: "40% off", image: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=200&h=200&fit=crop", description: "Garden fresh vegetables on pizza" },
    { id: 1202, name: "Veggie Burger", price: 9.99, category: "Bestsellers", isVeg: true, hasOffer: true, offerText: "₹30 off", image: "https://images.unsplash.com/photo-1585238341710-4a10f6d5b90a?w=200&h=200&fit=crop", description: "Delicious plant-based burger" },
    { id: 1203, name: "Veggie Wrap", price: 8.99, category: "Recommended", isVeg: true, hasOffer: false, offerText: "", image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=200&h=200&fit=crop", description: "Fresh vegetables in a wrap" },
    { id: 1204, name: "Sweet Potato Fries", price: 5.99, category: "Sides", isVeg: true, hasOffer: false, offerText: "", image: "https://images.unsplash.com/photo-1639744091981-5f1b040c84b7?w=200&h=200&fit=crop", description: "Crispy sweet potato fries" },
    { id: 1205, name: "Fruit Salad", price: 6.99, category: "Desserts", isVeg: true, hasOffer: false, offerText: "", image: "https://images.unsplash.com/photo-1564093497595-593b96d80180?w=200&h=200&fit=crop", description: "Fresh seasonal fruits" }
  ]
};

// PUBLIC_INTERFACE
export const promotionalBanners = [
  {
    id: 1,
    title: "50% Off on First Order",
    subtitle: "Use code: FIRST50 on orders above ₹199",
    tag: "New User Offer",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&h=400&fit=crop",
    bgColor: "#fc8019"
  },
  {
    id: 2,
    title: "Free Delivery",
    subtitle: "On orders above ₹299 - Limited time",
    tag: "Save More",
    image: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=1200&h=400&fit=crop",
    bgColor: "#212121"
  },
  {
    id: 3,
    title: "Weekend Special",
    subtitle: "Extra 20% off on all orders",
    tag: "Weekend Deal",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200&h=400&fit=crop",
    bgColor: "#48c479"
  },
  {
    id: 4,
    title: "Pay Later",
    subtitle: "Order now, pay in 3 interest-free EMIs",
    tag: "Flexible Payment",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=1200&h=400&fit=crop",
    bgColor: "#5d9cec"
  }
];

// PUBLIC_INTERFACE
export const cuisineTypes = [
  "All",
  "Italian",
  "American",
  "Indian",
  "Japanese",
  "Mexican",
  "Healthy",
  "Chinese",
  "Mediterranean",
  "Thai"
];
