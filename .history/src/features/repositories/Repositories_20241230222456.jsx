import { useState, useEffect } from "react";

const Repositories = ({ repo }) => {
  useEffect(() => {
    async function fetchRepos() {
      const response = await fetch(
        "https://api.github.com/users/asultan.dev@gmail.com/repos"
      );
      const data = await response.json();
      console.log(data);
    }
    fetchRepos();
  }, []);
  return <div className="border p-4 mb-4 rounded">Repos</div>;
};

export default Repositories;