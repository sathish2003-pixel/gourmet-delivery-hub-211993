// Mock data for restaurants and menu items

// PUBLIC_INTERFACE
export const restaurants = [
  {
    id: 1,
    name: "The Golden Spoon",
    cuisine: "Italian",
    rating: 4.5,
    deliveryTime: "30-40",
    priceRange: "$$",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop",
    description: "Authentic Italian cuisine with a modern twist",
    isVeg: false,
    promoted: true
  },
  {
    id: 2,
    name: "Burger Boulevard",
    cuisine: "American",
    rating: 4.2,
    deliveryTime: "20-30",
    priceRange: "$",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop",
    description: "Best burgers in town with premium ingredients",
    isVeg: false,
    promoted: false
  },
  {
    id: 3,
    name: "Spice Garden",
    cuisine: "Indian",
    rating: 4.7,
    deliveryTime: "35-45",
    priceRange: "$$",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop",
    description: "Traditional Indian flavors and spices",
    isVeg: true,
    promoted: true
  },
  {
    id: 4,
    name: "Sushi Express",
    cuisine: "Japanese",
    rating: 4.8,
    deliveryTime: "25-35",
    priceRange: "$$$",
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop",
    description: "Fresh sushi and Japanese delicacies",
    isVeg: false,
    promoted: false
  },
  {
    id: 5,
    name: "Taco Fiesta",
    cuisine: "Mexican",
    rating: 4.3,
    deliveryTime: "20-30",
    priceRange: "$",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop",
    description: "Authentic Mexican street food experience",
    isVeg: false,
    promoted: true
  },
  {
    id: 6,
    name: "Green Bowl",
    cuisine: "Healthy",
    rating: 4.6,
    deliveryTime: "25-35",
    priceRange: "$$",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
    description: "Fresh, healthy bowls and salads",
    isVeg: true,
    promoted: false
  },
  {
    id: 7,
    name: "Pizza Paradise",
    cuisine: "Italian",
    rating: 4.4,
    deliveryTime: "30-40",
    priceRange: "$$",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop",
    description: "Wood-fired pizzas with artisan toppings",
    isVeg: false,
    promoted: false
  },
  {
    id: 8,
    name: "Dragon Wok",
    cuisine: "Chinese",
    rating: 4.5,
    deliveryTime: "30-40",
    priceRange: "$",
    image: "https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=400&h=300&fit=crop",
    description: "Authentic Chinese wok dishes",
    isVeg: false,
    promoted: true
  },
  {
    id: 9,
    name: "Mediterranean Breeze",
    cuisine: "Mediterranean",
    rating: 4.6,
    deliveryTime: "35-45",
    priceRange: "$$",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop",
    description: "Fresh Mediterranean cuisine and mezze",
    isVeg: false,
    promoted: false
  },
  {
    id: 10,
    name: "Thai Delight",
    cuisine: "Thai",
    rating: 4.7,
    deliveryTime: "30-40",
    priceRange: "$$",
    image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=400&h=300&fit=crop",
    description: "Authentic Thai curries and noodles",
    isVeg: false,
    promoted: false
  },
  {
    id: 11,
    name: "BBQ Nation",
    cuisine: "American",
    rating: 4.3,
    deliveryTime: "40-50",
    priceRange: "$$$",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop",
    description: "Slow-cooked BBQ and grilled meats",
    isVeg: false,
    promoted: false
  },
  {
    id: 12,
    name: "Veggie Delight",
    cuisine: "Healthy",
    rating: 4.8,
    deliveryTime: "25-35",
    priceRange: "$",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop",
    description: "100% vegetarian comfort food",
    isVeg: true,
    promoted: true
  }
];

// PUBLIC_INTERFACE
export const menuItems = {
  1: [ // The Golden Spoon
    { id: 101, name: "Margherita Pizza", price: 12.99, category: "Main Course", isVeg: true, image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=200&h=200&fit=crop" },
    { id: 102, name: "Penne Arrabiata", price: 14.99, category: "Main Course", isVeg: true, image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=200&h=200&fit=crop" },
    { id: 103, name: "Chicken Parmesan", price: 16.99, category: "Main Course", isVeg: false, image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=200&h=200&fit=crop" },
    { id: 104, name: "Tiramisu", price: 6.99, category: "Dessert", isVeg: true, image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=200&h=200&fit=crop" },
    { id: 105, name: "Caesar Salad", price: 8.99, category: "Appetizer", isVeg: false, image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=200&h=200&fit=crop" }
  ],
  2: [ // Burger Boulevard
    { id: 201, name: "Classic Burger", price: 9.99, category: "Main Course", isVeg: false, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&h=200&fit=crop" },
    { id: 202, name: "Veggie Burger", price: 8.99, category: "Main Course", isVeg: true, image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=200&h=200&fit=crop" },
    { id: 203, name: "Cheese Fries", price: 5.99, category: "Sides", isVeg: true, image: "https://images.unsplash.com/photo-1630431341973-02e6a1f33fff?w=200&h=200&fit=crop" },
    { id: 204, name: "Chocolate Shake", price: 4.99, category: "Beverage", isVeg: true, image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=200&h=200&fit=crop" },
    { id: 205, name: "Onion Rings", price: 4.99, category: "Sides", isVeg: true, image: "https://images.unsplash.com/photo-1639024471283-03518883512d?w=200&h=200&fit=crop" }
  ],
  3: [ // Spice Garden
    { id: 301, name: "Paneer Tikka", price: 11.99, category: "Appetizer", isVeg: true, image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=200&h=200&fit=crop" },
    { id: 302, name: "Butter Chicken", price: 15.99, category: "Main Course", isVeg: false, image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=200&h=200&fit=crop" },
    { id: 303, name: "Dal Makhani", price: 10.99, category: "Main Course", isVeg: true, image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=200&h=200&fit=crop" },
    { id: 304, name: "Garlic Naan", price: 3.99, category: "Sides", isVeg: true, image: "https://images.unsplash.com/photo-1619871368029-6c1e6b10b26c?w=200&h=200&fit=crop" },
    { id: 305, name: "Gulab Jamun", price: 5.99, category: "Dessert", isVeg: true, image: "https://images.unsplash.com/photo-1642484824893-6e79c52d6a31?w=200&h=200&fit=crop" }
  ],
  4: [ // Sushi Express
    { id: 401, name: "California Roll", price: 13.99, category: "Sushi", isVeg: false, image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=200&h=200&fit=crop" },
    { id: 402, name: "Salmon Sashimi", price: 16.99, category: "Sashimi", isVeg: false, image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=200&h=200&fit=crop" },
    { id: 403, name: "Veggie Roll", price: 10.99, category: "Sushi", isVeg: true, image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=200&h=200&fit=crop" },
    { id: 404, name: "Miso Soup", price: 4.99, category: "Appetizer", isVeg: true, image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=200&h=200&fit=crop" },
    { id: 405, name: "Green Tea Ice Cream", price: 5.99, category: "Dessert", isVeg: true, image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=200&h=200&fit=crop" }
  ],
  5: [ // Taco Fiesta
    { id: 501, name: "Chicken Tacos", price: 9.99, category: "Main Course", isVeg: false, image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=200&h=200&fit=crop" },
    { id: 502, name: "Veggie Burrito", price: 8.99, category: "Main Course", isVeg: true, image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=200&h=200&fit=crop" },
    { id: 503, name: "Nachos Supreme", price: 7.99, category: "Appetizer", isVeg: true, image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=200&h=200&fit=crop" },
    { id: 504, name: "Guacamole", price: 5.99, category: "Sides", isVeg: true, image: "https://images.unsplash.com/photo-1604903676664-37bc3eb9cbe7?w=200&h=200&fit=crop" },
    { id: 505, name: "Churros", price: 4.99, category: "Dessert", isVeg: true, image: "https://images.unsplash.com/photo-1599599810694-3f8e0b2bc0fb?w=200&h=200&fit=crop" }
  ],
  6: [ // Green Bowl
    { id: 601, name: "Quinoa Power Bowl", price: 11.99, category: "Main Course", isVeg: true, image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=200&h=200&fit=crop" },
    { id: 602, name: "Avocado Toast", price: 8.99, category: "Breakfast", isVeg: true, image: "https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?w=200&h=200&fit=crop" },
    { id: 603, name: "Green Smoothie", price: 6.99, category: "Beverage", isVeg: true, image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=200&h=200&fit=crop" },
    { id: 604, name: "Acai Bowl", price: 9.99, category: "Breakfast", isVeg: true, image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=200&h=200&fit=crop" },
    { id: 605, name: "Kale Salad", price: 10.99, category: "Salad", isVeg: true, image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=200&h=300&fit=crop" }
  ],
  7: [ // Pizza Paradise
    { id: 701, name: "Pepperoni Pizza", price: 14.99, category: "Main Course", isVeg: false, image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=200&h=200&fit=crop" },
    { id: 702, name: "Veggie Supreme", price: 13.99, category: "Main Course", isVeg: true, image: "https://images.unsplash.com/photo-1511689660979-10d2b1aada49?w=200&h=200&fit=crop" },
    { id: 703, name: "BBQ Chicken Pizza", price: 15.99, category: "Main Course", isVeg: false, image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200&h=200&fit=crop" },
    { id: 704, name: "Garlic Bread", price: 5.99, category: "Sides", isVeg: true, image: "https://images.unsplash.com/photo-1573140401552-3fab0b24f2af?w=200&h=200&fit=crop" },
    { id: 705, name: "Brownie", price: 4.99, category: "Dessert", isVeg: true, image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=200&h=200&fit=crop" }
  ],
  8: [ // Dragon Wok
    { id: 801, name: "Kung Pao Chicken", price: 12.99, category: "Main Course", isVeg: false, image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=200&h=200&fit=crop" },
    { id: 802, name: "Vegetable Chow Mein", price: 10.99, category: "Main Course", isVeg: true, image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=200&h=200&fit=crop" },
    { id: 803, name: "Spring Rolls", price: 6.99, category: "Appetizer", isVeg: true, image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=200&h=200&fit=crop" },
    { id: 804, name: "Fried Rice", price: 9.99, category: "Sides", isVeg: false, image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=200&h=200&fit=crop" },
    { id: 805, name: "Fortune Cookie", price: 1.99, category: "Dessert", isVeg: true, image: "https://images.unsplash.com/photo-1606312619070-d48b4ba7a6eb?w=200&h=200&fit=crop" }
  ],
  9: [ // Mediterranean Breeze
    { id: 901, name: "Lamb Gyro", price: 13.99, category: "Main Course", isVeg: false, image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=200&h=200&fit=crop" },
    { id: 902, name: "Falafel Wrap", price: 10.99, category: "Main Course", isVeg: true, image: "https://images.unsplash.com/photo-1593504049359-74330189a345?w=200&h=200&fit=crop" },
    { id: 903, name: "Hummus Platter", price: 8.99, category: "Appetizer", isVeg: true, image: "https://images.unsplash.com/photo-1605449278209-b0e9cc3e5321?w=200&h=200&fit=crop" },
    { id: 904, name: "Greek Salad", price: 9.99, category: "Salad", isVeg: true, image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=200&h=200&fit=crop" },
    { id: 905, name: "Baklava", price: 5.99, category: "Dessert", isVeg: true, image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=200&h=200&fit=crop" }
  ],
  10: [ // Thai Delight
    { id: 1001, name: "Pad Thai", price: 12.99, category: "Main Course", isVeg: false, image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=200&h=200&fit=crop" },
    { id: 1002, name: "Green Curry", price: 13.99, category: "Main Course", isVeg: true, image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=200&h=200&fit=crop" },
    { id: 1003, name: "Tom Yum Soup", price: 8.99, category: "Appetizer", isVeg: false, image: "https://images.unsplash.com/photo-1547928576-631d6dbd2c85?w=200&h=200&fit=crop" },
    { id: 1004, name: "Thai Iced Tea", price: 4.99, category: "Beverage", isVeg: true, image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=200&h=200&fit=crop" },
    { id: 1005, name: "Mango Sticky Rice", price: 6.99, category: "Dessert", isVeg: true, image: "https://images.unsplash.com/photo-1598084991519-c90900bc9df0?w=200&h=200&fit=crop" }
  ],
  11: [ // BBQ Nation
    { id: 1101, name: "Smoked Brisket", price: 18.99, category: "Main Course", isVeg: false, image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=200&h=200&fit=crop" },
    { id: 1102, name: "BBQ Ribs", price: 19.99, category: "Main Course", isVeg: false, image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=200&h=200&fit=crop" },
    { id: 1103, name: "Pulled Pork Sandwich", price: 14.99, category: "Main Course", isVeg: false, image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=200&h=200&fit=crop" },
    { id: 1104, name: "Coleslaw", price: 4.99, category: "Sides", isVeg: true, image: "https://images.unsplash.com/photo-1620158526143-9167c2d96f3d?w=200&h=200&fit=crop" },
    { id: 1105, name: "Apple Pie", price: 6.99, category: "Dessert", isVeg: true, image: "https://images.unsplash.com/photo-1535920527002-b35e96722eb9?w=200&h=200&fit=crop" }
  ],
  12: [ // Veggie Delight
    { id: 1201, name: "Veggie Pizza", price: 11.99, category: "Main Course", isVeg: true, image: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=200&h=200&fit=crop" },
    { id: 1202, name: "Veggie Burger", price: 9.99, category: "Main Course", isVeg: true, image: "https://images.unsplash.com/photo-1585238341710-4a10f6d5b90a?w=200&h=200&fit=crop" },
    { id: 1203, name: "Veggie Wrap", price: 8.99, category: "Main Course", isVeg: true, image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=200&h=200&fit=crop" },
    { id: 1204, name: "Sweet Potato Fries", price: 5.99, category: "Sides", isVeg: true, image: "https://images.unsplash.com/photo-1639744091981-5f1b040c84b7?w=200&h=200&fit=crop" },
    { id: 1205, name: "Fruit Salad", price: 6.99, category: "Dessert", isVeg: true, image: "https://images.unsplash.com/photo-1564093497595-593b96d80180?w=200&h=200&fit=crop" }
  ]
};

// PUBLIC_INTERFACE
export const promotionalBanners = [
  {
    id: 1,
    title: "50% Off on First Order",
    subtitle: "Use code: FIRST50",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&h=400&fit=crop",
    bgColor: "#10B981"
  },
  {
    id: 2,
    title: "Free Delivery on Orders Above $30",
    subtitle: "Limited time offer",
    image: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=1200&h=400&fit=crop",
    bgColor: "#374151"
  },
  {
    id: 3,
    title: "Weekend Special - Extra 20% Off",
    subtitle: "Valid on Saturdays and Sundays",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200&h=400&fit=crop",
    bgColor: "#EF4444"
  },
  {
    id: 4,
    title: "Order Now, Pay Later",
    subtitle: "Interest-free for 3 months",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=1200&h=400&fit=crop",
    bgColor: "#374151"
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
