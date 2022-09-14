import React from 'react'
import * as classes from '../../css/projects.module.css'

const Item = ({ children, title, clickHandler, isOpen }) => {
    return (
        <>
            {isOpen && <div className={classes.modal}>{children}</div>}
            <div onClick={clickHandler} className={classes.item}>
                <h2 style={{ color: 'inherit' }}>{title}</h2>
            </div>
        </>
    )
}

export default Item