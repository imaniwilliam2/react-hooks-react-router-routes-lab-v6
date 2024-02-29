import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

function Movie() {

  const [movieDetails, setmovieDetails] = useState({})
  const params = useParams()
  const movieId = params.id


useEffect(() => {
  fetch(`http://localhost:4000/movies/${movieId}`)
  .then(res => res.json())
  .then(data => setmovieDetails(data))
  .catch((error) => console.error("Error fetching movie:", error))
}, [movieId])


  return (
    <>
      <header>
       <NavBar />
      </header>
      <main>
        <h1>{movieDetails.title}</h1>
        <p>Time: {movieDetails.time}</p>
        <div>
          Genres:
          {movieDetails.genres && movieDetails.genres.map((genre, index) => (
            <span key={index}>{genre}</span>
          ))}
        </div>
      </main>
    </>
  );
};

export default Movie;
