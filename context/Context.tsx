import React, { FC, createContext, useState } from "react";

interface IContext {
  item: any;
  setItem: (item: any) => void;
  isEditing: boolean;
  setIsEditing: (editing: boolean) => void
  isUpdated: boolean;
  setIsUpdated: (updated: boolean) => void
  entryDeleted: boolean;
  setEntryDeleted: (entryDeleted: boolean) => void
}
export const Context = createContext<IContext|undefined>(undefined);

export const ContextProvider: FC = (props) => {
  const [item, setItem] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false)
  const [entryDeleted, setEntryDeleted] = useState(false);
  return (
    <Context.Provider value={{
      item,
      setItem,
      isEditing,
      setIsEditing,
      isUpdated,
      setIsUpdated,
      entryDeleted,
      setEntryDeleted,
    }}>
      {props.children}
      </Context.Provider>
  );
}