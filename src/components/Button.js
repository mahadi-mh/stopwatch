import React from 'react'
import { start, stop, reset } from './OnClick'


const Button = () => {
    return (
        <div className="button-container">
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default Button