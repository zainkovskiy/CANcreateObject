import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import './App.scss';

import { TypeRedux } from "containers/TypeContainer";
import { PlaceRedux } from 'containers/PlaceContainer';
import { CordsRedux } from 'containers/CordsContainer';
import { AboutRedux } from 'containers/AboutContainer';
import { AdditionRedux } from 'containers/AdditionContainer';
import { FinalPageRedux } from 'containers/FinalPageContainer';
import { CheckRedux } from 'containers/CheckContainer';

export function App({ step }) {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(step)
  }, [step])
  return (
    <>
      <Routes>
        <Route path='/' element={<TypeRedux />} />
        <Route path='place' element={<PlaceRedux />} />
        {/* <Route path='/step2' element={<CordsRedux />} /> */}
        <Route path='about' element={<AboutRedux />} />
        <Route path='addition' element={<AdditionRedux />} />
        <Route path='final' element={<FinalPageRedux />} />
        <Route path='check' element={<CheckRedux />} />
        <Route path="*" element={<div className='text'>page not found</div>} />
      </Routes>
    </>
  )
}
