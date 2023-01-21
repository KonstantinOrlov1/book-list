import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { BookList } from "./components/BookList/BookList";
import { FormEdit } from "./components/FormEdit/FormEdit";
import { HomePage } from "./pages/HomePage/HomePage";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="booklist" element={<BookList />} />
          <Route path="formedit" element={<FormEdit />} />
          <Route index element={<Navigate to="booklist" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
