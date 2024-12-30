import useGetUserInfo from "./useGetUserInfo";

function UserInfo() {
  const { info } = useGetUserInfo();
  return (
    <section className="w-full border p-4 mb-4 rounded flex items-center justify-around">
      <ul className="w-full flex flex-col items-start justify-around">
        <li>
          <strong>Bio:</strong> {info.bio}
        </li>
        <li>
          {" "}
          <strong>Username:</strong> {info.login}
        </li>
        <li>
          <strong>Public Repositories:</strong> {info.public_repos}
        </li>
        <li>
          <strong>Joining Date:</strong>{" "}
          {new Date(info.created_at).toLocaleDateString()}
        </li>
      </ul>
    </section>
  );
}

export default UserInfo;
