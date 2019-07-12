import { useState } from 'react';

export const useCheckoutDialog = () => {
  const [OpenCheckoutDialog, setOpenCheckoutDialog] = useState();
  return {
    OpenCheckoutDialog,
    setOpenCheckoutDialog
  };
}