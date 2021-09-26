import * as React from "react"
import { FaGithubSquare, FaLinkedin, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa'

const IconBar = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-evenly', width: '20%', minWidth: 200 }}>
            <FaGithubSquare style={{ cursor: 'pointer' }} size={30} />
            <FaLinkedin style={{ cursor: 'pointer' }} size={30} />
            <FaInstagramSquare style={{ cursor: 'pointer' }} size={30} />
            <FaTwitterSquare style={{ cursor: 'pointer' }} size={30} />
        </div>
    )
}

export default IconBar