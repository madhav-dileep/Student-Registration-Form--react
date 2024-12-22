import { Button } from '@mui/material'
import React from 'react'


const Landing = ({ setInitialState }) => {

    return (
        <div style={{ width: "100%", height: "100dvh" }} className='bg-dark d-flex flex-wrap justify-content-center align-items-center'>
            <div style={{ minHeight: "250px", minWidth: "800px" }} className='border d-flex flex-column flex-wrap justify-content-center align-items-center p-4 rounded-5 bg-dark-subtle text-dark shadow'>
                <h1 style={{ fontSize: "3rem", textTransform: "uppercase" }} className='mb-5 fw-bold'>Student Registration</h1>
                <div className='mb-5'>Welcome, New Student! </div>
                <Button onClick={()=>setInitialState(false)} className='px-3 py-2 rounded-5' variant="contained" color='secondary'>Registration Form &#10140;</Button>
            </div>
        </div>
    )
}

export default Landing