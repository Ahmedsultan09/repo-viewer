import { useState } from "react";

function useGetRepoItem(repoId) {
  const [repoItem, setRepoItem] = useState(null);

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
  fetchRepoItem();

  return { repoItem };
}

export default useGetRepoItem;
