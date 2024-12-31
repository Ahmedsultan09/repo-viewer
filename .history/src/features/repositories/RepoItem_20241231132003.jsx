import ghLogo from "../../assets/images/github-mark-white.svgpng";
function RepoItem({ repoData }) {
  return (
    <article className="w-1/4 h-72 border rounded-xl flex justify-between flex-col p-3">
      <p className="text-xl text-center py-2">{repoData.name}</p>
      <p className="text-sm text-gray-600 text-center py-2">
        Release Date: {new Date(repoData.created_at).toLocaleDateString()}
      </p>
      <div className="w-full flex flex-row items-center justify-between gap-6">
        {" "}
        <a
          href={repoData.html_url}
          target="_blank"
          rel="noreferrer"
          className="w-1/2 rounded bg-emerald-700 text-xs text-white flex items-center justify-center"
        >
          <img
            src={ghLogo}
            alt="github-logo"
            className="w-auto h-5 filter invert"
          />
        </a>
        <button className="w-1/2 h-5 rounded bg-sky-700 text-xs text-white">
          Add Comment
        </button>
      </div>
    </article>
  );
}

export default RepoItem;
