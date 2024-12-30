import React, { useState, useEffect } from "react";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";

const Repositories = ({ repo }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const storedComments = localStorage.getItem(`comments_${repo.id}`);
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, [repo.id]);

  const addComment = (comment) => {
    const updatedComments = [...comments, comment];
    setComments(updatedComments);
    localStorage.setItem(
      `comments_${repo.id}`,
      JSON.stringify(updatedComments)
    );
  };

  return (
    <div className="border p-4 mb-4 rounded">
      <h2 className="text-xl font-bold">{repo.name}</h2>
      <p>{repo.description}</p>
      <a
        href={repo.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        View on GitHub
      </a>
      <CommentList comments={comments} />
      <CommentForm onAddComment={addComment} />
    </div>
  );
};

export default Repositories;
