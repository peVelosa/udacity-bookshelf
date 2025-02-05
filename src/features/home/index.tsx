import { Shelf } from "./container/shelf";
import { Link } from "react-router";

export const HomePage = () => {
  return (
    <section className="space-y-8">
      <Shelf title="Currently Reading" bookStatus="currentlyReading" />
      <Shelf title="Want to Read" bookStatus="wantToRead" />
      <Shelf title="Read" bookStatus="read" />
      <Link
        to="/search"
        className="text-white text-2xl leading-none grid place-content-center fixed bottom-12 right-12 bg-green-700 rounded-full w-10 h-10 hover:bg-green-600 mt-0"
      >
        +
      </Link>
    </section>
  );
};
