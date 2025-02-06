import { useState } from "react";
import { useFetch } from "../../hooks/use-fetch";
import { search } from "../../server/BooksAPI";
import { BookVolume } from "../../@types/book";
import { Book } from "../_components/book";
import { useNavigate } from "react-router";
import { useDebounce } from "../../hooks/use-debounce";

interface SearchError {
  error: string;
}

type ISearch = BookVolume[] | SearchError;

export const SearchPage = () => {
  const [searchInput, setSearchInput] = useState<string | undefined>(undefined);
  const navigate = useNavigate();

  const debounceValue = useDebounce(searchInput, 500);

  const { data, isLoading } = useFetch<ISearch>({
    fetchFunction: async () => await search(debounceValue ?? "", 100),
    deps: [debounceValue],
    enabled: debounceValue !== undefined,
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const isErrorResponse = (data: ISearch): data is SearchError => {
    return !Array.isArray(data);
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <section className="py-2 px-2 space-y-4">
      <div className="border border-gray-300 grid grid-cols-[auto_1fr]">
        <button
          onClick={goBack}
          className="w-20 hover:bg-gray-200 h-full grid place-items-center"
        >
          {"<-"}
        </button>
        <input
          type="text"
          value={searchInput}
          onChange={onChange}
          placeholder="Search by title, author or ISBN"
          className="w-full p-2"
        />
      </div>

      {isLoading && <p>Loading...</p>}

      {data && isErrorResponse(data) && !isLoading && <p>{data.error}</p>}

      {data !== null && !isErrorResponse(data) && !isLoading && (
        <div className="grid grid-cols-1 gap-4 container mx-auto md:grid-cols-3 lg:grid-cols-4">
          {data?.map((book: BookVolume) => (
            <Book key={book.id} {...book} />
          ))}
        </div>
      )}
    </section>
  );
};
