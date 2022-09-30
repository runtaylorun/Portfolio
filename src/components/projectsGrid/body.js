import React from 'react'
import * as classes from '../../css/projects.module.css'

const Body = ({ image, text }) => {
    return (
        <div className={classes.gridBody}>
            <img src={image} width="256" height="256" />
            <p>{text}</p>
        </div>
    )
}

export default Body