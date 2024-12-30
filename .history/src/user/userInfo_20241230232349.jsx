import React, { useState } from "react";
import useGetUserInfo from "./useGetUserInfo";
import Spinner from "../ui/Spinner";

function UserInfo() {
  const { info } = useGetUserInfo();
  return (
    <section>
      {info.bio} - {info.login} - Public Repositories: {info.public_repos} -{" "}
      <img
        className="w-7 h-7 rounded-full inline"
        src={info.avatar_url}
        alt="avatar"
      />
    </section>
  );
}

export default UserInfo;
