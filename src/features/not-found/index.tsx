import { Link } from "react-router";

export const NotFoundPage = () => {
  return (
    <div className="w-full grid place-items-center mt-20">
      <h2 className="text-3xl font-bold">Not Found</h2>
      <p className="text-lg">
        Go back to{" "}
        <Link to={"/"} className="underline text-blue-500">
          home
        </Link>
      </p>
    </div>
  );
};
