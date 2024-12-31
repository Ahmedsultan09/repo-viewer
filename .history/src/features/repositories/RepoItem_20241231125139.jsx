import React from "react";

function RepoItem({ repoData }) {
  return (
    <article className="w-1/4 h-72 border rounded-xl">
      <p>{repoData.name}</p>
    </article>
  );
}

export default RepoItem;
