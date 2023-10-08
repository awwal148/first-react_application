import {useEffect} from 'react';

import movieCard from './MovieCard';

import './App.css'

import Searchicon from './search.svg';
const API_URL = 'https://www.omdbapi.com?apikey=f0f00805'

const movie1 = {
    "Title": "Spider-Man",
    "Year": "2002",
    "imdbID": "tt0145487",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg"
}

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
    }
    useEffect(() => {
        searchMovies('spider')
    }, [])
    return (
        <div className="app">
            <h1>MovieLand</h1>

        <div className="search">
            <input placeholder='Search for movies' value="sex" onChange={() => {}} />
            <img src={Searchicon} alt='search' onClick={() => {}} />
        </div>

        <div className="container">
            <movieCard movie1 = {movie1} />
         </div>

        </div>
    );
}

export default App;