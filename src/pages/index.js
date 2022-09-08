import React, { useEffect, useState } from 'react'
import * as classes from '../css/splash.module.css'
import { navigate } from '@reach/router'

const IndexPage = () => {
    const firstSentence = "Greetings, welcome to my portfolio"

    const [isReady, setIsReady] = useState(false)

    useEffect(() => {
        setIsReady(true)
    }, [])

    useEffect(() => {
        setTimeout(() => {
            navigate('/home/')
        }, 5500)
    }, [isReady])

    return (
        <div className={classes.page}>
            {isReady && <><div className={classes.typewriter}>
                <h1>{firstSentence}</h1>
            </div>
                <div className={classes.waveContainer}>
                    <div className={`${classes.wave} ${classes.tallVariation1}`}></div>
                    <div className={`${classes.wave} ${classes.tallVariation2}`}></div>
                    <div className={`${classes.wave} ${classes.tallVariation2}`}></div>
                    <div className={`${classes.wave} ${classes.tallVariation1}`}></div>
                    <div className={`${classes.wave} ${classes.shortVariation1}`}></div>
                    <div className={`${classes.wave} ${classes.shortVariation2}`}></div>
                    <div className={`${classes.wave} ${classes.shortVariation2}`}></div>
                    <div className={`${classes.wave} ${classes.shortVariation3}`}></div>
                    <div className={`${classes.wave} ${classes.shortVariation3}`}></div>
                    <div className={`${classes.wave} ${classes.shortVariation1}`}></div>
                    <div className={`${classes.wave} ${classes.tallVariation1}`}></div>
                    <div className={`${classes.wave} ${classes.tallVariation2}`}></div>
                    <div className={`${classes.wave} ${classes.tallVariation2}`}></div>
                    <div className={`${classes.wave} ${classes.tallVariation1}`}></div>
                </div></>}
        </div>
    )
}

export default IndexPage