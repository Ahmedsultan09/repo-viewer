import React, { useEffect, useState } from "react";
import CommentForm from "./CommentForm";
import CommentsList from "./CommentsList";
import { useParams } from "react-router-dom";

function Comments() {
  const [commentList, setCommentList] = useState([]);
  const { repoId } = useParams();

  const savedComments = window.localStorage.getItem(`${repoId}-comments`);
  useEffect(() => {
    console.log(JSON.parse(savedComments));
  }, [savedComments]);

  useEffect(() => {
    if (commentList.length > 0) {
      window.localStorage.setItem(
        `${repoId}-comments`,
        JSON.stringify(commentList)
      );
    }
  }, [commentList, repoId]);
  return (
    <article className="w-4/5 my-3 p-3">
      <CommentForm setCommentList={setCommentList} />
      <CommentsList />
    </article>
  );
}

export default Comments;
