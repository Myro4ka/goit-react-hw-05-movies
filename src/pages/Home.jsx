import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingMovies } from 'services/API';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(({ data }) => {
      setMovies(data.results);
    });
  }, []);

  return (
    <>
      <ul>
        {movies.map(({ title, id }) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id}`}>
                <p>{title}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
