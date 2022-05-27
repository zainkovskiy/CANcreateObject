import React, { forwardRef } from "react";

import { toggleValue } from 'lists/toggle';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

// export function ToggleGroupForm(props) {
//   const { value, onChange, name } = props;
//   return (
//     <ToggleButtonGroup
//       color="primary"
//       exclusive
//       fullWidth
//       size="small"
//       value={value}
//       onChange={onChange}
//     >
//       {
//         toggleValue[name].map((value, idx) =>
//           <ToggleButton key={idx} size="small" value={value}>{value}</ToggleButton>
//         )
//       }
//     </ToggleButtonGroup>
//   )
// }

export const ToggleGroupForm = forwardRef((props, ref) => {
  const { name, value, onChange } = props;
  return (
    <ToggleButtonGroup
      color="primary"
      exclusive
      fullWidth
      size="small"
      value={value}
      onChange={onChange}
    >
      {
        toggleValue[name].map((value, idx) =>
          <ToggleButton key={idx} size="small" value={value}>{value}</ToggleButton>
        )
      }
    </ToggleButtonGroup>
  )
})
