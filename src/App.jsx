import { Route } from "@/routes/route";
import { QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { queryClient } from "./constants/query-client";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Route />
    </QueryClientProvider>
  );
}

export default App;
