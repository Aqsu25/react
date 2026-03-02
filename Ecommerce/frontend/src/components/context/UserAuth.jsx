import { createContext, useState } from "react";

export const UserAuthContext = createContext();

export const UserAuthProvider = ({ children }) => {
  const userInfo = localStorage.getItem("userInfo");
  const [user, setUser] = useState(userInfo ? JSON.parse(userInfo) : null);

  const login = (user) => {
    localStorage.setItem("userInfo", JSON.stringify(user));
    setUser(user);
  };
  const logout = () => {
    localStorage.removeItem("userInfo");
    setUser(null);
  };
  return (
    <UserAuthContext.Provider value={{ user, login, logout }}>
      {children}
    </UserAuthContext.Provider>
  );
};
