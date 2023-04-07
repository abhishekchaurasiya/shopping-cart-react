import React from 'react'
import "./styles/Spinner.css"

const Spinner = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='spinner'></div>
            <h3>Loading...</h3>
        </div>
    )
}

export default Spinner
