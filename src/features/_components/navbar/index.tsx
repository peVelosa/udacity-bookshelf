import { Outlet } from "react-router";

export const Navbar = () => {
  return (
    <>
      <header className="bg-green-800 py-4 px-2">
        <nav className="mx-auto w-fit">
          <h1 className="text-white font-semibold text-4xl">MyReads</h1>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
