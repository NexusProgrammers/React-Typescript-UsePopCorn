import { useEffect } from "react";

const useKey = (key: string, action: () => void) => {
  useEffect(() => {
    function callback(e: KeyboardEvent) {
      if (e.code.toLowerCase() === key.toLowerCase()) {
        action();
      }
    }

    document.addEventListener("keydown", callback);

    return () => {
      document.removeEventListener("keydown", callback);
    };
  }, [action, key]);
};

export default useKey;
