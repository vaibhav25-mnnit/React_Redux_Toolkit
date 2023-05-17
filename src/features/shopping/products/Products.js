import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from './productsSlice';
import { add } from '../cart/cartSlice';

import { STATUS } from './productsSlice';

function Products() {
    const dispatch = useDispatch();

    const products = useSelector((state) => state.products.data)
    const state = useSelector((state) => state.products.status)

    useEffect(() => {
        dispatch(getProducts())
    }, [])

    console.log(products)
    console.log(state)

    if (state === STATUS.LOADING) {
        return <div class="text-center">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    }

    if (state === STATUS.ERROR) {
        return <h5>Some, error happened</h5>
    }
    return <>
        <div className='container'>
            <div className='row'>

                {
                    products.map((product) => {

                        return <div className="col" style={{
                            margin: '5px',
                            padding: '5px'
                        }}>
                            <div key={product.width} className="card text-center" style={{
                                width: '18rem',
                                alignItems: 'center'
                            }} >
                                <img src={product.image} className="card-img-top" alt="img" style={{
                                    height: '100px',
                                    width: '100px'
                                }} />
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <button href="#" className="btn btn-primary" onClick={() => {
                                        dispatch(add(product))
                                    }}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    })
                }

            </div>
        </div>
    </>

}

export default Products