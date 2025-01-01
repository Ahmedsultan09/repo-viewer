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
    <form className="w-full flex justify-center flex-col border rounded-lg p-2">
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

      <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option value="general">General</option>
        <option value="bug-issue">Bug Issue</option>
        <option value="feature-request">Feature Request</option>
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
