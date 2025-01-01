import UserInfo from "../features/user/userInfo";
import { useParams } from "react-router-dom";
import useGetRepoItem from "../features/repositories/useGetRepoItem";
import Comments from "../features/comments/Comments";

function RepoItemPage() {
  const params = useParams();
  const { repoItem } = useGetRepoItem(params.repoId);

  return (
    <section className="w-full flex flex-col items-center justify-center">
      <UserInfo />
      <h1 className="w-full text-center text-2xl">
        Comments for repo: <strong>{repoItem?.name}</strong>
      </h1>

      <Comments />
    </section>
  );
}

export default RepoItemPage;
