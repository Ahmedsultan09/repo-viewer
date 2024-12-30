import React, { useEffect, useState } from "react";

function useGetUserInfo() {
  const [info, setInfo] = useState({});
  const uid = window.localStorage.getItem("uid");
  useEffect(() => {
    async function fetchRepos() {
      const response = await fetch(`https://api.github.com/user/${uid}`);
      const data = await response.json();
      setInfo(data);
    }
    fetchRepos();
  }, []);
  return { info };
}

export default useGetUserInfo;
