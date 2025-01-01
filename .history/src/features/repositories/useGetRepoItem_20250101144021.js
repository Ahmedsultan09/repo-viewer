import { useState, useEffect } from "react";

function useGetRepoItem(repoId) {
  const [repoItem, setRepoItem] = useState(null);

  useEffect(() => {
    async function fetchRepoItem() {
      try {
        const response = await fetch(
          `https://api.github.com/repositories/${repoId}`
        );
        const data = await response.json();
        setRepoItem(data);
      } catch (error) {
        console.log(error);
      }
    }

    if (repoId) {
      fetchRepoItem();
    }
  }, [repoId]); // Dependency array ensures this runs only when `repoId` changes

  return { repoItem };
}

export default useGetRepoItem;
