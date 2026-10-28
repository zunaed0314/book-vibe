import { createBrowserRouter } from "react-router";
import Books from "../Pages/Books/Books";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import BookDetails from "../Pages/BookDetails/BookDetails";
import PagesToRead from "../Pages/PagestoRead/PagesToRead";

export const router = createBrowserRouter ( [
  {
    path: '/',
    Component: MainLayout,
    children: [
      {index: true, Component: Home},
      {
        path: 'books' , Component: Books
      },
      {
        path: 'bookDetails/:id',
        Component: BookDetails 
      },
      {
        path: 'pages-to-read',
        Component: PagesToRead
      }
    ],
    errorElement: <ErrorPage></ErrorPage>
  }
])