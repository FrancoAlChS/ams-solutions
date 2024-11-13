import { Route } from "@/routes/route";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import "./App.css";
import { queryClient } from "./constants/query-client";
import { ShoppingProvider } from "./context/shopping-context";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ShoppingProvider>
        <Toaster />
        <Route />
      </ShoppingProvider>
    </QueryClientProvider>
  );
}

export default App;
