import ghLogo from "../../assets/images/GitHub_Logo.png";
function RepoItem({ repoData }) {
  return (
    <article className="w-1/4 h-72 border rounded-xl flex justify-between flex-col p-3">
      <p className="text-xl text-center py-2">{repoData.name}</p>
      <p className="text-sm text-gray-600 text-center py-2">
        Release Date: {new Date(repoData.created_at).toLocaleDateString()}
      </p>
      <div className="w-full flex flex-row items-center justify-between">
        {" "}
        <a
          href={repoData.html_url}
          target="_blank"
          rel="noreferrer"
          className="w-1/2 rounded bg-emerald-700 text-xs text-white"
        >
          <img src={ghLogo} alt="github-logo" className=" size-1" />
        </a>
        <button className="w-1/2 rounded bg-sky-700 text-xs text-white">
          Add Comment
        </button>
      </div>
    </article>
  );
}

export default RepoItem;
