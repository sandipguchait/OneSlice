import { useState } from 'react';

export const useDrinks = selectedDrink => {
  const [ drinks, setDrink ] = useState( selectedDrink || getDefaultToppings());

  const checkedDrink = index => {
    const newDrink = [...drinks];
    newDrink[index].checked = !newDrink[index].checked;
    setDrink(newDrink)
  };
  return {
    checkedDrink,
    drinks,
    setDrink
  }
}

const DrinkList = [
  "Coca-Cola",
  "Sprite",
  "Red-Beer",
  "7UP",
  "RedBull Drink"
];

export const getDefaultToppings = () => {
  return DrinkList.map(drink => ({
    name: drink,
    checked: false
  }))
};
