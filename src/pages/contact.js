import * as React from "react"
import * as classes from '../css/contact.module.css'
import NavBar from '../components/NavBar'

const ContactPage = () => {
    return (
        <>
            <NavBar />
            <main style={{ display: 'flex', justifyContent: 'space-evenly', height: '100vh', backgroundColor: 'hsl(0, 0%, 98%)' }}>
                <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50%', }}>
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
                        <div className={classes.formButtons}>
                            <button>Submit</button>
                            <button type='reset'>Clear</button>
                        </div>
                    </form>
                </section>
                <aside style={{ width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}>
                    <p>Github: runtalyorundldldld....</p>
                    <p>LinkedIn: ruintalykafd;al;d....</p>
                    <p>Instagram: taylormills1903</p>
                </aside>
            </main>
        </>
    )
}

export default ContactPage