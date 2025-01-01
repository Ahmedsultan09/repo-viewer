import React, { useState } from "react";

function CommentForm({ setNewComment }) {
  const [commentBody, setCommentBody] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setNewComment(commentBody);
  }

  function handleChange(e) {
    setCommentBody(e.target.value);
  }
  return (
    <form>
      <textarea
        type="text"
        className="resize-none w-full h-32 p-3 outline-none border focus:border-black rounded-lg transition-all duration-300"
        onChange={handleChange}
      />
      <button
        type="submit"
        onClick={handleSubmit}
        className="w-11 border border-red-400 h-9"
      >
        Add
      </button>
      <button className="">Reset</button>
    </form>
  );
}

export default CommentForm;
