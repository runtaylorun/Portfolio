import React from 'react'
import { motion } from 'framer-motion'

const IndexPage = () => {

    const line1 = "Hello, my name is Taylor Mills"

    const sentence = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.5,
                staggerChildren: 0.08
            }
        }
    }

    const letter = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0
        }
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    const generateHeights = (frames) => {
        const heights = []
        heights[0] = 0
        for (let x = 1; x < frames - 1; x++) {
            const height = getRandomInt(150)

            if (x % 2 != 0 || x == 1) {
                heights[x] = heights[x - 1]
            } else {
                heights[x] = height;
            }
        }

        heights[frames - 1] = 5
        return heights
    }

    const getWaves = (count) => {
        const waves = []

        for (let x = 0; x < count; x++) {
            waves.push(
                <motion.div
                    style={{ borderRadius: '5px', width: 5, height: 60, backgroundColor: 'white', boxShadow: '0px 1px 3px 1px rgba(85,215,253,0.75)' }}
                    animate={{ height: generateHeights(25) }}
                    transition={{ delay: 0.5, height: { duration: 2 } }} />
            )
        }

        return waves
    }

    const waves = getWaves(90)

    return (
        <div style={{ backgroundColor: 'black', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '50%' }}>
                {waves.map(wave => wave)}
            </div>
            <motion.h3 style={{ color: 'white' }} variants={sentence} initial="hidden" animate="visible">
                {line1.split("").map((char, index) => {
                    return (
                        <motion.span style={{ fontSize: 40 }} key={char + "-" + index} variants={letter}>
                            {char}
                        </motion.span>
                    )
                })}
            </motion.h3>
            <motion.span animate={{ opacity: [1, 0, 1, 0, 1, 0, 1, 0, 1, 0] }} transition={{ opacity: { duration: 4 } }} style={{ color: 'white', fontSize: 40 }}>|</motion.span>
        </div>
    )
}

export default IndexPage