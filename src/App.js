import React from 'react';
import { GlobalStyle } from './Styles/GlobalStyle';
import { Navbar } from './Navbar/Navbar';
import { Banner } from './Banner/Banner';
import { Menu } from './Menu/Menu';
import { FoodDialog } from './FoodDialog/FoodDialog';
import { Order } from './Order/Order';
import { useOpenFood } from './Hooks/useOpenFood';
import { useToggleHook } from './Hooks/useToggleHook';
import { useOrders } from './Hooks/useOrder';
import { useTitle } from './Hooks/useTitle';
import { useAuthentication } from './Hooks/useAuthentication';
import { CheckOutDialog } from './checkOutDialog/CheckOutDialog';
import { useCheckoutDialog } from './Hooks/useCheckoutDialog';

const App = () => {
  const openFood = useOpenFood();
  const Toggle = useToggleHook(false);
  const orders = useOrders();
  const auth = useAuthentication();
  const CheckoutDialog = useCheckoutDialog();
  useTitle({ ...openFood, ...orders });


  return (
    <>
      <GlobalStyle/>
      <CheckOutDialog {...CheckoutDialog}/>
      <FoodDialog {...openFood} {...orders} {...Toggle}/>
      <Navbar {...Toggle} {...orders} {...auth} />
      { Toggle.orderToggle ? <Order {...orders} {...openFood} {...Toggle} {...auth} {...CheckoutDialog} /> : null}
      <Banner/>
      <Menu {...openFood}/>
    </>
  );
}

export default App;
