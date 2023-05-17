import React from 'react'
import { Counter } from '../features/counter/Counter'
import logo from '../logo.svg'
import { Link } from 'react-router-dom'


export default function Home() {
    return <>

        <h1>This is a full React-redux tutorial follow each button to know more</h1>


        <Link to='/cal'>
            <button className='btn btn-primary'>Calculater using redux </button>
        </Link>
        ||
        <Link to='/articles'>
            <button className='btn btn-danger'>Redux Thunk async api calling</button>
        </Link>
        ||
        <Link to='/cart' >
            <button className='btn btn-success'>Full cart & shoping page </button>
        </Link>
        <hr />

        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Counter />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <span>
                    <span>Learn </span>
                    <a
                        className="App-link"
                        href="https://reactjs.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        React
                    </a>
                    <span>, </span>
                    <a
                        className="App-link"
                        href="https://redux.js.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Redux
                    </a>
                    <span>, </span>
                    <a
                        className="App-link"
                        href="https://redux-toolkit.js.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Redux Toolkit
                    </a>
                    ,<span> and </span>
                    <a
                        className="App-link"
                        href="https://react-redux.js.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        React Redux
                    </a>
                </span>
            </header>
        </div>

    </>
}
