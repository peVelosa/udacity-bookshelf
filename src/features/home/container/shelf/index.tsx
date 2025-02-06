import { useBook } from "../../../../context/book";
import { Book } from "../../../_components/book";

type Props = {
  title: string;
  bookStatus: string;
};

export const Shelf = (props: Props) => {
  const { title, bookStatus } = props;

  const { data } = useBook();

  return (
    <article className="space-y-4 mx-auto container">
      <div className="w-full border-b pb-2">
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {data
          ?.filter((book) => book.shelf === bookStatus)
          ?.map((book) => (
            <Book key={book.id} {...book} />
          ))}
      </div>
    </article>
  );
};
