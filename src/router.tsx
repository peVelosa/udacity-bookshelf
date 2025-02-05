import { BrowserRouter, Routes, Route } from "react-router";
import { HomePage } from "./features/home";
import { SearchPage } from "./features/search";
import { Navbar } from "./features/_components/navbar";
import { BookProvider } from "./context/book";
import { NotFoundPage } from "./features/not-found";

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<BookProvider />}>
        <Route element={<Navbar />}>
          <Route index path="/" element={<HomePage />} />
          <Route index path="/search" element={<SearchPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
