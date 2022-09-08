import React from 'react'
import * as classes from '../../css/projects.module.css'

const Item = ({ children, title, clickHandler, isOpen }) => {
    return (
        <div onClick={clickHandler} className={classes.item}>
            <h2 style={{ color: 'inherit' }}>{title}</h2>
            {isOpen && children}
        </div>
    )
}

export default Item