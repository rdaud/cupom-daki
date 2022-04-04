import React from 'react';
import HomePage from './Pages/HomePage/'
import { Route, Routes, Navigate } from 'react-router-dom'

export const RoutesTotal = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/*" render={() => <Navigate to="/"/>} element={<HomePage />} />
    </Routes>

  )
}
