import React, { createContext, useState, Dispatch, SetStateAction, ReactNode } from "react";

interface UserContextType {
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
};

export const UserContext = createContext<UserContextType>({
  isLoggedIn: false,
  setIsLoggedIn: () => {}
});

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            {children}
        </UserContext.Provider>
    )
}
