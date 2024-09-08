const Dishes = [
    {
      id: 1,
      name: "Spaghetti Bolognese",
      image: "assets/images/1.jpg",
      category: "Main Course",
      label: "Hot",
      price: 12.99,
      description: "Classic Italian pasta dish with a rich, flavorful meat sauce.",
      comments: [
        { id: 1, rating: 4, comment: "Delicious and hearty meal!", author: "John Doe", date: "2024-09-01" },
        { id: 2, rating: 5, comment: "Best spaghetti I’ve ever had!", author: "Jane Smith", date: "2024-08-28" }
      ]
    },
    {
      id: 2,
      name: "Margherita Pizza",
      image: "assets/images/2.jpg",
      category: "Main Course",
      label: "Veg",
      price: 10.99,
      description: "A simple yet tasty pizza with fresh tomatoes, mozzarella, and basil.",
      comments: [
        { id: 1, rating: 5, comment: "So fresh and cheesy!", author: "Alice", date: "2024-08-27" },
        { id: 2, rating: 4, comment: "Good but could use more sauce.", author: "Bob", date: "2024-08-30" }
      ]
    },
    {
      id: 3,
      name: "Caesar Salad",
      image: "assets/images/3.png",
      category: "Appetizer",
      label: "Veg",
      price: 7.99,
      description: "Crisp romaine lettuce with Caesar dressing, croutons, and Parmesan.",
      comments: [
        { id: 1, rating: 4, comment: "Light and refreshing.", author: "Chris", date: "2024-08-25" },
        { id: 2, rating: 3, comment: "Too much dressing for my taste.", author: "David", date: "2024-08-29" }
      ]
    },
    {
      id: 4,
      name: "Chicken Tikka Masala",
      image: "assets/images/4.jpg",
      category: "Main Course",
      label: "Hot",
      price: 14.99,
      description: "A popular Indian dish made with marinated chicken in a spiced curry sauce.",
      comments: [
        { id: 1, rating: 5, comment: "Amazing flavors!", author: "Emma", date: "2024-09-02" },
        { id: 2, rating: 5, comment: "A must-try dish!", author: "Frank", date: "2024-09-01" }
      ]
    },
    {
      id: 5,
      name: "Cheeseburger",
      image: "assets/images/5.jpg",
      category: "Main Course",
      label: "Hot",
      price: 9.99,
      description: "Juicy beef patty with melted cheese, lettuce, tomato, and pickles.",
      comments: [
        { id: 1, rating: 5, comment: "The best burger in town!", author: "George", date: "2024-08-26" },
        { id: 2, rating: 4, comment: "Good, but a bit greasy.", author: "Helen", date: "2024-08-31" }
      ]
    },
    {
      id: 6,
      name: "Tacos al Pastor",
      image: "assets/images/6.jpeg",
      category: "Main Course",
      label: "Spicy",
      price: 11.99,
      description: "Mexican tacos filled with marinated pork, pineapple, and cilantro.",
      comments: [
        { id: 1, rating: 5, comment: "Authentic and flavorful!", author: "Ivy", date: "2024-08-29" },
        { id: 2, rating: 4, comment: "Great, but could use more spice.", author: "Jack", date: "2024-08-27" }
      ]
    },
    {
      id: 7,
      name: "Pad Thai",
      image: "assets/images/7.jpeg",
      category: "Main Course",
      label: "Veg",
      price: 12.49,
      description: "Stir-fried rice noodles with tofu, vegetables, and a tangy sauce.",
      comments: [
        { id: 1, rating: 4, comment: "Very tasty and filling.", author: "Karen", date: "2024-08-28" },
        { id: 2, rating: 3, comment: "Could use more peanuts.", author: "Leo", date: "2024-08-30" }
      ]
    },
    {
      id: 8,
      name: "Sushi Platter",
      image: "assets/images/8.jpeg",
      category: "Main Course",
      label: "Cold",
      price: 16.99,
      description: "A selection of fresh sushi and sashimi served with soy sauce and wasabi.",
      comments: [
        { id: 1, rating: 5, comment: "Fresh and delicious!", author: "Maya", date: "2024-08-24" },
        { id: 2, rating: 4, comment: "A bit pricey, but worth it.", author: "Nick", date: "2024-08-29" }
      ]
    },
    {
      id: 9,
      name: "French Onion Soup",
      image: "assets/images/9.jpeg",
      category: "Appetizer",
      label: "Veg",
      price: 6.99,
      description: "Rich onion soup topped with melted cheese and croutons.",
      comments: [
        { id: 1, rating: 4, comment: "Comforting and flavorful.", author: "Olivia", date: "2024-08-27" },
        { id: 2, rating: 3, comment: "A bit too salty for me.", author: "Paul", date: "2024-08-31" }
      ]
    },
    {
      id: 10,
      name: "Chocolate Lava Cake",
      image: "assets/images/sweet.jpeg",
      category: "Dessert",
      label: "Sweet",
      price: 8.99,
      description: "Warm chocolate cake with a gooey molten center, served with ice cream.",
      comments: [
        { id: 1, rating: 5, comment: "Heavenly dessert!", author: "Quinn", date: "2024-09-01" },
        { id: 2, rating: 5, comment: "Perfect for chocolate lovers.", author: "Rachel", date: "2024-09-02" }
      ]
    }
  ];
  
  export default Dishes