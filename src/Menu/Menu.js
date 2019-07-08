import React from 'react';
import styled from 'styled-components';
import { foods } from '../Data/FoodData';
import { Food, FoodGrid , FoodLabel } from './FoodGrid';
import { formatPrice } from '../Data/FoodData';


const MenuStyled = styled.div`
  height: 1000px;
  margin: 0px 20px 50px 20px;
`

export const Menu = ({ setOpenFood }) => {
  return (
    <MenuStyled>
      {Object.entries(foods).map(([sectionName, foods], i) => (
        <>
          <h1>{sectionName}</h1>
          <FoodGrid key={i}>
            {foods.map((food, i) => (
              <Food img={food.img} key={i} onClick={() => setOpenFood(food)}>
                <FoodLabel key={i}>
                <div>{food.name}</div>
                <div>{formatPrice(food.price)}</div>
                </FoodLabel>
              </Food>
            ))}
          </FoodGrid>
      </>
      ))}
    </MenuStyled>
  );
}