import React from "react";

function CommentsList() {
  return (
    <article className="w-full border border-red-500 my-2">
      <ui>
        <li>
          <div>
            <div>
              <h2>Comment Title</h2>
              <p>1/12/2024=5</p>
            </div>
            <span className="w-fit px-3 bg-black rounded-2xl text-white">
              General
            </span>
          </div>{" "}
        </li>
      </ui>
    </article>
  );
}

export default CommentsList;
