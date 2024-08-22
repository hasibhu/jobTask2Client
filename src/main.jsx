import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "./Provider/AuthProvider.jsx";
import Products, { ProductContext } from "./Products/Products.jsx";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Details from "./Products/Details.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
  },
  {
    path: "/details/:id",
    element: <Details></Details>,
    loader: ({params})=>fetch(`https://ecommerce-server-sable-zeta.vercel.app/details/${params.id}`)
  },
]);

// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="lg:w-[1280px] m-auto">
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
      
           <RouterProvider router={router} />
        </QueryClientProvider>
      </AuthProvider>
    </div>
  </React.StrictMode>
);
