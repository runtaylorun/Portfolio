import React from 'react'
import * as classes from '../../css/projects.module.css'

const Footer = ({ technologies }) => {
    return (
        <div className={classes.gridFooter}>
            {technologies.map(tech => <span style={{ color: 'inherit' }}>{tech}</span>)}
        </div>
    )
}

export default Footer