import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {

  const [movies, setMovies] = useState([])

  useEffect(() =>{
    fetch(`http://localhost:4000/movies`)
    .then(res => res.json())
    .then(movieData => {
      setMovies(movieData)
    })
    .catch(error => console.error("Error fetching movies:", error));
  }, [])


  return (
    <>
      <header>
        <NavBar />
      </header>
      <h1>Home Page</h1>
      <main>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}><MovieCard movie={movie} /></li>
        ))}
       </ul>
      </main>
    </>
  );
};

export default Home;
