import React from 'react'
import * as classes from '../css/splash.module.css'

const IndexPage = () => {


    const firstSentence = "Greetings, welcome to my portfolio"


    return (
        <div className={classes.page}>
            <div className={classes.typewriter}>
                <h1>{firstSentence}</h1>
            </div>
        </div>
    )
}

export default IndexPage