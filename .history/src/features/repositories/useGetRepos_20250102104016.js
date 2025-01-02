import { useEffect, useState } from "react";
import useGetUserInfo from "../user/useGetUserInfo";

function useGetRepos() {
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Ensure it starts as true
  const { info } = useGetUserInfo();
  const userName = info?.login;

  useEffect(() => {
    async function fetchRepos() {
      setIsLoading(true); // Start loading
      try {
        const response = await fetch(
          `https://api.github.com/users/${userName}/repos`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error("Error fetching repositories:", error);
      } finally {
        setIsLoading(false); // End loading
      }
    }

    if (userName) {
      fetchRepos();
    }
  }, [userName]);

  return [repos, isLoading];
}

export default useGetRepos;
