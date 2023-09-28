const NumResults = ({ movies }: { movies: Movie[] }) => {
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
};

export default NumResults;
