import React, { useState } from "react";
import {
  Box,
  ErrorMessage,
  Loader,
  Main,
  MovieDetails,
  MovieList,
  Navbar,
  NumResults,
  Search,
  WatchSummary,
  WatchedMoviesList,
  useLocalStorageState,
  useMovies,
} from "./components";

const App: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const { movies, isLoading, error } = useMovies(query);

  const [watched, setWatched] = useLocalStorageState([], "watched");

  function handleSelectMovie(id: string) {
    setSelectedId((prevId) => (id === prevId ? null : id));
  }

  function handleCloseMovie() {
    setSelectedId(null);
  }

  function handleAddWatched(movie) {
    
    setWatched((prevWatched) => [...prevWatched, movie]);
  }

  function handleDeleteWatched(id: string) {
    setWatched((prevWatched) =>
      prevWatched.filter((movie: { imdbID: string; }) => movie.imdbID !== id)
    );
  }

  return (
    <>
      <Navbar>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </Navbar>

      <Main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>

        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchSummary watched={watched} />
              <WatchedMoviesList
                watched={watched}
                onDeleteWatched={handleDeleteWatched}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
};

export default App;
