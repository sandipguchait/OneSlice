import React from 'react';
import styled from 'styled-components';
import { ConfirmButton, DialogFooter, DialogContent } from '../FoodDialog/FoodDialog';
import { formatPrice } from '../Data/FoodData';
import { getPrice } from '../FoodDialog/FoodDialog';


const OrderStyled = styled.div`
  position: fixed;
  right: 0px;
  top: 48px;
  width: 340px;
  height: calc(100% - 50px);
  background-color: white;
  z-index: 10;
  box-shadow: 4px 0px 5px 4px grey;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const OrderContent = styled(DialogContent)`
  padding: 20px;
  height: calc(100% - 100px)
`;

const OrderContainer = styled.div`
  padding: 10px 0px;
  border-bottom: 1px solid grey;
`;

const OrderItem = styled.div`
  padding: 10px 0px;
  display: grid;
  grid-template-columns: 20px 150px 20px 60px;
  justify-content: space-between;
`;

const DetailItem = styled.div`
  color: grey;
  font-size: 10px;
`


export const Order = ({ orders }) => {
  
  const subTotal = orders.reduce((total, currentPrice) => {
    return total = total + getPrice(currentPrice);
  }, 0)

  const Tax = subTotal * 0.07 ;
  const Total = subTotal + Tax ;

  return (
    <OrderStyled>
       { orders.length === 0 ? <OrderContent>
          Your Cart is empty
        </OrderContent> : 
        <OrderContent>{" "}
          <OrderContainer>
            <strong>Your Order List</strong>
          </OrderContainer>{" "}
          {orders.map((order, i) => (
            <OrderContainer key={i}>
              <OrderItem>
                <div>{order.quantity}</div>
                <div>{order.name}</div>
                <div>{formatPrice(getPrice(order))}</div>
              </OrderItem>
              <DetailItem>
                {order.toppings
                .filter(item => item.checked)
                .map(topping => topping.name)
                .join(", ")
                } {", "}
                {order.drinks
                .filter(item => item.checked)
                .map(drink => drink.name)
                .join(", ")
                }
              </DetailItem>
            </OrderContainer>
          ))}
          <OrderContainer>
            <OrderItem>
              <div />
              <div>Sub-Total</div>
              <div>{formatPrice(subTotal)}</div>
            </OrderItem>
            <OrderItem>
              <div />
              <div>VAT</div>
              <div>{formatPrice(Tax)}</div>
            </OrderItem>
            <OrderItem>
              <div />
              <div>Total</div>
              <div>{formatPrice(Total)}</div>
            </OrderItem>
          </OrderContainer>
        </OrderContent> }
        <DialogFooter>
          <ConfirmButton>
            CheckOut
          </ConfirmButton>
        </DialogFooter>
    </OrderStyled>
  )
}