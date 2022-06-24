import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MovieList = () => {
  const nav = useNavigate();
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [noMovieMessage, setNoMovieMessage] = useState('No movies exist in database! Add your first movie above!');

  useEffect(() => {
    fetch('http://localhost:8080/movies')
    .then(res => res.json())
    .then(data => {
      setMovies(data)
      return data
    })
    .then(data => {
      if (data.length > 0) setNoMovieMessage('');
    })
    .catch(err => console.error(err))
  },[]);

  const addMovieToDatabase = (e) => {
    const data = {
      title: document.getElementById("inputBox").value
    };
    const init = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(data)
    };
    fetch('http://localhost:8080/movies', init)
        .then(res => {
          if (!res.ok) throw new Error(`Error: ${res.status}`)
          return res.json()
        })
        .then(data => {
          setMovies(data)
          console.log('Movie added')
          document.getElementById("inputBox").value = "";
        })
  };

  const submitQuery = (e) => {
    setQuery(document.getElementById('searchBox').value);
  }

  let filteredMovies = movies.filter(movie => {
    return movie.title.toLowerCase().includes(query.toLowerCase())
  });

  const deleteMovie = (id) => {
    const request = `http://localhost:8080/movies/${id}`
    const init = {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
    }
    fetch(request, init)
    .then(res => res.json())
    .then(() => fetch (`http://localhost:8080/movies/`))
    .then(res => res.json())
    .then(data => setMovies(data))
    .catch(error => console.error('Error:', error))
  };

  return (
    <>
      <h1>List of Movies</h1>
      <form>
        <label>
          Add Movie: 
          <input id="inputBox" type="text" name="title" />
        </label>
        <input type="button" value="Submit" onClick={addMovieToDatabase}/>
      </form>

      <form>  
        <label>
          Search Movie: 
          <input id="searchBox" type="text" name="title" />
        </label>
        <input type="button" value="Submit" onClick={submitQuery}/>
      </form>
      <div>
        {filteredMovies.map(movie => {
          return (
              <li key={movie.id}>
                {movie.title}
                <input type="button" value="Del" onClick={()=> deleteMovie(movie.id)}/>
              </li>
          )
        })}
      </div>
      <div>
        {noMovieMessage}
      </div>
    </>
  )

};

export default MovieList;