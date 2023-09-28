/// <reference types="vite/client" />

interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
  runtime?: number;
  imdbRating?: number;
  userRating?: number;
}

interface StarRatingProps {
  maxRating: number;
}

interface StarProps {
  color: string;
}


interface StarRatingProps {
  maxRating?: number;
  color?: string;
  size?: number;
}

interface StarProps {
  color: string;
  onRate: () => void;
}

interface StarProps {
  color: string;
  onRate: () => void;
  full: boolean;
  onHoverIn: () => void;
  onHoverOut: () => void;
  size: number;
}