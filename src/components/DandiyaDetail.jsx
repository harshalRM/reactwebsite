import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addItem, delItem } from '../redux/actions/index'
import DAND from '../DandiyaData'


const DandiyaDetail = () => {
    const [cartBtn, setCatBtn] = useState("ADD TO CART")
    const proid = useParams();
    // eslint-disable-next-line
    const prodetail = DAND.filter(x => x.id == proid.id)
    const product = prodetail[0]
    console.log(product)
    const dispatch = useDispatch()

    const handleCart = (product) => {
        if (cartBtn === "ADD TO CART") {
            dispatch(addItem(product))
            setCatBtn("REMOVE FROM CART")
        }
        else {
            dispatch(delItem(product))
            setCatBtn("ADD TO CART")
        }
    }




    return (
        <>
            <div className="container my-5 py-3">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center mx-auto product">
                        <img src={product.img} alt={product.title} height="700px" className='border border-4 rounded-3 border-dark' />
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <h1 className='fs-1  title'>{product.title}</h1>
                        <h2 className='my-1 fw-bold'>Rs {product.price}</h2>
                        <p className="lead fs-5">inclusive all taxes</p>
                        <h5 className='text-danger text-end'>Available in stock!!!</h5>
                        <hr />
                        <h2 className="fw-bold my-4 fs-4">Standard Size: <input list="browsers" className='fw-bold p-2 m-2 w-50'/></h2>
                        <datalist id="browsers">
                            <option value="30" />
                            <option value="32" />
                            <option value="34" />
                            <option value="36" />
                            <option value="38" />
                        </datalist>
                        <h2 className="fw-bold my-4 fs-4">Quantity : <input type="number" className='fw-bold p-2 m-2 w-50' /></h2>
                        <hr />
                        <div className="btn-group ">
                            <button onClick={() => handleCart(product)} className="my-5 btn btn-outline-primary w-50 p-3 m-3"><span className="fa fa-shopping-cart me-2 ms-2"></span>{cartBtn}</button>
                            <button className="my-5 btn btn-outline-danger w-50 p-3 m-3"><span className="fa fa-shopping-bag me-2 ms-2"></span>BUY NOW</button>
                        </div>
                        <hr />
                        <h5 className="fs-5  ">5% OFF - Buy 3 or more products and get 5% discount</h5>
                        <h1 className="fw-bold fs-4 text-success ">FREE SHIPPING<i className="fa fa-truck me-2 ms-1"></i></h1>
                    </div>
                </div>
            </div>
        </>
    )
}
export default DandiyaDetail;