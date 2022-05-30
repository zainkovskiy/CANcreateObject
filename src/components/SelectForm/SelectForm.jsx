import React from "react";
import { useController } from "react-hook-form";

import { selectList } from 'lists/select';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export function SelectForm(props) {
  const { control, name, label, error, defaultValue } = props;
  const {
    field: { ref, ...inputProps },
  } = useController({
    name,
    control,
    rules: { required: 'Поле обязательно к заполнению' },
    defaultValue: defaultValue,
  });
  return (
    <FormControl fullWidth size="small">
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        label={label}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        size='small'
        {...inputProps}
        inputRef={ref}
        error={error}
      >
        {
          selectList[name].map((item, idx) => <MenuItem key={idx} value={item}>{item}</MenuItem>)
        }
      </Select>
    </FormControl>
  )
}
