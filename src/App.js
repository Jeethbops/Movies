import logo from './logo.svg';
import './App.css';
import react, { Component, PureComponent, useEffect } from "react";
import axios from "axios";
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

function App() {

    const [movieName, setmovieName] = useState("")
    const [poppularMovies, setPopularmovies] = useState([]);
    const [searchedMovie, setSearchedMovie] = useState([])
    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/movie/popular?api_key=cfe422613b250f702980a3bbf9e90716")
            .then((res) => {
                setPopularmovies(res.data.results)
            })
    }, []);

    function changeMoviename(e) {
        setmovieName(e.target.value)

    }
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/search/movie?query=${movieName}&api_key=cfe422613b250f702980a3bbf9e90716`)
            .then((res) => {
                setSearchedMovie(res.data.results)

            })
    }, [movieName])

    return (
        <>
            <div>
                <div className='SEARCHBAR'>
                    <input value={movieName} className='searchbar' placeholder='Enter Movie name' onChange={(e) => { changeMoviename(e) }}></input>
                </div>

                <div className='movie-wrapper'>
                    {
                        movieName == "" ?
                            poppularMovies.map((movie, i) => {
                                return (
                                    <div className='movie-card' >
                                        <div className='movie-thumb' onMouseOver={() => {
                                            var movieelement = document.getElementById(`movieTitle${i}`)
                                            movieelement.style.display = "block"
                                        }}
                                            onMouseLeave={() => {
                                                var movieelement = document.getElementById(`movieTitle${i}`)
                                                movieelement.style.display = "none"
                                            }}
                                        >
                                            <img className='thumbnail'
                                                src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`}
                                            />
                                        </div>

                                        <p id={`movieTitle${i}`} style={{ display: 'none' }}> <b>{movie.title}</b></p>

                                    </div>
                                )

                            })

                            : searchedMovie.map((movie, i) => {
                                return (
                                    <div className='movie-card' >
                                        <div className='movie-thumb' onMouseOver={() => {
                                            var searchedMovieelement = document.getElementById(`searchedMovieTitle${i}`)
                                            searchedMovieelement.style.display = "block"
                                        }}
                                            onMouseLeave={() => {
                                                var searchedMovieelement = document.getElementById(`searchedMovieTitle${i}`)
                                                searchedMovieelement.style.display = "none"
                                            }}
                                        >
                                            <img className='thumbnail'
                                                src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`}
                                            />
                                        </div>

                                        <p id={`searchedMovieTitle${i}`} style={{ display: 'none' }}> <b>{movie.title}</b></p>

                                    </div>
                                )

                            })

                    }





                </div>

            </div>
        </>
    )
}

export default App;




















