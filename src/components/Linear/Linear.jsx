import React from "react";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export function Linear() {
  return (
      <Box sx={{ width: '100%' }}>
        <LinearProgress />
        <p className="text">Идет загрузка...</p>
      </Box>
  );
}