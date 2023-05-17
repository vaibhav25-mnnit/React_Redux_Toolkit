import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'



import { Link } from 'react-router-dom'

import {
    sub,
    mul,
    add,
    div,
    selectCalculater
} from './calculaterSlice'

function Calculater() {

    const count = useSelector(selectCalculater);
    const dispatch = useDispatch();
    const [input, setInput] = useState(null);

    return (
        <>
            <h1> This is a redux-toolkit based Calculater</h1>

            <h3> Current Result: {count}</h3>

            <div class="row g-2">
                <div class="col-md">
                    <input class="form-control mb-3" value={input} onChange={(e) => {
                        setInput(e.target.value)
                    }}></input>
                </div>

                <div class="col-md">
                    <button class="btn btn-primary" onClick={
                        () => {
                            dispatch(add(parseInt(input)))
                        }
                    }>
                        add
                    </button>
                    ||
                    <button class="btn btn-success" onClick={() => dispatch(sub(parseInt(input)))}>
                        substract
                    </button>
                    ||
                    <button class="btn btn-danger" onClick={() => dispatch(mul(parseInt(input)))}>
                        multiply
                    </button>
                    ||
                    <button class="btn btn-warning" onClick={() => dispatch(div(parseInt(input)))}>
                        divide
                    </button>
                </div>
            </div>
            <br />

            <Link to='/'>
                Home
            </Link>



        </>
    )
}

export default Calculater