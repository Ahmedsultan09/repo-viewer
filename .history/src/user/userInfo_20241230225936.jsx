import React, { useState } from "react";
import useGetUserInfo from "./useGetUserInfo";

function UserInfo() {
  const { info } = useGetUserInfo();
  return <div>{info.bio}</div>;
}

export default UserInfo;
