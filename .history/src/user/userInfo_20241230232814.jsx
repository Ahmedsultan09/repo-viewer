import React, { useState } from "react";
import useGetUserInfo from "./useGetUserInfo";
import Spinner from "../ui/Spinner";

function UserInfo() {
  const { info } = useGetUserInfo();
  return (
    <section className="w-full border p-4 mb-4 rounded flex items-center justify-around">
      <span>{info.bio}</span> - <span> {info.login}</span> -{" "}
      <span> Public Repositories: {info.public_repos}</span>
    </section>
  );
}

export default UserInfo;
