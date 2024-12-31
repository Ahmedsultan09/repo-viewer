import React from "react";

function RepoItem({ repoData }) {
  return (
    <article className="w-1/4 h-72 border rounded-xl">
      <p className="text-xl text-center py-2">{repoData.name}</p>
      <p className="text-sm text-gray-600 text-center py-2">
        Release Date: {new Date(repoData.pushed_at).toLocaleDateString()}
      </p>
    </article>
  );
}

export default RepoItem;
