import React, { useState } from "react";
import useGetUserInfo from "./useGetUserInfo";
import Spinner from "../ui/Spinner";

function UserInfo() {
  const { info, isLoading } = useGetUserInfo();
  if (isLoading) return <Spinner />;
  return (
    <section>
      {info.bio} - {info.login} - {info.email}
    </section>
  );
}

export default UserInfo;
