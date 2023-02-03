import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import ProductsDetails from './components/ProductsDetails'
import Login from './components/Login'
import Purchases from './components/Purchases'
import AppNavbar from './components/AppNavbar'
import LoadingScreen from './components/LoadingScreen'
import { useSelector } from 'react-redux'
import ProtectedRoutes from './components/ProtectedRoutes'

function App() {

  const isLoading = useSelector(state => state.isLoading);

  return (
    <HashRouter>
      <AppNavbar />
      {isLoading && <LoadingScreen />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductsDetails />} />
        <Route path='/login' element={<Login />} />

        <Route element={<ProtectedRoutes/>}>
          <Route path='/purchases' element={<Purchases />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
