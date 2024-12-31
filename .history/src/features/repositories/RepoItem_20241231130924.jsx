import React from "react";

function RepoItem({ repoData }) {
  return (
    <article className="w-1/4 h-72 border rounded-xl">
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
          Visit On Github
        </a>
        <button className="w-1/2 rounded bg-cyan-700 text-xs text-white">
          Add Comment
        </button>
      </div>
    </article>
  );
}

export default RepoItem;
