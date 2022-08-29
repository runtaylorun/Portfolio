import * as React from "react"
import logo from '../images/7218.jpg'
import NavBar from '../components/NavBar'
import IconBar from '../components/IconBar'
import * as classes from '../css/index.module.css'

const HomePage = () => {
  return (
    <>
      <NavBar />
      <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '90vh' }}>
        <img src={logo} className={classes.roundedImage} alt='self-portrait' />
        <div>
          <h2 style={{ fontSize: '48px', marginBottom: 0, textAlign: 'center' }}>Hey There!</h2>
          <p>My name is Taylor and welcome to my portfolio.</p>
        </div>
        <IconBar />
      </main>
    </>
  )
}

export default HomePage
