import { createContext, useContext, useState } from "react";

const HistoryContext = createContext();

function HistoryProvider({ children }) {
  const [searchHistory, setSearchHistory] = useState([]);

  return (
    <HistoryContext.Provider
      value={{
        searchHistory,
        setSearchHistory,
      }}
    >
      {children}
    </HistoryContext.Provider>
  );
}

function useSearchHistory() {
  const history = useContext(HistoryContext);
  if (history === undefined)
    throw new Error("PostContext was used outside of the postProvider");
  return history;
}

export { HistoryProvider, useSearchHistory };
