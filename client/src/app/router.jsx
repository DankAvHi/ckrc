import { createBrowserRouter } from "react-router-dom";
import { MainPage, NewsPage, PosterPage } from "../pages";
import App from "./App";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <MainPage />,
            },
            {
                path: "/news",
                element: <NewsPage />,
            },
            {
                path: "/poster",
                element: <PosterPage />,
            },
        ],
    },
]);
