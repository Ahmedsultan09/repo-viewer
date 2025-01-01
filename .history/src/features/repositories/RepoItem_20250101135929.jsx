import ghLogo from "../../assets/images/github-mark-white.svg";
function RepoItem({ repoData }) {
  return (
    <article className="w-1/4 h-44 border rounded-xl flex bg-white justify-between flex-col p-3 hover:filter hover:invert">
      <p className="text-xl text-center py-2">{repoData.name}</p>
      <p className="text-xs text-gray-600 text-center py-2">
        <strong>Release Date:</strong>{" "}
        {new Date(repoData.created_at).toLocaleDateString()}
      </p>
      <p className="text-gray-600 text-xs text-center">
        <strong>Most used Language:</strong>{" "}
        {repoData.language ? repoData.language : "Not found"}
      </p>
      <div className="w-full flex flex-row items-center justify-between gap-6">
        {" "}
        <a
          href={repoData.html_url}
          target="_blank"
          rel="noreferrer"
          className="w-1/2 rounded bg-gradient-to-r from-gray-900 to-gray-900 text-xs text-white flex items-center justify-center"
        >
          <img src={ghLogo} alt="github-logo" className="w-auto h-5 py-1" />
        </a>
        <button className="w-1/2 h-5 rounded bg-gradient-to-r from-zinc-700 to-rose-800 text-xs text-white font-bold uppercase">
          Add Comment
        </button>
      </div>
    </article>
  );
}

export default RepoItem;
