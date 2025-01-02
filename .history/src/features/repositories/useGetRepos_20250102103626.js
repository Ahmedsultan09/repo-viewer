import { useEffect, useState } from "react";
import useGetUserInfo from "../user/useGetUserInfo";

function useGetRepos() {
  const [repos, setRepos] = useState([]);
  const { info } = useGetUserInfo();
  const userName = info.login;

  useEffect(() => {
    async function fetchRepos() {
      const response = await fetch(
        `https://api.github.com/users/${userName}/repos`
      );
      const data = await response.json();
      setRepos(data);
    }
    fetchRepos();
  }, [userName]);

  return [repos];
}

export default useGetRepos;
