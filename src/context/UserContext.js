import React, { createContext, useState, useEffect } from "react";


export const UserContext = createContext();

console.log('UserContext created:', UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  useEffect(() => {
    if (token) {
      fetchUserDetails(token);
    }
  }, [token]);

  const fetchUserDetails = async (token) => {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_BASE_URL}/users/details`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        const userData = await res.json();
        setUser(userData);
      } else {
        setUser(null);
        setToken(null);
        localStorage.removeItem("token");
      }
    } catch {
      setUser(null);
      setToken(null);
      localStorage.removeItem("token");
    }
  };

  const login = async (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
    await fetchUserDetails(newToken);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, token, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

