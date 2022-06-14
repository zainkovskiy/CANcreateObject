import React from 'react';
import { Controller } from 'react-hook-form';

import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

const styleLabel = {
  fontFamily: "Montserrat",
  fontSize: 12,
  color: 'grey',
  cursor: 'pointer',
}

export function FormCheckbox({ control, name, label }) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) =>
        <FormControlLabel
          control={
            <Checkbox
              {...field}
              checked={field.value}
            />}
          label={label}
        />
      }
    />

  )
}