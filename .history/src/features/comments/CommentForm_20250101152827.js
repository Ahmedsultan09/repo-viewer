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
    <form className="w-full flex justify-center flex-col">
      <textarea
        type="text"
        className="resize-none w-full h-32 p-3 outline-none border focus:border-black rounded-lg transition-all duration-300"
        onChange={handleChange}
      />
      <div className="w-full flex justify-end gap-4 items-center">
        {" "}
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-24 h-9 p-2 my-1 rounded-xl text-white"
        >
          Add
        </button>
        <button className="w-24 h-9 p-2 my-1 rounded-xl text-white">
          Reset
        </button>
      </div>
    </form>
  );
}

export default CommentForm;
