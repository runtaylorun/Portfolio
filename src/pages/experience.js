import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import ProjectGrid, { GridSquare, ProjectModal } from "../components/ProjectGrid"

const ExperiencePage = () => {
    const [tappyModalOpen, setTappyModalOpen] = useState(false)
    const [managerModalOpen, setManagerModalOpen] = useState(false)
    const [fitnessGuardianModalOpen, setFitnessGuardianModalOpen] = useState(false)
    const [splitModalOpen, setSplitModalOpen] = useState(false)

    const tappyDodgeTechnologies = ['C#', 'Unity']
    const xcManagerTechnology = ['C#', 'HTML', 'CSS', 'ASP.NET MVC', 'SQL Server']
    const fitnessGuardianTechnology = ['HTML', 'CSS', 'JavaScript', 'React', 'MySQL', 'Node.js', 'Express', "Git", 'Python', 'SQL']
    const splitCalculatorTechnology = ['HTML', 'CSS', 'JavaScript']

    const anyModalsOpen = tappyModalOpen || managerModalOpen || fitnessGuardianModalOpen || splitModalOpen

    const closeAllModals = () => {
        setTappyModalOpen(false)
        setManagerModalOpen(false)
        setFitnessGuardianModalOpen(false)
        setSplitModalOpen(false)
    }

    return (
        <>
            {anyModalsOpen && <div onClick={closeAllModals} style={{ zIndex: 50, position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)' }} />}
            <NavBar />
            <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '90vh' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h2 style={{ fontSize: '39px' }}> My Side Projects </h2>
                    <ProjectGrid>
                        <GridSquare clickHandler={setTappyModalOpen} name='Tappy Dodge' />
                        <GridSquare clickHandler={setManagerModalOpen} name='XC Manager' />
                        <GridSquare clickHandler={setFitnessGuardianModalOpen} name='Fitness Guardian' />
                        <GridSquare clickHandler={setSplitModalOpen} name='Split Calculator' />
                    </ProjectGrid>
                </div>
                <ProjectModal
                    open={tappyModalOpen}
                    title='Tappy Dodge'
                    body='Tappy Dodge is a 3D mobile arcade game that I released onto the IOS/Google Play app store. 
                    The game involves dodging a soccer ball that changes both speed and direction. Some features include a store/point system,
                    integration with IOS/Google Play leaderboard, and advertisement integration.'
                    closeHandler={setTappyModalOpen}
                    technologies={tappyDodgeTechnologies}
                />
                <ProjectModal
                    open={managerModalOpen}
                    title='XC Manager'
                    body='XC Manager is a web application that allows cross country coaches to manage their roster and record their race results.'
                    closeHandler={setManagerModalOpen}
                    technologies={xcManagerTechnology}
                />
                <ProjectModal
                    open={fitnessGuardianModalOpen}
                    title='Fitness Guardian'
                    body='Fitness Guardian is a web application that allows users to log and track their fitness activities. Some features of the application include
                    the ability to upload activiity files, readily available activity metrics, and a weekly breakdown of your activities for the week.'
                    closeHandler={setFitnessGuardianModalOpen}
                    technologies={fitnessGuardianTechnology}
                />
                <ProjectModal
                    open={splitModalOpen}
                    title='Split Calculator'
                    body='Split calculator is a small chrome extension that allows users to enter in
                    there race times and generate splits based off a variety of distances and measurements.'
                    closeHandler={setSplitModalOpen}
                    technologies={splitCalculatorTechnology}
                />
            </main>
        </>
    )
}

export default ExperiencePage