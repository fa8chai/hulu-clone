import React from 'react';
import './Nav.css';
import { useDispatch } from 'react-redux';
import requests from './requests';
import { changeOption } from './redux-config/actions'

function Nav() {
    const dispatch = useDispatch();

    return (
        <div className='nav'>
            <h3 onClick={() => dispatch(changeOption(requests.fetchTrending))}>Trending</h3>
            <h3 onClick={() => dispatch(changeOption(requests.fetchTopRated))}>Top Rated</h3>
            <h3 onClick={() => dispatch(changeOption(requests.fetchActionMovies))}>Action</h3>
            <h3 onClick={() => dispatch(changeOption(requests.fetchComedyMovies))}>Comedy</h3>
            <h3 onClick={() => dispatch(changeOption(requests.fetchHorrorMovies))}>Horror</h3>
            <h3 onClick={() => dispatch(changeOption(requests.fetchRomanceMovies))}>Romance</h3>
            <h3 onClick={() => dispatch(changeOption(requests.fetchMystery))}>Mystery</h3>
            <h3 onClick={() => dispatch(changeOption(requests.fetchSciFi))}>Sci-fi</h3>
            <h3 onClick={() => dispatch(changeOption(requests.fetchWestern))}>Western</h3>
            <h3 onClick={() => dispatch(changeOption(requests.fetchAnimation))}>Animation</h3>
            <h3 onClick={() => dispatch(changeOption(requests.fetchTV))}>TV Movie</h3>
        </div>
    )
}

export default Nav
