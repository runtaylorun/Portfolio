import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { FaArrowLeft } from 'react-icons/fa'
import * as classes from '../css/experience.module.css'
import '../css/global.css'

const ExperiencePage = () => {
    return (
        <div className={classes.page}>
            <AniLink swipe direction="right" to="/home" className='leftArrow'><FaArrowLeft /></AniLink>
        </div>
    )
}

export default ExperiencePage