import React, { forwardRef } from "react";

import { TextField } from "@mui/material";

export const TextFieldForm = forwardRef((props, ref) => {
  return (
    <TextField
      ref={ref}
      autoComplete="off"
      size="small"
      fullWidth
      {...props}
      error={props.errors ? true : false}
      helperText={props.errors?.message ? props.errors.message : ''}
    />
  )
})