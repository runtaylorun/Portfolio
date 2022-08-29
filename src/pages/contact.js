import * as React from "react"
import * as classes from '../css/contact.module.css'
import NavBar from '../components/NavBar'

const ContactPage = () => {
    return (
        <>
            <NavBar />
            <main style={{ display: 'flex', justifyContent: 'space-evenly', height: '90vh' }}>
                <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <h2 style={{ fontSize: '48px', marginBottom: 0 }}>Send a Message</h2>
                        <hr style={{ borderTop: '1px solid #8a8a8a', width: '75%' }} />
                        <p style={{ marginTop: 0, fontSize: 13, color: '#8a8a8a' }}>Have something to discuss? Let me know and i'll respond within a few days.</p>
                    </div>
                    <form style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', height: '75%' }}>
                        <div className={classes.inputContainer}>
                            <input style={{ width: '35%' }} className={classes.textBox} placeholder='First Name' type="text" />
                            <input style={{ width: '35%' }} className={classes.textBox} placeholder='Last Name' type="text" />
                        </div>
                        <div className={classes.inputContainer}>
                            <input className={classes.textBox} placeholder='Email' type="text" />
                        </div>
                        <div className={classes.inputContainer}>
                            <textarea className={classes.textArea} placeholder='Leave a message...' type="text" />
                        </div>
                        <div className={classes.inputContainer}>
                            <input className={classes.textBox} placeholder='5 + 5 = ?' type="text" />
                        </div>
                        <div className={classes.formButtons}>
                            <button style={{ backgroundColor: 'black', color: 'white' }}>Submit</button>
                            <button type='reset'>Clear</button>
                        </div>
                    </form>
                </section>
            </main>
        </>
    )
}

export default ContactPage