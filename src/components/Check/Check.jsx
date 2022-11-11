import React, { useState } from 'react';


import Button from "@mui/material/Button";
import { TextField } from "@mui/material";


export function Check({ requestCheck, load }) {
  const [float, setFloat] = useState('');
  return (
    <>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <TextField
          label='Номер квартиры'
          autoComplete="off"
          size="small"
          name='float'
          fullWidth
          value={float}
          onChange={(event) => setFloat(event.target.value)}
          disabled={load}
        />
        <Button
          variant="contained"
          disabled={float.length === 0 || load}
          onClick={() => requestCheck(float)}
        >
          поиск
        </Button>
      </div>
    </>
  )
} 