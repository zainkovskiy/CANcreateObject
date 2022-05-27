import React from "react";

import { TextField } from "@mui/material";

export function TextFieldForm(props) {
  const { label, params, error, helperText, disabled } = props;
  return (
    <TextField
      autoComplete="off"
      label={label}
      size="small"
      fullWidth
      {...params}
      disabled={disabled}
      error={error}
      helperText={helperText}
    />
  )
}