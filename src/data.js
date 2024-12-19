const menu = {
  appetizers: [
    { id: 1, name: "Iceberg Wedge Salad with House Cured Bacon – tomato salsa gorgonzola", price: 7.5 },
    { id: 2, name: "Sautéed Shredded Brussels Sprouts – bacon hazelnuts gorgonzola", price: 6.95 },
    { id: 3, name: "Kale Salad – parmesan crisp corn radish garlic-lemon vinaigrette", price: 7.5 },
    { id: 4, name: "Pecan Crusted Utah Goat Cheese with Basil-Mint Pesto - grilled tomato salsa crostini", price: 6.95 },
    { id: 5, name: "Chicken and Cabbage Eggrolls hot & sour dipping sauce", price: 6.95 },
  ],
  entrees: [
    { id: 1, name: "Farfalle Pasta with Braised Pork in Tomato Cream – capers butternut squash kale", price: 12.95 },
    { id: 2, name: "Stout Braised Bratwurst - horseradish mashed potatoes roasted root veggies grilled onion", price: 13.95 },
    { id: 3, name: "Salmon & Crispy Tofu in Yellow Curry Sauce – vegetable sauté golden raisin chutney", price: 15.95 },
    { id: 4, name: "Sesame Shrimp – udon noodles ramen broth shiitake mushrooms bean sprouts scallions", price: 13.95 },
  ],
  sandwiches: [
    { id: 1, name: "Turkey & Avocado – with tomato", price: 9.25 },
    { id: 2, name: "Pub Club – turkey, bacon. lettuce, tomato", price: 9.25 },
    { id: 3, name: "Rare Roast Beef & Swiss – sweet-hot mustard, lettuce, red onion", price: 9.25 },
    { id: 4, name: "Veggie – pepper jack, avocado, sprout, tomato", price: 9.25 },
    { id: 5, name: "Southwest Chicken Breast Grilled Onion, Poblano Pepper, Tomato, Lettuce, Jack Cheese", price: 9.5 },
    { id: 6, name: "Portobello Fresh Mozzarella Caramelized Onion, Roasted Pepper, Tomato, Field Greens, Basil Aioli", price: 9.5 },
    { id: 7, name: "Chipotle BBQ Pork Sandwich with Pickled Jalapeño Slaw", price: 9.5 },
    { id: 8, name: "Bacon Burger* Swiss, Lettuce, Tomato", price: 9.25 },
    { id: 9, name: "Mexi Burger* Pepper Relish, Pepper Jack, Tomato, Lettuce, Guacamole", price: 9.25 },
    { id: 10, name: "Herb Marinated Top Sirloin* Crimini Mushrooms, Caramelized Onion, Gorgonzola, Basil Aioli, Served Open Faced on Focaccia", price: 10.95 },
    { id: 11, name: "Roast Beef with Ancho Au Jus Jack Cheese, Grilled Onions, Served on Crumb Bros. Baguette", price: 9.75 },
    { id: 12, name: "Blackened Catfish Creole Peppers & Onions, Fresh Herb Aioli, Served on house made Sourdough", price: 9.75 },
  ],
  soupsAndSalads: [
    { id: 1, name: "French Onion or Soup of the Day", price: 4.95 },
    { id: 2, name: "French Onion or Soup of the Day Combos with small green salad, fresh fruit or house pasta", price: 7.25 },
    { id: 3, name: "French Onion or Soup of the Day Combos with half pasta of the day", price: 8.75 },
  ],
  fajitas: [
    { id: 1, name: "Chicken Onions, Poblano and Bell Peppers, Guacamole, Two Salsas", price: 10.95 },
    { id: 2, name: "Sirloin Steak, Onions, Poblano and Bell Peppers, Carrots, Onion, Guacamole, Two Salsas", price: 10.95 },
  ],
  tacos: [
    { id: 1, name: "Beer Battered Fish with Jalapeño Remoulade, Roasted Salsa, Cabbage", price: 9.95 },
    { id: 2, name: "Carne Asada (marinated sirloin) with Guacamole, Tomatillo Salsa", price: 9.95 },
    { id: 3, name: "Citrus Marinated Chicken with Guacamole, Tomatillo Salsa", price: 9.95 },
    { id: 4, name: "Grilled Veggie with Zucchini, Yellow Squash, Bell Peppers, Onion, Guacamole, Tomatillo Salsa", price: 9.95 },
  ],
  enchiladas: [
    { id: 1, name: "Beef Enchiladas", price: 8.5 },
    { id: 2, name: "Chicken Enchiladas", price: 9.95 },
    { id: 3, name: "Cheese Enchiladas", price: 9.95 },
    { id: 4, name: "Veggie Enchiladas", price: 9.95 },
    { id: 5, name: "Chili Relleno Stuffed with Jack Cheese & Corn Glazed Yam, Chayote Squash Succotash, Red Chili Sauce", price: 9.95 },
    { id: 6, name: "Pepita Crusted Salmon with Chipotle Glaze – chevre whipped yams, jicama slaw, tomatillo sauce", price: 10.95 },
  ],
  quiche: [
    { id: 1, name: "Bacon, Swiss, Mushroom, Zucchini and Mushroom Quiche Choice of Fresh Fruit or Green Salad", price: 8.95 },
  ],
  greenSalads: [
    { id: 1, name: "Grilled Red Trout Lentils, Tomatoes, Cukes, Green Beans, Red Bells, Almonds, Sundried Tomato Vinaigrette", price: 10.95 },
    { id: 2, name: "Smoked Turkey Cheese Tortellini, Bacon, Tomato, Cucumber, Egg, Black Bean-Corn Salsa, Avocado", price: 9.95 },
    { id: 3, name: "Asian Grilled Chicken Snow Peas, Carrot Slaw, Red Bells, Water Chestnut, Peanuts, Baby Corn, Cilantro, Cukes, Spicy Peanut Dressing", price: 10.5 },
    { id: 4, name: "Southwest Grilled Chicken Tomato, Guacamole, pepitas, Jicama, Corn & Black Bean Salsa, Orange Wedges, Spicy Citrus Vinaigrette", price: 10.5 },
    { id: 5, name: "Mediterranean Italian Sausage, Artichoke Hearts, Green Beans, Roma Tomato, Kalamatas, Red Onion, Cucumber, Croutons, Parmesan, Fresh Mozzarella, Gorgonzola Vinaigrette", price: 9.95 },
    { id: 6, name: "Grilled Salmon Artichoke tapenade, shredded kale, corn, radish, parmesan crisps", price: 11.5 },
  ],
};

module.exports = menu;
