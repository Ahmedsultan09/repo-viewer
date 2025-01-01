import React from "react";
import useGetUserInfo from "../user/useGetUserInfo";

function CommentsList() {
  const { info } = useGetUserInfo();
  return (
    <article className="w-full bg-gray-100 my-2">
      <ui className="w-full">
        <li className="w-full flex flex-col items-start justify-center ">
          <div className="w-full lg:flex-row sm:flex-col  flex items-center justify-between p-2 relative">
            <img
              src={info.avatar_url}
              alt="profile-image"
              className="w-7 h-7 rounded-full absolute -top-2 -left-5 z-30 border border-lime-500"
            />
            <div>
              <h2>
                <strong>Comment Title</strong>
              </h2>
              <p className="opacity-50">1/12/2024</p>
            </div>
            <span className="w-fit px-3 bg-black rounded-2xl text-white">
              General
            </span>
          </div>{" "}
          <p className="w-full font-sans p-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi optio
            veniam officiis, excepturi ab architecto blanditiis eos nihil est
            quibusdam adipisci suscipit hic dolorum quia repellat unde impedit
            odio similique!
          </p>
        </li>
      </ui>
    </article>
  );
}

export default CommentsList;
