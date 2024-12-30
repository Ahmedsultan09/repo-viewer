import React, { useState, useEffect } from "react";

const Repositories = ({ repo }) => {
  const [comments, setComments] = useState([]);

  //   useEffect(() => {
  //     const storedComments = localStorage.getItem(`comments_${repo.id}`);
  //     if (storedComments) {
  //       setComments(JSON.parse(storedComments));
  //     }
  //   }, [repo.id]);

  //   const addComment = (comment) => {
  //     const updatedComments = [...comments, comment];
  //     setComments(updatedComments);
  //     localStorage.setItem(
  //       `comments_${repo.id}`,
  //       JSON.stringify(updatedComments)
  //     );
  //   };

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
