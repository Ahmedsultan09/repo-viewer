import React, { useEffect, useState } from "react";
import CommentForm from "./CommentForm";
import CommentsList from "./CommentsList";

function Comments() {
  const [commentList, setCommentList] = useState(() => {
    const savedComments = window.localStorage.getItem("comments");
    return savedComments.length > 0 ? savedComments : [];
  });
  useEffect(() => {
    console.log(commentList);
  }, [commentList]);

  useEffect(() => {
    if (commentList.length > 0) {
      window.localStorage.setItem("comments", JSON.stringify(commentList));
    }
  }, [commentList]);
  return (
    <article className="w-4/5 my-3 p-3">
      <CommentForm setCommentList={setCommentList} />
      <CommentsList />
    </article>
  );
}

export default Comments;
