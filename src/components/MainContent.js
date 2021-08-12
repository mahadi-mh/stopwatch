import React from 'react'
import './MainContent.css'
import Button from './Button'



function MainContent() {
    return (
        <div className="main-container">
            <h3 id="time">00:00</h3>
            <Button />
        </div>
    )
}

export default MainContent