import { useEffect, useState } from "react";
import { useUserInfo } from "../../context/UserContext";

function useGetRepos() {
  const [repos, setRepos] = useState();
  const { user } = useUserInfo();
  useEffect(() => {
    async function fetchRepos() {
      const response = await fetch(
        `https://api.github.com/users/${userName}/repos`
      );
      const data = await response.json();
      setRepos(data);
    }
    fetchRepos();
  }, []);
  useEffect(() => console.log(user), [user]);
  return { repos };
}

export default useGetRepos;
