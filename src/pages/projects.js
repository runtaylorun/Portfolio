import React, { useState } from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { FaArrowRight } from 'react-icons/fa'
import Item from '../components/projectsGrid/item'
import Grid from '../components/projectsGrid/grid'
import Footer from '../components/projectsGrid/footer'
import Header from '../components/projectsGrid/header'
import Body from '../components/projectsGrid/body'
import * as classes from '../css/projects.module.css'
import '../css/global.css'

const ProjectsPage = () => {

    const tappyTechnologies = ["C#", "Unity"]

    const [tappyIsOpen, setTappyIsOpen] = useState(false)

    const openTappy = () => {
        setTappyIsOpen(!tappyIsOpen)
    }

    const closeAll = () => {
        if (tappyIsOpen) {
            setTappyIsOpen(false)
        }
    }

    const isFocused = tappyIsOpen

    return (
        <div onClick={closeAll} className={classes.page}>
            <AniLink swipe direction="left" to="/home" className='rightArrow'><FaArrowRight /></AniLink>
            <div className={`blurContainer ${isFocused && 'blur'}`}></div>
            <Grid>
                <Item clickHandler={openTappy} isOpen={tappyIsOpen} title="Tappy Dodge">
                    <Header title="Tappy Dodge" />
                    <Body />
                    <Footer technologies={tappyTechnologies} />
                </Item>
                <Item title="Fitness Guardian">
                </Item>
                <Item title="Split Calculator">
                </Item>
            </Grid>

        </div >
    )
}

export default ProjectsPage