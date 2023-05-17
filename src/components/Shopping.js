import React from 'react'
import Cart from '../features/shopping/cart/Cart'
import Products from '../features/shopping/products/Products'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import icon from '../assets/fire.ico'
export default function Shopping() {
    const cartItems = useSelector((state) => state.cart);

    return (
        <>
            <nav className="navbar sticky-top" style={{
                backgroundColor: '#e3f2fd'
            }}>

                <div className="container-fluid">

                    <Link to='/'>
                        <a className="navbar-brand" href="#">
                            <img src={icon} alt="Vaibhav" width="30" height="24" />
                        </a>
                    </Link>


                    <div className='d-flex' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">

                        <a className="navbar-brand" >
                            <img width="30" height="30" src="https://img.icons8.com/dotty/80/add-shopping-cart.png" alt="add-shopping-cart" />
                            <span style={{
                                fontSize: '20px',
                                marginBottom: '12px',
                                backgroundColor: 'red',
                                color: 'white',
                                borderRadius: '50px'
                            }}>{cartItems.length}</span>
                        </a>
                    </div>
                </div>
            </nav>

            <div className="offcanvas offcanvas-end" data-bs-scroll="false" data-bs-backdrop="true" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" offcanvas-horizontal-width='500px' data-content-scroll='false'>

                <div className="offcanvas-header">
                    <h5 id="offcanvasRightLabel">Cart</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className='offcanvas-body'>
                    <Cart />
                </div>

            </div>

            <Products />
        </>
    )
}
