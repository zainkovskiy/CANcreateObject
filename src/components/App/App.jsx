import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import './App.scss';

import { TypeRedux } from "containers/TypeContainer";
import { PlaceRedux } from 'containers/PlaceContainer';
import { CordsRedux } from 'containers/CordsContainer';
import { AboutRedux } from 'containers/AboutContainer';
import { AdditionRedux } from 'containers/AdditionContainer';
import { FinalPageRedux } from 'containers/FinalPageContainer';

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
        <Route path='/step4' element={<AdditionRedux />} />
        <Route path='/step5' element={<FinalPageRedux />} />
        <Route path="*" element={<div className='text'>page not found</div>} />
      </Routes>
    </>
  )
}
