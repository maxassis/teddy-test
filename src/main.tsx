import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import router from "./router/routes.tsx";
import { Toaster } from "sonner";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Toaster position="top-right" />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
