import React from 'react';
import styled from 'styled-components';

const ToppingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ToppingCheckbox = styled.input`
  margin-right: 10px;
  cursor: pointer;
`;

const CheckBoxLabel = styled.label`
  cursor: pointer;
`
export const Toppings = ({ toppings, checkedTopping }) => {
  return (
    <ToppingGrid>
      {toppings.map((topping, i) => (<CheckBoxLabel>
        <ToppingCheckbox 
          type="checkbox" 
          checked={topping.checked}
          onClick={() => checkedTopping(i)} 
        />
        {topping.name}
      </CheckBoxLabel>))}
    </ToppingGrid>
  )
}