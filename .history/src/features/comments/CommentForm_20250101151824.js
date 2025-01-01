import React from "react";

function CommentForm() {
  return (
    <form>
      <textarea
        type="text"
        className="resize-none w-full h-32 p-3 outline-none border focus:border-black"
      />
    </form>
  );
}

export default CommentForm;
