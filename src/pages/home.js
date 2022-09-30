import React, { useState } from "react"
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import * as classes from '../css/home.module.css'
import '../css/global.css'

const HomePage = () => {

  const [isFocused, setIsFocused] = useState(false)

  const mouseOverHandler = () => {
    setIsFocused(true)
  }

  const mouseOutHandler = () => {
    setIsFocused(false)
  }

  return (
    <div className={classes.page}>
      <div className={`blurContainer ${isFocused && 'blur'}`}></div>
      <div className={classes.centerPiece}>
        <h1>Taylor Mills</h1>
        <h2>Software Engineer</h2>
        <div className={classes.icons}>
          <FaGithub size="2em" />
          <FaLinkedin size="2em" />
          <FaInstagram size="2em" />
        </div>
      </div>
      <div onMouseOver={mouseOverHandler} onMouseOut={mouseOutHandler} className={classes.linkContainer}>
        <AniLink swipe direction="right" to="/projects">Projects</AniLink>
      </div>
      <div onMouseOver={mouseOverHandler} onMouseOut={mouseOutHandler} className={classes.linkContainer}>
        <AniLink swipe direction="left" to="/experience">Experience</AniLink>
      </div>
      <div onMouseOver={mouseOverHandler} onMouseOut={mouseOutHandler} className={classes.linkContainer}>
        <AniLink swipe direction="right" to="/contact">Contact</AniLink>
      </div>
      <div onMouseOver={mouseOverHandler} onMouseOut={mouseOutHandler} className={classes.linkContainer}>
        <AniLink swipe direction="left" to="/about">About</AniLink>
      </div>
    </div>
  )
}

export default HomePage
