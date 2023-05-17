import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { remove } from './cartSlice';

export default function Cart() {
    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch()
    let total = 0;


    if (cartItems.length === 0) {
        return <h1> Cart is Empty </h1>
    }

    return (<>
        {
            cartItems.map((product) => {

                total += product.price
                return <div style={{
                    display: 'flex',
                    justifyContent: 'space-evenly', margin: '2px',
                    alignItems: 'center',
                    border: '2px solid black',
                }}>

                    <div>
                        <img src={product.image} className="card-img-top" alt="img" style={{
                            height: '30px',
                            width: '30px',

                        }} />
                    </div>

                    <div>
                        <h5>{product.title}</h5>
                    </div>

                    <div>
                        {product.price}
                    </div>

                    <button className='btn btn-danger' onClick={() => {
                        dispatch(remove(product.id))
                    }}>Delete</button>
                </div>
            })
        }
        <h4>Total is {total}</h4>
    </>


    )
}
