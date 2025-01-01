import React from "react";

function CommentsList() {
  return (
    <article className="w-full border border-red-500 my-2">
      <ui>
        <li className="w-full flex flex-col items-start justify-center">
          <details>
            <div>
              <h2>Comment Title</h2>
              <p>1/12/2024</p>
            </div>
            <span className="w-fit px-3 bg-black rounded-2xl text-white">
              General
            </span>
          </details>{" "}
        </li>
      </ui>
    </article>
  );
}

export default CommentsList;
