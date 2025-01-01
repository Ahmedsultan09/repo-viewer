import React, { useEffect, useState } from "react";
import CommentForm from "./CommentForm";

function Comments() {
  const [newComment, setNewComment] = useState("");
  useEffect(() => {
    console.log(newComment);
  });
  return (
    <section className="w-4/5 my-3 p-3">
      <CommentForm setNewComment={setNewComment} />
    </section>
  );
}

export default Comments;
