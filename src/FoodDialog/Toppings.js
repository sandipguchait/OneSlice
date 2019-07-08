import React from 'react';
import styled from 'styled-components';

export const ToppingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ToppingCheckbox = styled.input`
  margin-right: 10px;
  cursor: pointer;
`;

export const CheckBoxLabel = styled.label`
  cursor: pointer;
`
export const Toppings = ({ toppings, checkedTopping }) => {
  return (
    <ToppingGrid>
      {toppings && toppings.map((topping, i) => (
        <CheckBoxLabel key={i}>
        <ToppingCheckbox 
          type="checkbox" 
          checked={topping.checked}
          value={topping.checked}
          onChange={() => checkedTopping(i)} 
        />
        {topping.name}
      </CheckBoxLabel>))}
    </ToppingGrid>
  )
}