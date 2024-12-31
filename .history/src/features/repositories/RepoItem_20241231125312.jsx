import React from "react";

function RepoItem({ repoData }) {
  return (
    <article className="w-1/4 h-72 border rounded-xl">
      <p className="text-xl text-center py-2">{repoData.name}</p>
    </article>
  );
}

export default RepoItem;
