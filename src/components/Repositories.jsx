import { useState, useEffect } from "react";

const Repositories = ({ repo }) => {
  return (
    <div className="border p-4 mb-4 rounded">
      <h2 className="text-xl font-bold">Hello</h2>
      <p>Description</p>
      <a
        href="/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        View on GitHub
      </a>
      {/* <CommentList comments={comments} />
      <CommentForm onAddComment={addComment} /> */}
    </div>
  );
};

export default Repositories;
