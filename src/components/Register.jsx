import React from 'react'
import { NavLink } from 'react-router-dom'

const Register = () => {
  return (
    <>
        <div className="container my-5  shadow">
                <div className="row justify-content-end">
                    <div className="col-md-5 d-flex flex-column align-items-center justify-content-center text-white form order-2">
                        <h2 className="display-4 fw-bolder">hello Friend</h2>
                        <p className="lead text-center">enter Your Details To Register</p>
                        <h5 className='mb-4'>OR</h5>
                        <NavLink to="/login" className="btn btn-outline-light rounded-pill pb-2 w-50">Login</NavLink>
                    </div>
                    <div className="col-md-6 p-5">
                        <h2 className="display-6 fw-bolder mb-5">Register</h2>
                        <form>
  <div class="mb-3">
    <label for="name" class="form-label">Name</label>
    <input type="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="name" class="form-label">Address</label>
    <textarea type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="number" class="form-label">Mobile Number</label>
    <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="email" class="form-label">Email</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Register