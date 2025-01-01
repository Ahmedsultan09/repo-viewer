import React from "react";
import useGetUserInfo from "../user/useGetUserInfo";
import CommentItem from "./CommentItem";

function CommentsList({ comments }) {
  return (
    <article className="w-full ">
      <ul className="w-full">
        {comments.map((comment) => (
          <CommentItem comment={comment} />
        ))}
      </ul>
    </article>
  );
}

export default CommentsList;
