import React from "react";

function RepoItem({ repoData }) {
  return (
    <article className="w-1/4 h-72 border rounded-xl">
      <p className="text-2xl text-center">{repoData.name}</p>
    </article>
  );
}

export default RepoItem;
