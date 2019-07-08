import React from 'react';
import { ToppingGrid } from './Toppings';
import { ToppingCheckbox } from './Toppings';
import { CheckBoxLabel } from './Toppings';

export const Drinks = ({ drinks, checkedDrink }) => {
  return (
      <ToppingGrid>
      {drinks && drinks.map((drink, i) => (
        <CheckBoxLabel key={i}>
        <ToppingCheckbox 
          type="checkbox" 
          checked={drink.checked}
          value={drink.checked}
          onChange={() => checkedDrink(i)} 
        />
        {drink.name}
      </CheckBoxLabel>))}
    </ToppingGrid>
  )
}