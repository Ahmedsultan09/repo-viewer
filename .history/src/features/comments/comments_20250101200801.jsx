import React, { useEffect, useState } from "react";
import CommentForm from "./CommentForm";
import CommentsList from "./CommentsList";

function Comments() {
  const [commentList, setCommentList] = useState("");
  useEffect(() => {
    console.log(commentList);
  }, [setCommentList]);
  return (
    <article className="w-4/5 my-3 p-3">
      <CommentForm setCommentList={setCommentList} />
      <CommentsList />
    </article>
  );
}

export default Comments;
