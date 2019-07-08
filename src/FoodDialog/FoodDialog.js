import React from 'react';
import styled from 'styled-components';
import { FoodLabel } from '../Menu/FoodGrid';
import { pizzaRed } from '../Styles/colors';
import { Title } from '../Styles/title';
import { formatPrice } from '../Data/FoodData';
import { QuantityInput } from './QuantityInput'; 
import { useQuantity } from '../Hooks/useQuantity';
import { Toppings } from './Toppings';
import { useToppings } from '../Hooks/useToppings';
import { Drinks } from './Drinks';
import { useDrinks } from '../Hooks/useDrinks';

const Dialog = styled.div`
  width: 500px;
  background-color: white;
  position: fixed;
  top: 75px;
  z-index: 5;
  max-height: calc(100% - 100px);
  left: calc(50% - 250px);
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 300px;
    align: center;
    left: 10%
  }
`
const DialogShadow = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0px;
  background-color: black;
  opacity: 0.7;
  z-index: 4;
`
const DialogBanner = styled.div`
  min-height: 200px;
  margin-bottom: 20px;
  ${({ img }) => `background-image: url(${img});`}
  background-position: center;
  background-size: cover;
`;

const DialogBannerName = styled(FoodLabel)`
  top: 100px;
  font-size: 30px;
  padding: 5px 40px;
`
export const DialogContent = styled.div`
  overflow: auto;
  min-height: 100px;
  padding: 0px 40px;
  padding-bottom: 80px;
`;

export const DialogFooter = styled.div`
  box-shadow: 0px -2px 10px 0px grey;
  height: 60px;
  display: flex;
  justify-content: center;
`;

export const ConfirmButton = styled(Title)`
  margin: 10px;
  height: 20px;
  color: white;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  width: 200px;
  cursor: pointer;
  background-color: ${pizzaRed};
`;

const pricePerTopping = 0.50;
const pricePerDrink = 1.5;

//Calculating price Helper
export const getPrice = order => {
  const toppingPrice = order.toppings && order.toppings.filter(item => item.checked).length * pricePerTopping;
  const drinksPrice = order.drinks && order.drinks.filter(item => item.checked).length * pricePerDrink;
  return order.quantity * (order.price + toppingPrice + drinksPrice);
};

const hasToppings = food => {
  return food.section === 'Pizza';
};


export const FoodDialog = ({ openFood, setOpenFood, setOrders, orders,  setOrderToggle, orderToggle }) => {

  const quantity = useQuantity(openFood && openFood.quantity);
  const toppings = useToppings(openFood && openFood.toppings);
  const drinks = useDrinks(openFood && openFood.drinks);
  const isEditing = (openFood && openFood.index > -1);

  const closeModal = () => {
    setOpenFood();
    quantity.setValue(1); 
  };
  
  if(!openFood) return null;
  const order = {
    ...openFood,
    quantity: quantity.value,
    toppings: toppings.toppings,
    drinks: drinks.drinks
  };

  const editOrder = () => {
    const newOrders = [...orders];
    newOrders[openFood.index] = order;
    setOrders(newOrders);
    closeModal();
    setOrderToggle(!orderToggle);
  };

  const addToOrder = () => {
    setOrders([...orders, order]);
    closeModal();
  };

  return openFood ? (
    <>
      <DialogShadow onClick={closeModal}/>
      <Dialog>
        <DialogBanner img={openFood.img}>
          <DialogBannerName>{openFood.name}</DialogBannerName>
        </DialogBanner>
        <DialogContent>
          <QuantityInput quantity={quantity} />
          { hasToppings(openFood) && <>
            <h3>Would you like Topping's?</h3>
            <Toppings {...toppings} />
            <h3>Would you like Drink's?</h3>
            <Drinks {...drinks} />
          </>}
        </DialogContent>
        <DialogFooter>
          <ConfirmButton onClick={ isEditing ? editOrder : addToOrder}>
            {isEditing ? "Update Cart" : "Add To Cart"}: {formatPrice(getPrice(order))}
          </ConfirmButton>
        </DialogFooter>
      </Dialog>
    </>
  ) : null
}