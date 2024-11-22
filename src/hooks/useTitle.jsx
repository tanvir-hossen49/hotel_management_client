import { useEffect } from "react";

const useTitle = title => {
  useEffect(() => {
    document.title = `Hotel Al Farah | ${title}`;

    return () => {
      document.title = "Hotel Al Farah";
    };
  }, [title]);
};

export default useTitle;
