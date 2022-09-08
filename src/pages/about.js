import * as React from "react"
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { FaArrowLeft } from 'react-icons/fa'
import * as classes from '../css/about.module.css'
import me from '../images/IMG_8956-min-min.png'
import '../css/global.css'

const AboutPage = () => {
    return (
        <div className={classes.page}>
            <AniLink swipe direction="right" to="/home" className='leftArrow'><FaArrowLeft /></AniLink>
            <img src={me} width="174px" height="256px" />
        </div>
    )
}

export default AboutPage