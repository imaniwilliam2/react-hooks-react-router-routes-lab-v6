import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {

  const [directors, SetDirectors] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/directors')
    .then(res => res.json())
    .then(data => SetDirectors(data))
    .catch(error => console.error("Error fetching directors:", error))
  }, [])




  return (
    <>
    <h1>Directors Page</h1>
      <header>
      <NavBar />
      </header>
      <main>
       {directors.map((directors, index) => (
        <article key={index}>
          <h2>{directors.name}</h2>
          <ul>
            {directors.movies.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
          </ul>
        </article>
       ))}
      </main>
    </>
  );
};

export default Directors;
