import React from 'react'
import {NavLink, Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className='container'>
            <div className="container-fluid">
                <button className="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarNav" 
                aria-controls="navbarNav" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" >
                    <ul className="navbar-nav">
                <a className="navbar-brand" href="#">React USer</a>

                        <li className="nav-item">
                            <NavLink className="nav-link" path to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" path to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" path to="/contact">Contact</NavLink>
                        </li>
                <Link class="btn btn-outline-light btn_1" to="/users/add">Add user</Link>
                       
                    </ul>
                </div>
            </div>
            </div>
        </nav>
    )

}
export default Navbar;