import React, { useEffect } from "react";
import Repositories from "./repositories/Repositories";
import { useUserInfo } from "../context/UserContext";

function Home() {
  const { user } = useUserInfo();

  useEffect(() => console.log(user), [user]);

  return (
    <main>
      <Repositories />
    </main>
  );
}

export default Home;
