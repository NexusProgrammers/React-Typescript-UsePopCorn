/// <reference types="vite/client" />

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
  Ratings: [];
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
  imdbVotes: string;
}

interface StarRatingProps {
  maxRating: number;
}

interface StarRatingProps {
  maxRating?: number;
  color?: string;
  size?: number;
}

interface SearchProps {
  query: string;
  setQuery: (query: string) => void;
}

interface StarRatingProps {
  maxRating?: number;
  color?: string;
  size?: number;
  className?: string;
  messages?: string[];
  defaultRating?: number;
  onSetRating: (rating: number) => void;
}

interface WatchedMovieProps {
  movie: {
    imdbID: string;
    title: string;
    poster: string;
    imdbRating: string;
    userRating: string;
    runtime: string;
  };
  onDeleteWatched: (id: string) => void;
}

interface MovieDetailsProps {
  selectedId: string;
  onCloseMovie: () => void;
  onAddWatched: (movie: Movie) => void;
  watched: Movie[];
}

interface StarProps {
  full: boolean;
  onRate: () => void;
  onHoverIn: () => void;
  onHoverOut: () => void;
  color: string;
  size: number;
}

interface WatchedMoviesListProps {
  watched: {
    imdbID: string;
    title: string;
    poster: string;
    imdbRating: string;
    userRating: string;
    runtime: string;
  }[];
  onDeleteWatched: (id: string) => void;
}

interface WatchSummaryProps {
  watched: Movie[];
}
