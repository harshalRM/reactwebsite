import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Wishlist = () => {
  const state = useSelector((state)=> state.addItems)
  return (
    <>
        <NavLink to="/wish" className="btn btn-outline-primary">
            <span className="fa fa-heart me-2 ms-2"></span>Wishlist({state?.length})
        </NavLink>
    </>
  )
}

export default Wishlist