import Repositories from "./repositories/Repositories";
import UserInfo from "./user/userInfo";

function Home() {
  return (
    <main>
      <UserInfo />
      <Repositories />
    </main>
  );
}

export default Home;
