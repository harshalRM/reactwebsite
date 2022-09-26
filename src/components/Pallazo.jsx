import React from 'react'
import PALL from '../PallazoData'
import { NavLink } from 'react-router-dom'

const Pallazo = () => {
  const cardItem = (item) => {
    return (
        <div className="card my-5 p-3" key={item.id} style={{width: "18rem"}}>
            <img src={item.img} className="card-img-top" alt={item.title}/>
                <div className="card-body text-center">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text my-3 fw-bold text-danger">Rs {item.price}</p>
                    <NavLink to={`/pallazo/${item.id}`} className="btn btn-outline-primary">BUY NOW</NavLink>
                </div>
        </div>
    );
}
  return (
    <>
        <div className="container py-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>Pallazo Suits</h1>
                        <hr />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-around">
                    {PALL.map(cardItem)}
                </div>
            </div>
    </>
  )
}

export default Pallazo