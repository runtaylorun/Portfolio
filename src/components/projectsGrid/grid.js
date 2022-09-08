import React from 'react'
import * as classes from '../../css/projects.module.css'

const Grid = ({ children }) => {
    return (
        <div className={classes.grid}>
            {children}
        </div>
    )
}

export default Grid