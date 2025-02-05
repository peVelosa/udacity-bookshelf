import { useState } from "react";
import { BookVolume } from "../../../@types/book";
import { useBook } from "../../../context/book";
import { update } from "../../../server/BooksAPI";

type Props = BookVolume & {
  options: { label: string; value: string }[];
};

export const Book = (props: Props) => {
  const { title, imageLinks, authors, options } = props;

  const { data, refetch } = useBook();

  const [statusValue, setStatusValue] = useState(
    data?.find((book) => book.id === props.id)?.shelf ?? "move"
  );

  const onUpdateStatus = async (data: React.ChangeEvent<HTMLSelectElement>) => {
    setStatusValue(data.target.value);
    await update(props, data.target.value);
    refetch();
    alert(`Book ${title} shelf updated to: ${data.target.value}`);
  };

  return (
    <div>
      <img
        src={imageLinks?.thumbnail ?? imageLinks?.smallThumbnail}
        alt="No image"
      />
      <p>{title}</p>
      <div className="flex gap-2 items-center">
        {authors?.map((author) => (
          <p key={author} className="font-thin">
            {author}
          </p>
        ))}
      </div>
      <select
        className="bg-gray-200 rounded-sm px-4 py-1"
        value={statusValue}
        onChange={onUpdateStatus}
      >
        <option value="move" disabled>
          Move to...
        </option>
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
