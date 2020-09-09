import React, { useEffect } from 'react';
import './Results.css';
import VideoCard from './VideoCard';
import { useSelector, useDispatch } from 'react-redux';
import { getData } from './redux-config/actions';
import FlipMove from 'react-flip-move';

function Results({ option }) {
    const dispatch = useDispatch();
    const movies = useSelector(state => state.movies);
    const error = useSelector(state => state.error);

    useEffect(() => { 
        console.log(dispatch(getData(option)));

    }, [option])

    return (
        <div className='results'>
            {
            error? <p className='results__error'>`${error}`</p> : 
            <FlipMove>
                {movies.map((movie) => (
                    <VideoCard key={movie.id} movie={movie} />
                ))}
            </FlipMove>
            }
        </div>
        
    )
}

export default Results
