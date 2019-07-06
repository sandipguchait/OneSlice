import React from 'react';
import styled from 'styled-components';
import { ConfirmButton, DialogFooter, DialogContent } from '../FoodDialog/FoodDialog';


const OrderStyled = styled.div`
  position: fixed;
  right: 0px;
  top: 48px;
  width: 340px;
  height: calc(100% - 50px);
  background-color: white;
  z-index: 10;
  box-shadow: 4px 0px 5px 4px grey;
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
`;


export const Order = ({ orders }) => {
  return (
    <OrderStyled>
       { orders.length === 0 ? <OrderContent>
          Your Cart is empty
        </OrderContent> : 
        <OrderContent>{" "}
          <OrderContainer>
            Your Orders:
          </OrderContainer>{" "}
          {orders.map(order => (
            <OrderContainer>
              <OrderItem>
                {order.name}
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