import { useEffect, useState } from "react";
import { useUserInfo } from "../../context/UserContext";

function useGetRepos() {
  const [repos, setRepos] = useState();
  useEffect(() => {
    async function fetchRepos() {
      const response = await fetch(`https://api.github.com/user/45336809`);
      const data = await response.json();
      setRepos(data);
    }
    fetchRepos();
  }, []);
  return { repos };
}

export default useGetRepos;

//mkatuv4ECPcXM8HnnWISzVkPnFh2
