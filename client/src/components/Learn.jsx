import React from 'react'
import Learnbg from '../assests/Learnbg.svg'
import Navbar from "./components/Navbar"

const Learn = () => {
    return (
        <div style={{ background: `url(${Learnbg})`, height: '100vh' }}>

            <Navbar />
        </div>
    )
}

export default Learn;