import React from "react";
import average from "./Average";

const WatchSummary: React.FC<WatchSummaryProps> = ({ watched }) => {
  const avgImdbRating = average(
    watched.map((movie) => parseFloat(movie.imdbRating))
  );
  const avgUserRating = average(
    watched.map((movie) => parseFloat(movie.userRating))
  );
  const avgRuntime = average(watched.map((movie) => parseFloat(movie.runtime)));

  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating.toFixed(2)}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating.toFixed(2)}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime.toFixed(2)} min</span>
        </p>
      </div>
    </div>
  );
};

export default WatchSummary;
