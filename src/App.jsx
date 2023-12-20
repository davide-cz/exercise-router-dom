import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Countries from './components/Countries'
import CountryCard from './components/CountryCard'
import CountriesLayout from './components/CountriesLayout'
import Country from './components/Country'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/countries' element={<CountriesLayout/>}/>
          <Route index element={<Countries/>}/>
          <Route path=':code' element={<Country/>}/>
        <Route/>
      </Routes>
    </>
  )
}

export default App
