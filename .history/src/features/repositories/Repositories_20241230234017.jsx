import { useState, useEffect } from "react";
import UserInfo from "../../user/userInfo";
import useGetRepos from "./useGetRepos";

const Repositories = ({ repo }) => {
  const { repos } = useGetRepos();
  return <div className="border p-4 mb-4 rounded">Repos</div>;
};

export default Repositories;
