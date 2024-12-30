import { useState, useEffect } from "react";
import UserInfo from "../../user/userInfo";
import useGetRepos from "./useGetRepos";
import RepoItem from "./RepoItem";

const Repositories = () => {
  const [...repos] = useGetRepos();
  return (
    <section className="border p-4 mb-4 rounded">
      {repos?.map((repo) => (
        <RepoItem repoData={repo} />
      ))}
    </section>
  );
};

export default Repositories;
