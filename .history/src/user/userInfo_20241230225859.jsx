import React, { useState } from "react";
import useGetUserInfo from "./useGetUserInfo";

function UserInfo() {
  const { userInfo } = useGetUserInfo();
  return <div>{userInfo?.bio}</div>;
}

export default UserInfo;
