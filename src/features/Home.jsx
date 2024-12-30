import React, { useEffect } from "react";
import Repositories from "./repositories/Repositories";
import { useUserInfo } from "../context/UserContext";
import UserInfo from "../user/userInfo";

function Home() {
  const { user } = useUserInfo();

  useEffect(() => console.log(user), [user]);

  return (
    <main>
      <UserInfo />
      <Repositories />
    </main>
  );
}

export default Home;
