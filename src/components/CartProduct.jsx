import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { delItem } from '../redux/actions/index'

const CartProduct = () => {
    const state = useSelector((state)=>state.addItems)
    const dispatch = useDispatch()

    const handleClose=(item) =>{
        dispatch(delItem(item))
    }
    const cartItems = (cartItem) => {
        return(
            <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
                <div className="container py-4">
                    <button onClick={() => handleClose(cartItem)} className="btn-close float-end" aria-label="Close"></button>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img src={cartItem.img} alt={cartItem.title} height="430px" width="300px" />
                        </div>
                        <div className="col-md-4">
                            <h3><strong className='text-danger'>Name :</strong> {cartItem.title}</h3>
                            <h3 className='my-4'><strong className='text-danger'>Price :</strong> Rs{cartItem.price}</h3>
                            <h3 className="fw-bold my-4 fs-4 text-danger"> Size: <input list="browsers"  className='fw-bold p-2 m-2 w-50'/></h3>
                        <datalist id="browsers">
                            <option  value="30" />
                            <option  value="32" />
                            <option  value="34" />
                            <option  value="36" />
                            <option  value="38" />
                        </datalist>
                        <h3 className="fw-bold my-4 fs-4 text-danger">Quantity : <input type="number" className='fw-bold p-2 m-2 w-50' /></h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const emptyCart = () =>{
        return(
            <>
            <div className="px-4 my-5 bg-light rounded-3">
                <div className="container py-4">
                    <div className="row">
                        <h3 className='fw-bold text-center'>Your Cart is Empty</h3>
                    </div>
                </div>
            </div>     
            </>
        );
    }

    const button = () => {
        return(
            <div className="container">
                <div className="row">
                    <NavLink to="/check" className="btn btn-outline-primary mb-5 w-25 mx-auto">Proceed To Checkout</NavLink>
                </div>
            </div>
        );
    }

  return (
    <>
        {state?.length === 0 && emptyCart()}
        {state?.length !== 0 && state.map(cartItems)}
        {state?.length !== 0 && button()}
    </>
  )
}

export default CartProduct