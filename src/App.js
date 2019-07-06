import React, { useState } from 'react';
import { GlobalStyle } from './Styles/GlobalStyle';
import { Navbar } from './Navbar/Navbar';
import { Banner } from './Banner/Banner';
import { Menu } from './Menu/Menu';
import { FoodDialog } from './FoodDialog/FoodDialog';
import { Order } from './Order/Order';
import { useOpenFood } from './Hooks/useOpenFood';
import { useToggleHook } from './Hooks/useToggleHook';
import { useOrders } from './Hooks/useOrder';


const App = () => {
  const openFood = useOpenFood();
  const Toggle = useToggleHook(false);
  const orders = useOrders();
  return (
    <>
      <GlobalStyle/>
      <FoodDialog {...openFood} {...orders} {...Toggle}/>
      <Navbar {...Toggle}/>
      { Toggle.orderToggle ? <Order {...orders}/> : null}
      <Banner/>
      <Menu {...openFood}/>
    </>
  );
}

export default App;
