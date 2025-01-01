import React, { use, useEffect } from "react";
import UserInfo from "../features/user/userInfo";
import { useParams } from "react-router-dom";
import useGetRepoItem from "../features/repositories/useGetRepoItem";

function RepoItemPage() {
  const params = useParams();
  const repoItem = useGetRepoItem(params.id);
  useEffect(() => {
    console.log(repoItem);
  }, [repoItem]);
  return (
    <section className="w-full">
      <UserInfo />
      <h1>Comments for repo: {params.repoId}</h1>
    </section>
  );
}

export default RepoItemPage;
