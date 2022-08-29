import * as React from 'react'
import * as classes from '../css/shared.module.css'
import { FaTimes } from 'react-icons/fa'

const ProjectGrid = ({ children }) => {
    return (
        <div className={classes.projectGrid}>
            {children}
        </div>
    )
}

export const GridSquare = ({ name, clickHandler }) => {
    return (
        <div onClick={() => clickHandler(true)} className={classes.projectSquare}>
            <h2>{name}</h2>
        </div>
    )
}

export const ProjectModal = ({ open, title, body, closeHandler, technologies }) => {
    return (
        open &&
        <div className={classes.modalBody}>
            <div style={{ gridRow: '1 / 1', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                    <h2 style={{ fontSize: 30, margin: '5px 0 5px 5px' }}>{title}</h2>
                    <p style={{ marginLeft: 5, fontSize: 16 }}>{body}</p>
                </div>
                <div style={{ margin: '0 0 5px 5px' }}>
                    <a href='github.com/runtaylorun' style={{ gridRow: '2 / 2', gridColumn: '1 / 1', alignSelf: 'end', margin: '0 0 5px 5px' }}>Github Link</a>
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h2 style={{ fontSize: 30, marginTop: 5, marginBottom: 0, textAlign: 'center' }}>Technologies</h2>
                <div className={classes.technologyList}>
                    {technologies.map(technology => <div className={classes.technologyItem}>{technology}</div>)}
                </div>
            </div>

        </div>
    )
}

export default ProjectGrid