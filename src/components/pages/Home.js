import React from 'react'
import { Banner } from '../Home/Banner'
import { Footer } from '../Home/Footer'
import { NavBar } from '../Home/NavBar'
import { Projects } from '../Home/Projects'
import Visualize from '../sorting/Visualize'

export default function Home() {
  return (
    <>
      <NavBar />
      <Banner />
      <Projects />
      {/* <Visualize /> */}
      <Footer />
    </>
  )
}
