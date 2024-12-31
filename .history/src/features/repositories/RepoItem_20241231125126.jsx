import React from "react";

function RepoItem({ repo }) {
  return (
    <article className="w-1/4 h-72 border rounded-xl">
      <p>{repo.name}</p>
    </article>
  );
}

export default RepoItem;
