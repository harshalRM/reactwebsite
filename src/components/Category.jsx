import React from 'react'
import { NavLink } from 'react-router-dom'

const Category = () => {
    return (
        <>
            <div className="container bg-dark my-5 py-4">
                <div className="row row-cols-1 row-cols-md-3 g-4 p-5 my-5">
                    <div className="col">
                        <img src="../images/Pallazo/pallazo2.WEBP" height="600px" className="card-img-top" alt="..." />
                        <div className="card-title text-center">
                            <h5 className="text-white mt-4 fs-1 name">Pallazo Suits</h5>
                            <NavLink to="/pallazo" className="text-white fs-5">SHOP NOW</NavLink>
                        </div>
                    </div>
                    <div className="col">
                        <img src="../images/Anarkali/anarkali3.WEBP" height="600px" className="card-img-top" alt="..." />
                        <div className="card-title text-center">
                            <h5 className="text-white mt-4 fs-1 name">Anarkali</h5>
                            <NavLink to="/anarkali" className="text-white fs-5">SHOP NOW</NavLink>
                        </div>
                    </div>
                    <div className="col">
                        <img src="../images/Lehenga/lehenga5.WEBP" height="600px" className="card-img-top" alt="..." />
                        <div className="card-title text-center">
                            <h5 className="text-white mt-4 fs-1 name">Lehenga</h5>
                            <NavLink to="/lehenga" className="text-white fs-5">SHOP NOW</NavLink>
                        </div>
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-4 p-5 my-5">
                    <div className="col">
                        <img src="../images/Saree/saree12.WEBP" height="600px" className="card-img-top" alt="..." />
                        <div className="card-title text-center">
                            <h5 className="text-white mt-4 fs-1 name">Sarees</h5>
                            <NavLink to="/saree" className="text-white fs-5">SHOP NOW</NavLink>
                        </div>
                    </div>
                    <div className="col">
                        <img src="../images/Kurti/kurti8.WEBP" height="600px" className="card-img-top" alt="..." />
                        <div className="card-title text-center">
                            <h5 className="text-white mt-4 fs-1 name">Kurti</h5>
                            <NavLink to="/kurti" className="text-white fs-5">SHOP NOW</NavLink>
                        </div>
                    </div>
                    <div className="col">
                        <img src="../images/Suits/suit9.WEBP" height="600px" className="card-img-top" alt="..." />
                        <div className="card-title text-center">
                            <h5 className="text-white mt-4 fs-1 name">Sharara Suits</h5>
                            <NavLink to="/suit" className="text-white fs-5">SHOP NOW</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Category