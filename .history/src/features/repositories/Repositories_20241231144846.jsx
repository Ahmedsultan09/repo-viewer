import { useState, useEffect } from "react";
import UserInfo from "../user/userInfo";
import useGetRepos from "./useGetRepos";
import RepoItem from "./RepoItem";

const Repositories = () => {
  const [repos] = useGetRepos();
  return (
    <section className="border p-4 mb-4 rounded">
      <h2 className="text-center text-3xl my-4 font-bold">
        Public Repositories
      </h2>
      <div className=" flex flex-row justify-around flex-wrap gap-4">
        {repos.map((repo) => (
          <RepoItem repoData={repo} key={repo.id} />
        ))}
      </div>
    </section>
  );
};

export default Repositories;
