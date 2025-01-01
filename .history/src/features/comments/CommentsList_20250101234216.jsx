import React from "react";
import CommentItem from "./CommentItem";

function CommentsList({ comments, deleteComment }) {
  return (
    <article className="w-full ">
      <ul className="w-full">
        {comments.reverse().map((comment) => (
          <CommentItem
            comment={comment}
            deleteComment={deleteComment}
            key={comment.id}
          />
        ))}
      </ul>
    </article>
  );
}

export default CommentsList;
