import React from "react";
import useGetUserInfo from "../user/useGetUserInfo";

function CommentsList() {
  const { info } = useGetUserInfo();
  return (
    <article className="w-full border border-red-500 my-2">
      <ui className="w-full">
        <li className="w-full flex flex-col items-start justify-center border border-red-500">
          <div className="w-full lg:flex-row sm:flex-col  flex items-center justify-between p-2 relative">
            <img
              src={info.avatar_url}
              alt="profile-image"
              className="w-7 h-7 rounded-full absolute -top-2 -left-2 z-30"
            />
            <div>
              <h2>
                <strong>Comment Title</strong>
              </h2>
              <p>1/12/2024</p>
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
