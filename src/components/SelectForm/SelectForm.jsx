import React, { forwardRef, useRef   } from "react";

import { selectList } from 'lists/select';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

// export function SelectForm(props) {
//   const { label, value, name, onChange, inputRef, error, helperText } = props;
//   return (
//     <FormControl fullWidth size="small">
//       <InputLabel id="demo-simple-select-label">{label}</InputLabel>
//       <Select
//         label={label}
//         labelId="demo-simple-select-label"
//         id="demo-simple-select"
//         value={value}
//         onChange={onChange}
//         inputRef={inputRef}
//         size='small'
//         error={error}
//         helperText={helperText}
//       >
//         {
//           selectList[name].map((item, idx) => <MenuItem key={idx} value={item}>{item}</MenuItem>)
//         }
//       </Select>
//     </FormControl>
//   )
// }

export const SelectForm = forwardRef((props, ref) => {
  return (
    <FormControl fullWidth size="small">
      <InputLabel id="demo-simple-select-label">{ props.label }</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        size='small'
        {...props}
      >
        {
          selectList[props.name].map((item, idx) => <MenuItem key={idx} value={item}>{item}</MenuItem>)
        }
      </Select>
    </FormControl>
  )
})

