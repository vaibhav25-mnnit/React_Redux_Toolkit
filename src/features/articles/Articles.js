import React, { useEffect, useState } from 'react'

import {
    useSelector, useDispatch
} from 'react-redux';

import { Link } from 'react-router-dom';
import {
    getArticlesAsync, selectArticles
} from './articlesSlice';
import icon from '../../assets/fire.ico'

function Weather() {
    const dispatch = useDispatch();
    const articles = useSelector(selectArticles);
    const [input, setInput] = useState("");

    useEffect(() => {
        dispatch(getArticlesAsync())
    }, [])

    const keys = ['type', 'owner', 'expiration', 'number'];

    const search = (articles) => {
        return articles.filter((article) => keys.some((key) => article[key].toLowerCase().includes(input)));
    }

    return (
        <>
            <div style={{
                textAlign: 'center'
            }}>

                <h1> This is a articles using async redux s</h1>

                <nav className="navbar" style={{
                    backgroundColor: '#e3f2fd'
                }}>

                    <div className="container-fluid">

                        <Link to='/'>
                            <a className="navbar-brand" href="#">
                                <img src={icon} alt="Vaibhav" width="30" height="24" />
                            </a>
                        </Link>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search"
                                placeholder='search'
                                value={input}
                                onChange={(e) => {
                                    setInput(e.target.value)
                                }} aria-label="Search" />
                        </form>
                    </div>

                </nav>
                <hr />

                {
                    articles ? <>
                        <table className="table table-success table-hover table-striped ">
                            <thead>
                                <tr>
                                    <th scope="col">Type</th>
                                    <th scope="col">owner</th>
                                    <th scope="col">expiration</th>
                                    <th scope="col">number</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    search(articles).map((da) => {
                                        return <tr key={da.number}>
                                            <th scope="row" >{da.type}</th>
                                            <td>{da.owner}</td>
                                            <td>{da.expiration}</td>
                                            <td>{da.number} </td>
                                        </tr>
                                    })
                                }
                            </tbody>

                        </table></> : <h4> Loading... </h4>
                }


            </div >

        </>
    )
}




export default Weather