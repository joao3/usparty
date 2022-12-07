import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext({ email: "" });

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  function Login(email) {
    setUser(email);
    console.log(user);
  }

  return (
    <AuthContext.Provider value={{ signed: Boolean(user), user, Login }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export default AuthContext;
