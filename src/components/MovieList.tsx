import React from "react";
import Movie from "./Movie";

interface MovieListProps {
  movies: Movie[];
  onSelectMovie: (id: string) => void;
}

const MovieList: React.FC<MovieListProps> = ({ movies, onSelectMovie }) => {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} onSelectMovie={onSelectMovie} />
      ))}
    </ul>
  );
};

export default MovieList;
