import React from 'react'
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/header/Header';
import Home from './screens/home/Home';
import MovieList from './components/movieList/MovieList';
import Movie from './screens/MovieDetails/Movie';
// 8a432e8db3c833b79e44bd2c6dce6538
//https://github.com/PrinceRaaaj/IMDB-clone-ReactApp
function App() {
  return (
 <div className="App">
   <Router>
    <Header/>
      <Routes>
      <Route index element={<Home/>}></Route>
                <Route path="movie/:id" element={<Movie/>}></Route>
                <Route path="movies/:type" element={<MovieList/>}></Route>
                <Route path="/*" element={<h1>Error Page</h1>}></Route>
      </Routes>
    </Router>
 </div>
   
    
  );
}

export default App;
