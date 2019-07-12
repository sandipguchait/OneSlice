import React from 'react';
import styled from 'styled-components';
import { pizzaRed } from '../Styles/colors';
import { Title } from '../Styles/title';
import { ConfirmButton } from '../FoodDialog/FoodDialog';


const Navbarstyled = styled.div`
   background-color: ${pizzaRed};
   padding: 10px;
   position: fixed;
   width: 100%;
   z-index: 999;
   display: flex;
   display: grid;
   grid-template-columns: 1fr auto 120px;
   gap: 20px;
`
const Logo = styled(Title)`
  font-size: 20px;
  color: white;
  text-shadow: 1px 1px 4px #380502;
`;

const CartButton = styled(ConfirmButton)`
  margin: 0px;
  height: auto;
  color: ${pizzaRed};
  border-radius: 5px;
  padding: 3px;
  text-align: center;
  width: 60px;
  cursor: pointer;
  background-color: white;
`;

const UserStatus = styled.div`
  color: white;
  font-size: 12px;
  margin-right: 30px;
`;
const LoginButton = styled.span`
  cursor: pointer;
`

export function Navbar({ setOrderToggle, orderToggle, orders, login, loggedIn, logOut }) {

   const orderCartToggle = () => {
    setOrderToggle(!orderToggle)
  };

  return (
    <Navbarstyled>
      <Logo>
        OneSlice <span role="img" aria-label="pizza logo">🍕</span>
      </Logo>
      <CartButton onClick={orderCartToggle}>
        {orderToggle ? <>❌</> : <>🛒{orders.length > 0 ? <>{orders.length}</> : null }</>}
      </CartButton>
      <UserStatus>
        {loggedIn !== "loading" ? (
            <>
              {loggedIn ? (
                <LoginButton onClick={logOut}> Log out </LoginButton>
              ) : (
                <LoginButton onClick={login}> Log in / Sign up </LoginButton>
              )}
            </>
          ) : (
            "loading..."
          )}
      </UserStatus>
    </Navbarstyled>
  )
}