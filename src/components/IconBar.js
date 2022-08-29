import * as React from "react"
import { FaGithubSquare, FaLinkedin, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa'

const IconBar = () => {
    const black = { color: 'black' }
    return (
        <div style={{ display: 'flex', justifyContent: 'space-evenly', width: '20%', minWidth: 200 }}>
            <a style={black} href="https://github.com/runtaylorun"><FaGithubSquare style={{ cursor: 'pointer' }} size={30} /></a>
            <a style={black} href="https://www.linkedin.com/in/taylor-mills-95054b158/"><FaLinkedin style={{ cursor: 'pointer' }} size={30} /></a>
            <a style={black} href="https://www.instagram.com/taylormills_15/?hl=ne"><FaInstagramSquare style={{ cursor: 'pointer' }} size={30} /></a>
            <a style={black} href="https://twitter.com/taylormills190"> <FaTwitterSquare style={{ cursor: 'pointer' }} size={30} /></a>
        </div>
    )
}

export default IconBar