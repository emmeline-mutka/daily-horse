import React, { FC, createContext, useState } from "react";

interface IContext {
  item: any;
  setItem: (item: any) => void;
  isEditing: boolean;
  setIsEditing: (editing: boolean) => void;
}
export const Context = createContext<IContext|undefined>(undefined);

export const ContextProvider: FC = (props) => {
  const [item, setItem] = useState({});
  const [isEditing, setIsEditing] = useState(false)
  return (
    <Context.Provider value={{
      item,
      setItem,
      isEditing,
      setIsEditing
    }}>
      {props.children}
      </Context.Provider>
  );
}