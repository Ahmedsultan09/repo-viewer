import React, { useEffect, useState } from "react";

function useGetUserInfo() {
  const [info, setInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const uid = window.localStorage.getItem("uid");
  useEffect(() => {
    async function fetchRepos() {
      const response = await fetch(`https://api.github.com/user/${uid}`);
      const data = await response.json();
      if (response.ok) {
        setInfo(data);
        setIsLoading(false);
      } else {
        setIsLoading(true);
      }
    }
    fetchRepos();
  }, [uid]);
  return { info, isLoading };
}

export default useGetUserInfo;
