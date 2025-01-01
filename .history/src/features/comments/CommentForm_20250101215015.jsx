import React, { useEffect, useRef, useState } from "react";

function CommentForm({ setCommentList, numOfComments }) {
  const [commentForm, setCommentForm] = useState({
    id: null,
    title: "",
    body: "",
    type: "general",
  });
  const [isFormValid, setIsFormValid] = useState(false);

  const textAreaRef = useRef(null);
  const inputRef = useRef(null);

  function handleChangeTitle(e) {
    setCommentForm((prev) => ({ ...prev, title: e.target.value }));
  }

  function handleChangeBody(e) {
    setCommentForm((prev) => ({ ...prev, body: e.target.value }));
  }

  function handleChangeType(e) {
    setCommentForm((prev) => ({ ...prev, type: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setCommentList((prev) => [
      ...prev,
      {
        id: numOfComments,
        title: commentForm.title,
        body: commentForm.body,
        type: commentForm.type,
      },
    ]);
    handleClear(); // Clear form after submission
  }

  function handleClear() {
    textAreaRef.current.value = "";
    inputRef.current.value = "";
    setCommentForm({ title: "", body: "", type: "general" });
  }

  useEffect(() => {
    setIsFormValid(commentForm.title !== "" && commentForm.body !== "");
  }, [commentForm]);

  return (
    <form className="w-full flex justify-center gap-2 flex-col border rounded-lg p-2">
      <input
        type="text"
        required
        ref={inputRef}
        onChange={handleChangeTitle}
        className="w-full h-14 p-3 outline-none border focus:border-black rounded-lg transition-all duration-300"
        placeholder="Comment Title"
      />
      <textarea
        className="resize-none w-full h-32 p-3 outline-none border focus:border-black rounded-lg transition-all duration-300"
        onChange={handleChangeBody}
        required
        ref={textAreaRef}
        placeholder="Comment Text"
      />
      <select
        className="w-full h-14 p-3 outline-none border focus:border-black rounded-lg transition-all duration-300 bg-white text-gray-700"
        id="type"
        onChange={handleChangeType}
      >
        <option value="general">General</option>
        <option value="bug-issue">Bug Issue</option>
        <option value="feature-request">Feature Request</option>
      </select>
      <div className="w-full flex-row-reverse flex justify-start gap-4 items-center">
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-24 h-7 text-xs p-2 my-1 rounded-lg text-white bg-green-800 uppercase font-bold disabled:bg-gray-600 disabled:opacity-70 transition-all duration-300"
          disabled={!isFormValid}
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
