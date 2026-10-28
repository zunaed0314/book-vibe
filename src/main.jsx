import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from './App.jsx'
import { RouterProvider } from "react-router";

import { router } from "./routes/Routes.jsx";
import BookProvider from "./context/BookProvider.jsx";
import { ToastContainer } from "react-toastify";



createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BookProvider>
			<RouterProvider router={router}></RouterProvider>
      <ToastContainer></ToastContainer>
		</BookProvider>
	</StrictMode>,
);
