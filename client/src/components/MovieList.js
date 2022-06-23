import React, { useState, useEffect } from 'react';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [finalQuery, setFinalQuery] = useState('');
  const [inputBox, setInputBox] = useState('');
  const [finalInputBox, setFinalInputBox] = useState('');
  const [seededMovieCount, setSeededMovieCount] = useState(0)

  useEffect(() => {
    fetch('http://localhost:8080/movies')
    .then(res => res.json())
    .then(data => {
      setMovies(data)
      return data
    })
    .then(data => setSeededMovieCount(data.length))
    .catch(err => console.error(err))
  },[]);

  // add movie with input box and button
  const updateInputBox = (e) => {
    setInputBox(e.target.value);
    console.log('setQuery:', inputBox)
  };

  const submitInputBox = (e) => {
    const data = {
      title: inputBox
    }
    const init = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(data)
    }
    fetch('http://localhost:8080/movies', init)
        .then(res => {
          if (!res.ok) throw new Error(`Error: ${res.status}`)
          return res.json()
        })
        .then(data => {
          console.log('Movie added')
          document.getElementById("inputBox").value = "";
        })

  }

  // search bar and submit button
  const updateQuery = (e) => {
    setQuery(e.target.value);
    console.log('setQuery:', query)
  }
  const submitQuery = (e) => {
    setFinalQuery(query);
    console.log('setFinalQuery:', finalQuery)
  }

  let filteredMovies = movies.filter(movie => {
    return movie.title.toLowerCase().includes(finalQuery.toLowerCase())
  });

  return (
    <>
      <h1>List of Movies</h1>
      
      <form>
        <label>
          Add Movie: 
          <input id="inputBox" type="text" name="title" onKeyUp={updateInputBox} />
        </label>
        <input type="button" value="Submit" onClick={submitInputBox}/>
      </form>

      <form>  
        <label>
          Search Movie: 
          <input id="searchBox" type="text" name="title" onKeyUp={updateQuery} />
        </label>
        <input type="button" value="Submit" onClick={submitQuery}/>
      </form>
      <div>
        {filteredMovies.map(movie => {
          return <li key={movie.id}>{movie.title}</li>
        })}
      </div>
    </>
  )


};

export default MovieList;