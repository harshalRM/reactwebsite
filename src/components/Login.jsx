import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
    return (
        <>
            <div className="container my-5  shadow">
                <div className="row">
                    <div className="col-md-5 d-flex flex-column align-items-center justify-content-center text-white form">
                        <h2 className="display-4 fw-bolder">WELCOME BACK</h2>
                        <p className="lead text-center">enter Your Credentials To Login</p>
                        <h5 className='mb-4'>OR</h5>
                        <NavLink to="/register" className="btn btn-outline-light rounded-pill pb-2 w-50">Register</NavLink>
                    </div>
                    <div className="col-md-6 p-5">
                        <h2 className="display-6 fw-bolder mb-5">login</h2>
                        <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
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

export default Login