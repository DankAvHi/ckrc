import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/router.jsx";
import "./shared/styles/index.css";
import "./shared/styles/lib/swiper.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
