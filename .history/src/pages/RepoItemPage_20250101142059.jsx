import React from "react";
import UserInfo from "../features/user/userInfo";
import { useParams } from "react-router-dom";

function RepoItemPage() {
  const params = useParams();
  return (
    <section className="w-full">
      <UserInfo />
      <h1>Comments for repo: {params.repoId}</h1>
    </section>
  );
}

export default RepoItemPage;
