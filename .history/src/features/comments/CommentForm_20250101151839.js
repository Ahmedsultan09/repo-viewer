import React from "react";

function CommentForm() {
  return (
    <form>
      <textarea
        type="text"
        className="resize-none w-full h-32 p-3 outline-none border focus:border-black rounded-lg transition-all duration-300"
      />
    </form>
  );
}

export default CommentForm;
