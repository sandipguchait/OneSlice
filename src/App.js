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


const App = () => {
  const openFood = useOpenFood();
  const Toggle = useToggleHook(false);
  const orders = useOrders();
  const auth = useAuthentication();
  useTitle({ ...openFood, ...orders });
  return (
    <>
      <GlobalStyle/>
      <FoodDialog {...openFood} {...orders} {...Toggle}/>
      <Navbar {...Toggle} {...orders} {...auth} />
      { Toggle.orderToggle ? <Order {...orders} {...openFood} {...Toggle} {...auth} /> : null}
      <Banner/>
      <Menu {...openFood}/>
    </>
  );
}

export default App;
