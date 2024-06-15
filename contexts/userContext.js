// UserContext.js
import React, {createContext, useState, useContext} from 'react';

// Create the context
const UserContext = createContext();

// Create a provider component
export const UserProvider = ({children}) => {
  const [user, setUser] = useState({
    name: 'Ibrahim Taibi',
    image: require('../assets/icons/Profile.png'),
    email: 'IbrahimTaibi2308@gmail.com',
    phone: '48225667',
    rating: '4.00 ',
  });

  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the UserContext
export const useUser = () => useContext(UserContext);
