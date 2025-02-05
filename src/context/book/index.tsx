import { createContext, useContext } from "react";
import { useFetch } from "../../hooks/use-fetch";
import { getAll } from "../../server/BooksAPI";
import { BookVolume } from "../../@types/book";
import { Outlet } from "react-router";

type BookContextType = {
  data: BookVolume[] | null;
  isLoading: boolean;
  refetch: () => Promise<void>;
};

export const BookContext = createContext<BookContextType>(
  {} as BookContextType
);

export const BookProvider = () => {
  const { data, isLoading, refetch } = useFetch<BookVolume[]>({
    fetchFunction: getAll,
  });

  return (
    <BookContext.Provider
      value={{
        data,
        isLoading,
        refetch,
      }}
    >
      <Outlet />
    </BookContext.Provider>
  );
};

export const useBook = () => useContext(BookContext);
