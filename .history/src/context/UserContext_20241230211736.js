import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const useUserInfo = () => useContext(UserContext);

export function UserProvider({ children }) {
  const [user, setUser] = useState({});
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
