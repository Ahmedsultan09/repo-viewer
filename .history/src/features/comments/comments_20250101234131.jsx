import { useEffect, useState } from "react";
import CommentForm from "./CommentForm";
import CommentsList from "./CommentsList";
import { useParams } from "react-router-dom";

function Comments() {
  const { repoId } = useParams();
  const [commentList, setCommentList] = useState([]);

  const numOfComments = commentList.length - 1;

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

  function handleDeleteComment(id) {
    const filteredComments = commentList.filter((comment) => comment.id !== id);
    setCommentList(filteredComments);
  }
  return (
    <article className="w-4/5 my-3 p-3">
      <CommentForm
        setCommentList={setCommentList}
        numOfComments={numOfComments}
      />
      <CommentsList
        comments={commentList}
        deleteComment={handleDeleteComment}
      />
    </article>
  );
}

export default Comments;
