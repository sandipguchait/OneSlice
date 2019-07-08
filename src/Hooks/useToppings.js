import { useState } from 'react';

export const useToppings = currentToppings => {
  const [ toppings, setToppings ] = useState( currentToppings || getDefaultToppings());

  const checkedTopping = index => {
    const newToppings = [...toppings];
    newToppings[index].checked = !newToppings[index].checked;
    setToppings(newToppings)
  };
  return {
    checkedTopping,
    toppings,
    setToppings
  }
}

const toppingsList = [
  "Extra Cheese",
  "Pepperoni",
  "Sausage",
  "Onions",
  "Peppers",
  "Pineapple",
  "Ham",
  "Spinach",
  "Artichokes",
  "Mushrooms",
  "Anchovies"
];

export const getDefaultToppings = () => {
  return toppingsList.map(topping => ({
    name: topping,
    checked: false
  }))
};
