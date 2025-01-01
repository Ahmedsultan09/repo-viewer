import React, { useRef, useState } from "react";

function CommentForm({ setNewComment }) {
  const [commentBody, setCommentBody] = useState("");
  const textAreaRef = useRef(null);
  const inputRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    setNewComment(commentBody);
  }

  function handleChange(e) {
    setCommentBody(e.target.value);
  }

  function handleClear() {
    textAreaRef.current.value = "";
    inputRef.current.value = "";
    setCommentBody("");
  }
  return (
    <form className="w-full flex justify-center gap-2 flex-col border rounded-lg p-2">
      <input
        type="text"
        required={true}
        ref={inputRef}
        className="w-full h-14 p-3 outline-none border focus:border-black rounded-lg transition-all duration-300"
        placeholder="Comment Title"
      />
      <textarea
        type="text"
        className="resize-none w-full h-32 p-3 outline-none border focus:border-black rounded-lg transition-all duration-300"
        onChange={handleChange}
        required={true}
        ref={textAreaRef}
        placeholder="Comment Text"
      />

      <select
        className="w-full h-14 p-3 outline-none border focus:border-black rounded-lg transition-all duration-300 bg-white text-gray-700"
        id="type"
      >
        <option
          value="general"
          className="h-40 text-gray-800 hover:bg-gray-100"
        >
          General
        </option>
        <option
          value="bug-issue"
          className="h-12 text-gray-800 hover:bg-gray-100"
        >
          Bug Issue
        </option>
        <option
          value="feature-request"
          className="h-12 text-gray-800 hover:bg-gray-100"
        >
          Feature Request
        </option>
      </select>

      <div className="w-full flex-row-reverse flex justify-start gap-4 items-center">
        {" "}
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-24 h-7 text-xs p-2 my-1 rounded-lg text-white bg-green-800 uppercase font-bold disabled:bg-gray-600 disabled:opacity-70 transition-all duration-300"
          disabled={!commentBody.length > 0}
        >
          Add
        </button>
        <button
          className="w-24 h-7 text-xs p-2 my-1 rounded-lg text-white bg-yellow-700"
          onClick={handleClear}
          type="button"
        >
          Clear
        </button>
      </div>
    </form>
  );
}

export default CommentForm;
