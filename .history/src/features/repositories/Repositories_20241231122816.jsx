import { useState, useEffect } from "react";
import UserInfo from "../user/userInfo";
import useGetRepos from "./useGetRepos";
import RepoItem from "./RepoItem";

const Repositories = () => {
  const [repos] = useGetRepos();
  return (
    <section className="border p-4 mb-4 rounded flex flex-row justify-around flex-wrap gap-4">
      <h2>Public Repositories</h2>
      {repos.map((repo) => (
        <RepoItem repoData={repo} />
      ))}
    </section>
  );
};

export default Repositories;
