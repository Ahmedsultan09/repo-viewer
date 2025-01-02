import { useEffect, useState } from "react";
import useGetUserInfo from "../user/useGetUserInfo";

function useGetRepos() {
  const [repos, setRepos] = useState([]);
  const { info } = useGetUserInfo();
  const userName = info.login;
  const githubEndpoint = process.env.GITHUB_ENDPOINT;

  useEffect(() => {
    async function fetchRepos() {
      const response = await fetch(`${githubEndpoint}/users/${userName}/repos`);
      const data = await response.json();
      setRepos(data);
    }
    fetchRepos();
  }, [userName, githubEndpoint]);

  return [repos];
}

export default useGetRepos;
