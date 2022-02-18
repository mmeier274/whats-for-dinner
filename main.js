var mains = [
  "Pan Fried In-House Spiced Sirloin Steak with Pepper-Mill Gravy,",
  "Mexican Spiced Fried Chicken Taco Salad",
  "Made from scratch Meat-Sweat-Pizza",
  "Five-Cheese Chili-Mac",
  "Korean-Kansas City BBQ Pork Skewers",
  "Pterodactyl Volcano Heat Wings",
  "Mom-Style Cheesy Potato Bacon Soup",
  "Seven-Layered Italian Casserole",
];
var sides = [
  "Rosemary Fry Kebobs",
  "Cinnamon-Sugar Maple-Butter Sweet Potato",
  "Cayanne-Dusted Buffalo Chips",
  "Brown-Sugar Bacon Onion Baked Beans",
  "Deep-Fried Pickles",
  "Sweet-Street Fire Roasted Corn",
  "Lemon-Parmesan Roasted Broccoli",
  "Tropical-Paradiso Fruit-Salad",
];
var dessert = [
  "Farm-Fresh Jumbo Carrot-Cake",
  "Deep-Fried Oreo Sundae",
  "Root-Beer Mousse",
  "Made-To-Order Geletin Cake",
  "Deep-Fried Apple-Menagerie Hand-Pie",
  "Fresh-Baked Chocolate-Chip Alamode",
  "Peanut-Butter-Jelly Cannoli",
  "Chocolate CheeseCake Center Brownies",
];
var cookBtn = document.querySelector('.homemade-button');
var siBtn = document.querySelector('#si');
var maiBtn = document.querySelector('#mai');
var daiBtn = document.querySelector('#dai');
var potImg = document.querySelector('.boil-point')

var bneAppTite = document.querySelector('.meal-time');
cookBtn.addEventListener('click', carefulItsHot);


function carefulItsHot() {
  potImg.classList.add("hidden")
  if (document.getElementById('si').checked) {
    bneAppTite.innerText = sides[getRandomIndex(sides)];
  } else if (document.getElementById('mai').checked) {
    bneAppTite.innerText = mains[getRandomIndex(mains)];
  } else if (document.getElementById('dai').checked) {
    bneAppTite.innerText = dessert[getRandomIndex(dessert)];
  };
};

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
};
