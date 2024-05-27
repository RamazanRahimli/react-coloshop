import React from 'react'
import Header from '../../components/Header/Header'
import SectionFour from '../../components/Sections/SectionFour/SectionFour'
import SectionOne from '../../components/Sections/SectionOne/SectionOne'
import SectionProduct from '../../components/Sections/SectionProduct/SectionProduct'
import SectionTwo from '../../components/Sections/SectionTwo/SectionTwo'

const Home = () => {
  return (
    <div>
        <Header/>
        <SectionOne/>
        <SectionTwo/>
        <SectionProduct/>
        <SectionFour/>
    </div>
  )
}

export default Home