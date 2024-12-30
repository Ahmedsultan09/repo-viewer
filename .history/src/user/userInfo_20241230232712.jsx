import React, { useState } from "react";
import useGetUserInfo from "./useGetUserInfo";
import Spinner from "../ui/Spinner";

function UserInfo() {
  const { info } = useGetUserInfo();
  return (
    <section className="w-full border p-4 mb-4 rounded flex items-center justify-around">
      <span>{info.bio}</span> - <span> {info.login}</span> -{" "}
      <span> Public Repositories: {info.public_repos}</span> -{" "}
      <span>
        {" "}
        <img
          className="w-7 h-7 rounded-full inline"
          src={info.avatar_url}
          alt="avatar"
        />
      </span>
    </section>
  );
}

export default UserInfo;
