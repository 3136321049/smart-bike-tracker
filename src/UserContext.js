import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userId] = useState('');

  return (
    <UserContext.Provider value={{ userId}}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
