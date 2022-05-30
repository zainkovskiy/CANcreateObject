import React, { forwardRef } from "react";

import { toggleValue } from 'lists/toggle';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export const ToggleGroupForm = forwardRef((props, ref) => {
  return (
    <ToggleButtonGroup
      color="primary"
      exclusive
      fullWidth
      size="small"
      {...props}
    >
      {
        toggleValue[props.name].map((value, idx) =>
          <ToggleButton key={idx} size="small" value={value}>{value}</ToggleButton>
        )
      }
    </ToggleButtonGroup>
  )
})
