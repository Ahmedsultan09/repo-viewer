import { useEffect, useState } from "react";

function useGetRepoItem(repoId) {
  const [repoItem, setRepoItem] = useState(null);
  useEffect(() => {
    async function fetchRepoItem() {
      const response = await fetch(
        `https://api.github.com/repositories/${repoId}`
      );
      const data = await response.json();
      setRepoItem(data);
    }
    fetchRepoItem();
  }, [repoId]);

  return { repoItem };
}

export default useGetRepoItem;
