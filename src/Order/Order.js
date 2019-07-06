import React from 'react';
import styled from 'styled-components';
import { ConfirmButton, DialogFooter, DialogContent } from '../FoodDialog/FoodDialog';
import { formatPrice } from '../Data/FoodData';

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


export const Order = ({ orders }) => {
  return (
    <OrderStyled>
       { orders.length === 0 ? <OrderContent>
          Your Cart is empty
        </OrderContent> : 
        <OrderContent>{" "}
          <OrderContainer>
            <strong>Your Order List</strong>
          </OrderContainer>{" "}
          {orders.map(order => (
            <OrderContainer>
              <OrderItem>
                <div>1</div>
                <div>{order.name}</div>
                <div>{formatPrice(order.price)}</div>
              </OrderItem>
            </OrderContainer>
          ))}
        </OrderContent> }
        <DialogFooter>
          <ConfirmButton>
            CheckOut
          </ConfirmButton>
        </DialogFooter>
    </OrderStyled>
  )
}