import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import './App.scss';

import { TypeRedux } from "containers/TypeContainer";
import { PlaceRedux } from 'containers/PlaceContainer';
import { CordsRedux } from 'containers/CordsContainer';
import { AboutRedux } from 'containers/AboutContainer';

export function App({ step }) {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(`step${step}`)
  }, [step])

  return (
    <>
      <Routes>
        <Route path='/step0' element={<TypeRedux />} />
        <Route path='/step1' element={<PlaceRedux />} />
        <Route path='/step2' element={<CordsRedux />} />
        <Route path='/step3' element={<AboutRedux />} />
        <Route path="*" element={<div>no object</div>} />
      </Routes>
    </>
  )
}
