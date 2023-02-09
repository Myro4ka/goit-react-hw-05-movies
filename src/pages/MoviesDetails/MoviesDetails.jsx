import {
  useParams,
  Outlet,
  useLocation,
  NavLink,
  Link,
} from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { getMovieById } from 'services/API';
import { imgSRC } from 'utils/imageHref';
import { Div } from './MoviesDetails.styled.js';

const MoviesDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    getMovieById(movieId).then(({ data }) => {
      setMovie(data);
    });
  }, [movieId]);

  const { title, poster_path, genres, release_date, overview, vote_average } =
    movie;
  const releasedYear = new Date(release_date).getFullYear();

  return (
    <Div>
      <Link to={location.state?.from} className="backLink">
        ◄ Go back
      </Link>

      <div className="movie-details">
        <img src={imgSRC(poster_path)} alt={title} />
        <div className="details-wrapper">
          <h2>
            {title} ({releasedYear})
          </h2>
          <p className="overview">{overview}</p>
          {release_date ? (
            <p className="info-title">User Score: {vote_average}</p>
          ) : null}

          {genres?.length ? (
            <div>
              <p className="info-title">Genres</p>
              <ul className="genres">
                {genres.map(({ id, name }) => {
                  return (
                    <li key={id} className="genre">
                      <p>{name}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : null}
          <div>
            <p className="info-title">Additional information</p>
            <ul className="links">
              <li>
                <NavLink
                  to={'cast'}
                  state={{ from: location.state?.from }}
                  className="cast"
                >
                  Cast
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={'reviews'}
                  state={{ from: location.state?.from }}
                  className="reviews"
                >
                  Reviews
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Suspense>
        <Outlet />
      </Suspense>
    </Div>
  );
};

export default MoviesDetails;
