import * as React from "react"
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { FaArrowLeft } from 'react-icons/fa'
import * as classes from '../css/about.module.css'
import me from '../images/IMG_8956-min-min-updatedBW.png'
import '../css/global.css'

const AboutPage = () => {
    return (
        <div className={classes.page}>
            <AniLink swipe direction="right" to="/home" className='leftArrow'><FaArrowLeft /></AniLink>
            <div className={classes.aboutSection}>
                <img src={me} width="348px" height="512px" />
                <div>
                    <h2 style={{ color: 'inherit' }}>Taylor Mills</h2>
                    <p style={{ color: 'inherit' }}>I am a full-stack software engineer in the Chicagoland area currently working in the financial sector.
                        I graduated with my bachelors of science in computer science in the fall of 2022 and am currently working towards my masters in the field.
                        I have 2 years of software engineering experience working with web applications and backend systems using technologies including but not limited to Java, React, JavaScript, and Spring.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutPage