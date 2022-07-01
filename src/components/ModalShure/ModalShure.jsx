import React from 'react';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Button from "@mui/material/Button";

export function ModalShure({ yes, no }) {
  return (
    <>
      <DialogTitle>
        Вы уверены?
      </DialogTitle>
      <DialogActions>
        <Button
          variant="outlined"
          onClick={() => yes()}
        >
          Да
        </Button>
        <Button
          variant="contained"
          onClick={() => no()}
        >
          Нет
        </Button>
      </DialogActions>
    </>
  )
}