import { useState, useEffect } from "react";
import UserInfo from "../../user/userInfo";

const Repositories = ({ repo }) => {
  return (
    <div className="border p-4 mb-4 rounded">
      <UserInfo />
    </div>
  );
};

export default Repositories;
