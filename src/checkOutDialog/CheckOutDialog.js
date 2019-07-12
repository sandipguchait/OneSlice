import React from 'react';
import styled from 'styled-components';
import { Dialog, DialogContent, DialogShadow, DialogFooter, ConfirmButton} from '../FoodDialog/FoodDialog';

const NewDialogContent = styled(DialogContent)`
  text-align: center;
`;

export const CheckOutDialog = ({ OpenCheckoutDialog, setOpenCheckoutDialog}) => {
  return OpenCheckoutDialog ? (
    <>
      <DialogShadow onClick={() => setOpenCheckoutDialog(false)}/>
      <Dialog>
        <NewDialogContent>
          <h2><span role="img" aria-label="tick">✅</span> Hurray!, Order Placed Successfully.</h2>
          <p>Check your email for order confirmation. Thank you for choosing OneSlice.</p>
        </NewDialogContent>
        <DialogFooter>
          <ConfirmButton onClick={
            () => setOpenCheckoutDialog(false)
          }>
            Place Another Order
          </ConfirmButton>
        </DialogFooter>
      </Dialog>
    </>
  ) : null
}