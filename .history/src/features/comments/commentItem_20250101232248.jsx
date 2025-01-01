import React from "react";
import useGetUserInfo from "../user/useGetUserInfo";

function CommentItem({ comment, deleteComment }) {
  const { info } = useGetUserInfo();

  return (
    <li className="w-full flex flex-col items-start justify-center bg-gray-200 p-4 rounded-lg my-2 hover:scale-105 transition-all duration-300">
      <div className="w-full lg:flex-row flex-col  flex items-center justify-between p-2 relative">
        <img
          src={info.avatar_url}
          alt="profile-image"
          className="w-7 h-7 rounded-full absolute -top-2 -left-8 z-30 border border-lime-500"
        />
        <button
          className="w-7 h-7 rounded-full bg-red-800 text-white text-center absolute top-1/2 -right-10 translate-y-1/2 cursor-pointer hover:scale-150 transition-all duration-300"
          onClick={() => deleteComment(comment.id)}
        >
          -
        </button>
        <div>
          <h2>
            <strong>{comment.title}</strong>
          </h2>
          <p className="opacity-50">
            {new Date(comment.time).toLocaleString()}
          </p>
        </div>
        <span className="w-fit px-3 bg-black rounded-2xl text-white">
          {comment.type}
        </span>
      </div>{" "}
      <p className="w-full font-sans p-5 border border-gray-400 bg-white rounded-xl text-sm">
        {comment.body}
      </p>
    </li>
  );
}

export default CommentItem;
