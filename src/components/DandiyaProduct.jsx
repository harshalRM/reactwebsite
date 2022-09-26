import React from 'react'
import DAND from '../DandiyaData';
import { NavLink } from 'react-router-dom';

const DandiyaProduct = () => {
    const cardItem = (item) => {
        return (
            <div className="card my-5 p-3" key={item.id} style={{width: "18rem"}}>
                <img src={item.img} className="card-img-top" alt={item.title}/>
                    <div className="card-body text-center">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">Rs{item.price}</p>
                        <NavLink to={`/dandiya/${item.id}`} className="btn btn-primary">BUY NOW</NavLink>
                    </div>
            </div>
        );
    }
  return (
    <>
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>Chaniya Choli</h1>
                        <hr />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-around">
                    {DAND.map(cardItem)}
                </div>
            </div>
    </>
  )
}

export default DandiyaProduct