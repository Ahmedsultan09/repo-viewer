import React, { useEffect, useState } from "react";
import CommentForm from "./CommentForm";
import CommentsList from "./CommentsList";
import { useParams } from "react-router-dom";

function Comments() {
  const [commentList, setCommentList] = useState([]);
  const [renderedComments, setRenderedComments] = useState([]);
  const { repoId } = useParams();

  useEffect(() => {
    const savedComments = window.localStorage.getItem(`${repoId}-comments`);

    setRenderedComments(JSON.parse(savedComments));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [commentList]);

  useEffect(() => {
    if (renderedComments) {
      console.log(renderedComments);
    }
  }, [renderedComments]);

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
