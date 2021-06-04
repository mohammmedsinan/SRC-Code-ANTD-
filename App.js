import React from 'react'
import HeaderApp from './Components/HeaderApp'
import "./App.css"
import SectionOne from './Components/SectionOne'
import SectionTwo from './Components/SectionTwo'
import SectionThree from './Components/SectionThree'
import SectionFour from './Components/SectionFour'
import SectionFive from './Components/SectionFive'
export default function App() {
  return (
    <div>
      <HeaderApp />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
    </div>
  )
}
