import { FC } from "react";
import WatchedMovie from "./WatchedMovie";

const WatchedMoviesList: FC<WatchedMoviesListProps> = ({
  watched,
  onDeleteWatched,
}) => {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie
          movie={movie}
          key={movie.imdbID}
          onDeleteWatched={onDeleteWatched}
        />
      ))}
    </ul>
  );
};

export default WatchedMoviesList;
