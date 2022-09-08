import React from 'react'
import * as classes from '../../css/projects.module.css'

const Header = ({ title }) => {
    return (
        <div className={classes.gridHeader}>
            <h1>{title}</h1>
        </div>
    )

}

export default Header