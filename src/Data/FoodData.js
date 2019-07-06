export const foodItems = [
  {
    name: 'Cheese Pizza',
    img: '/img/pizza.png',
    section: 'Pizza',
    price: 30
  },
  {
    name: 'Pepperoni Pizza',
    img: '/img/pizza2.jpeg',
    section: 'Pizza',
    price: 40
  },
  {
    name: "Chicken Pizza",
    img: "/img/chicken-pizza.jpeg",
    section: "Pizza",
    price: 30
  },
  {
    img: "/img/healthy-pizza.jpeg",
    name: "Veggie Pizza",
    section: "Pizza",
    price: 40
  },
  {
    img: "/img/burger.jpeg",
    name: "Burger",
    section: "Sandwich",
    price: 30
  },
  { img: "/img/gyro.jpeg", name: "Gyro", section: "Sandwich", price: 27 },
  {
    img: "/img/sandwich.jpeg",
    name: "Shrimp PoBoy",
    section: "Sandwich",
    price: 20
  },
  {
    img: "/img/fries.jpeg",
    name: "Fries",
    section: "Sides",
    price: 15
  }
];

export const formatPrice = (price) => {
  return (
    price.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    })
  )
}

export const foods = foodItems.reduce((res, food) => {
  if(!res[food.section]) {
    res[food.section] = [];
  }
  res[food.section].push(food);
  return res;
}, {})

