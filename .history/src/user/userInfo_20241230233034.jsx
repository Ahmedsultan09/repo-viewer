import React, { useState } from "react";
import useGetUserInfo from "./useGetUserInfo";
import Spinner from "../ui/Spinner";

function UserInfo() {
  const { info } = useGetUserInfo();
  return (
    <section className="w-full border p-4 mb-4 rounded flex items-center justify-around">
      <ul className="w-full flex flex-col items-start justify-around">
        <li>Bio: {info.bio}</li>
        <li>Username: {info.login}</li>
        <li>Public Repositories: {info.public_repos}</li>
      </ul>
    </section>
  );
}

export default UserInfo;
