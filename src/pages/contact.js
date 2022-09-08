import * as React from "react"
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { FaArrowRight } from 'react-icons/fa'
import * as classes from '../css/contact.module.css'
import '../css/global.css'

const ContactPage = () => {
    return (
        <div className={classes.page}>
            <AniLink swipe direction="left" to="/home" className='rightArrow'><FaArrowRight /></AniLink>
            <form className={classes.form}>
                <div className={classes.inputContainer}>
                    <label for="name">Name</label>
                    <input className={classes.textBox} name="name" type="text" />
                </div>
                <div className={classes.inputContainer}>
                    <label for="email">Email</label>
                    <input className={classes.textBox} name="email" type="text" />
                </div>
                <div className={classes.inputContainer}>
                    <label for="message">Message</label>
                    <input className={classes.textBox} name="message" type="text" />
                </div>
                <div className={classes.inputContainer}>
                    <label for="test">2 + ? = 10</label>
                    <input className={classes.textBox} name="test" type="text" />
                </div>

                <button className={classes.button}>Send</button>
            </form>
        </div>
    )
}

export default ContactPage