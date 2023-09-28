import  { useRef, FC } from "react";
import useKey from "./useKey";

const Search: FC<SearchProps> = ({ query, setQuery }) => {
  const inputEl = useRef<HTMLInputElement>(null);

  useKey("Enter", () => {
    if (document.activeElement === inputEl.current) return;
    inputEl.current?.focus();
    setQuery("");
  });

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputEl}
    />
  );
};

export default Search;
