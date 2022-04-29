import axios from './axios';
import React, { useState, useEffect } from 'react'
import YouTube from 'react-youtube';
import './Row.css'
import movieTrailer from 'movie-trailer';


const base_image_url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchURL, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerURL, setTrailerURL] = useState('');
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL);
            setMovies(request.data.results)
        }
        fetchData()
    }, [fetchURL]);

    const handleClick = (movie) => {
        if (trailerURL) {
            setTrailerURL('')
        } else {
            movieTrailer(movie?.name || '').then(url => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerURL(urlParams.get('v'));
            }).catch(error => console.log(error))
        }
    }

    return (
        <div className='row'>
            <h2> {title}</h2>
            <div className='row_posters'>
                {movies.map(movie => (
                    <img
                        key={movie.id}
                        onClick={() => handleClick(movie)}
                        className={`row_poster ${isLargeRow && 'row_posterLarge'}`}
                        src={`${base_image_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.title} />
                ))}
            </div>
            {trailerURL && <YouTube videoId={trailerURL} opts={opts} />}
        </div>
    )
}

export default Row