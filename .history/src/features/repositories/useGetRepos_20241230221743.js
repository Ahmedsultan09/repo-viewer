import React, { useEffect, useState } from "react";

function useGetRepos() {
  const [repos, setRepos] = useState();
  useEffect(() => {
    async function fetchRepos() {
      const response = await fetch(
        "https://api.github.com/users/ahmedsultan09/repos"
      );
      const data = await response.json();
      setRepos(data);
    }
    fetchRepos();
  }, []);
  return <div>useGetRepos</div>;
}

export default useGetRepos;
