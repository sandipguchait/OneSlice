import { useEffect } from 'react';

export const useTitle = ({ openFood, orders }) => {
  useEffect(() => {
    if(openFood) {
      document.title = openFood.name;
    } else {
      document.title = orders.length === 0 ? "OneSlice - What's For Dinner?" : `[${orders.length}] items in your cart!`
    }
  });
}