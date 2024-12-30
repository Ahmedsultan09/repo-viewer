import { useEffect, useState } from "react";
import { useUserInfo } from "../../context/UserContext";
import UserInfo from "../../user/userInfo";

function useGetRepos() {
  const [repos, setRepos] = useState();
  const uid = window.localStorage.getItem("uid");
  const { info } = UserInfo();
  useEffect(() => {
    async function fetchRepos() {
      const userName = info?.login;

      const response = await fetch(
        `https://api.github.com/users/${userName}/repos`
      );
      const data = await response.json();
      setRepos(data);
    }
    fetchRepos();
  }, [info]);

  useEffect(() => {
    console.log(repos);
  }, [repos]);
  return { repos };
}

export default useGetRepos;

//mkatuv4ECPcXM8HnnWISzVkPnFh2
