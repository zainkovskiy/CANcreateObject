import React, { useState } from 'react';
import { motion, AnimatePresence, AnimateSharedappartmentType } from 'framer-motion';

import { Dadata } from 'components/Dadata';
import { HandsAddress } from 'components/HandsAddress';

import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export function PlaceAll(props) {
  const { object, step, getAddress, currentList, clearCurrentList, address, newValue } = props;
  const [handsEnter, setHandsEnter] = useState(object.addressType);

  return (
    <>
      <span className='subtitle'>Адрес</span>
      <FormControlLabel
        control={<Switch
          name="addressType"
          onChange={(event) => { newValue(event), setHandsEnter(event.target.checked) }}
          checked={handsEnter}
        />}
        label="Ввести вручную"
        sx={{ width: 'fit-content' }}
      />
        {
          handsEnter ?
            <AnimatePresence exitBeforeEnter initial={false}>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ scale: 0, opacity: 0, }}
                transition={{ duration: 2 }}
              >
                <HandsAddress
                  object={object}
                  step={step}
                  getAddress={getAddress}
                  clearCurrentList={clearCurrentList}
                  currentList={currentList}
                  address={address}
                />
              </motion.div>
            </AnimatePresence>
            :
            <AnimatePresence exitBeforeEnter initial={false}>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ scale: 0, opacity: 0, }}
                transition={{ duration: 2 }}
              >
                <Dadata
                  step={step}
                  address={address}
                  object={object}
                />
              </motion.div>
            </AnimatePresence>
        }
    </>
  )
}
