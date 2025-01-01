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
    <form className="w-full flex justify-center flex-col border border-gray-300 p-2">
      <textarea
        type="text"
        className="resize-none w-full h-32 p-3 outline-none border focus:border-black rounded-lg transition-all duration-300"
        onChange={handleChange}
        required={true}
      />
      <div className="w-full flex-row-reverse flex justify-start gap-4 items-center">
        {" "}
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-24 h-7 text-xs p-2 my-1 rounded-lg text-white bg-green-800 uppercase font-bold"
        >
          Add
        </button>
        <button className="w-24 h-7 text-xs p-2 my-1 rounded-lg text-white bg-yellow-700">
          Reset
        </button>
      </div>
    </form>
  );
}

export default CommentForm;
