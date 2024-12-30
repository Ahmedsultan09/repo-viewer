import React, { useState } from "react";
import useGetUserInfo from "./useGetUserInfo";
import Spinner from "../ui/Spinner";

function UserInfo() {
  const { info } = useGetUserInfo();
  return (
    <section>
      {info.bio} - {info.login} - Public Repositories: {info.public_repos}
    </section>
  );
}

export default UserInfo;
