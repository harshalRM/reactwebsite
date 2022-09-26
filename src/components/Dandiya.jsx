import React from 'react'
import { NavLink } from 'react-router-dom'
import Category from './Category'




const Dandiya = () => {
    return (
        <>
            <section id="hero">
                <h1 className='fw-bolder text-white display-1 main'>Dandiya Delights</h1>
                <NavLink to="/dandiya" className="text-white fs-2 fw-bold">SHOP NOW</NavLink>
            </section>
            <Category/>
        </>
    )
}

export default Dandiya