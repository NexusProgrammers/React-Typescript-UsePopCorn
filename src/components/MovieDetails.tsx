import React, { useState, useEffect, useRef } from "react";
import useKey from "./useKey";
import Loader from "./Loader";
import StarRating from "./StarRating";

interface Movie {
  Actors: string;
  Awards: string;
  BoxOffice: string;
  Country: string;
  DVD: string;
  Director: string;
  Genre: string;
  Language: string;
  Metascore: string;
  Plot: string;
  Poster: string;
  Production: string;
  Rated: string;
  Ratings: Array<{ Source: string; Value: string }>;
  Released: string;
  Response: string;
  Runtime: string;
  Title: string;
  Type: string;
  Website: string;
  Writer: string;
  Year: string;
  imdbID: string;
  imdbRating: string;
  imdbVotes: string;
}

interface MovieDetailsProps {
  selectedId: string;
  onCloseMovie: () => void;
  onAddWatched: (movie: Movie) => void;
  watched: Movie[];
}

const MovieDetails: React.FC<MovieDetailsProps> = ({
  selectedId,
  onCloseMovie,
  onAddWatched,
  watched,
}) => {
  const [movie, setMovie] = useState<Movie>({
    Actors: "",
    Awards: "",
    BoxOffice: "",
    Country: "",
    DVD: "",
    Director: "",
    Genre: "",
    Language: "",
    Metascore: "",
    Plot: "",
    Poster: "",
    Production: "",
    Rated: "",
    Ratings: [],
    Released: "",
    Response: "",
    Runtime: "",
    Title: "",
    Type: "",
    Website: "",
    Writer: "",
    Year: "",
    imdbID: "",
    imdbRating: "",
    imdbVotes: "",
  });

  console.log("movie details here", movie);

  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState<string>("");

  const countRef = useRef(0);

  useEffect(() => {
    if (userRating) countRef.current++;
  }, [userRating]);

  const isWatched = watched.map((movie) => movie.imdbID).includes(selectedId);
  const watchedUserRating = watched.find(
    (movie) => movie.imdbID === selectedId
  )?.userRating;

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  const isTop = Number(imdbRating) > 8;

  function handleAdd() {
    const newWatchedMovie: Movie = {
      imdbID: selectedId,
      Title: title,
      Year: year,
      Poster: poster,
      imdbRating: imdbRating,
      Runtime: runtime.split(" ")[0],
      Rated: "",
      Ratings: [],
      Genre: genre,
      Director: director,
      Writer: "",
      Actors: actors,
      Plot: plot,
      Language: "",
      Country: "",
      Awards: "",
      Metascore: "",
      imdbVotes: "",
      Production: "",
      Website: "",
      DVD: "",
      BoxOffice: "",
      Type: "",
      Response: "",
    };

    onAddWatched(newWatchedMovie);
    onCloseMovie();
  }

  useKey("Escape", onCloseMovie);

  const KEY = "f84fc31d";

  useEffect(() => {
    async function getMovieDetails() {
      setIsLoading(true);
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
      );
      const data = await res.json();
      setMovie(data);
      setIsLoading(false);
    }
    getMovieDetails();
  }, [selectedId]);

  useEffect(() => {
    if (!title) return;
    document.title = `Movie | ${title}`;

    return () => {
      document.title = "usePopcorn";
    };
  }, [title]);

  return (
    <div className="details">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={onCloseMovie}>
              &larr;
            </button>
            <img src={poster} alt={`Poster of ${title} movie`} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>⭐️</span>
                {imdbRating} IMDb rating
              </p>
            </div>
          </header>

          <section>
            <div className="rating">
              {!isWatched ? (
                <>
                  <StarRating
                    maxRating={10}
                    size={24}
                    onSetRating={setUserRating}
                  />
                  {Number(userRating) > 0 && (
                    <button className="btn-add" onClick={handleAdd}>
                      + Add to list
                    </button>
                  )}
                </>
              ) : (
                <p>
                  You rated with movie {watchedUserRating} <span>⭐️</span>
                </p>
              )}
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
