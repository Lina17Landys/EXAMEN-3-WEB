import React, { createContext, useState, ReactNode } from "react";
interface NewPoem {
  title: string;
  author: string;
  content: string[];
  linecount: number;
}

interface NewPoemContextType {
  poem: NewPoem;
  setPoem: (updatedPoem: Partial<NewPoem>) => void;
  resetPoem: () => void;
}

const initialPoem: NewPoem = {
  title: "",
  author: "",
  content: [],
  linecount: 0,
};

const NewPoemContext = createContext<NewPoemContextType | undefined>(undefined);

export const NewPoemProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [poem, setPoemState] = useState<NewPoem>(initialPoem);

  const setPoem = (updatedPoem: Partial<NewPoem>) => {
    setPoemState((prev) => ({
      ...prev,
      ...updatedPoem,
    }));
  };

  const resetPoem = () => {
    setPoemState(initialPoem);
  };

  return (
    <NewPoemContext.Provider value={{ poem, setPoem, resetPoem }}>
      {children}
    </NewPoemContext.Provider>
  );
};

