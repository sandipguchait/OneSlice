import React, { useState } from 'react';
import { GlobalStyle } from './Styles/GlobalStyle';
import { Navbar } from './Navbar/Navbar';
import { Banner } from './Banner/Banner';
import { Menu } from './Menu/Menu';
import { FoodDialog } from './FoodDialog/FoodDialog';
import { Order } from './Order/Order';


const App = () => {
  const [openFood, setOpenFood] = useState();
  const [orderToggle, setOrderToggle] = useState(false);

  return (
    <>
      <GlobalStyle/>
      <FoodDialog openFood={openFood} setOpenFood={setOpenFood}/>
      <Navbar setOrderToggle={setOrderToggle} orderToggle={orderToggle}/>
      { orderToggle ? <Order/> : null}
      <Banner/>
      <Menu setOpenFood={setOpenFood}/>
    </>
  );
}

export default App;
