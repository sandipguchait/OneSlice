import { useState } from 'react';

export const useToggleHook = () => {
  const [orderToggle, setOrderToggle] = useState();
  return {
    orderToggle,
    setOrderToggle
  }
}