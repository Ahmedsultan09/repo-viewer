import React, { useEffect, useState } from "react";
import CommentForm from "./CommentForm";
import CommentsList from "./CommentsList";
import { useParams } from "react-router-dom";

function Comments() {
  const { repoId } = useParams();
  const [commentList, setCommentList] = useState([]);

  // Load comments from local storage on mount
  useEffect(() => {
    const savedComments =
      JSON.parse(localStorage.getItem(`${repoId}-comments`)) || [];
    setCommentList(savedComments);
  }, [repoId]);

  // Sync commentList with local storage
  useEffect(() => {
    localStorage.setItem(`${repoId}-comments`, JSON.stringify(commentList));
  }, [commentList, repoId]);

  return (
    <article className="w-4/5 my-3 p-3">
      <CommentForm setCommentList={setCommentList} />
      <CommentsList comments={commentList} />
    </article>
  );
}

export default Comments;