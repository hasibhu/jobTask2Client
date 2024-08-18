



import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ProductProvider } from "./hooks/ProductContext";
import AuthProvider from "./Provider/AuthProvider";

// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="lg:w-[1280px] m-auto">
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <ProductProvider>
            <App />
          </ProductProvider>
        </QueryClientProvider>
      </AuthProvider>
    </div>
  </React.StrictMode>
);
