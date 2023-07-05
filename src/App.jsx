import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import { QueryClient , QueryClientProvider } from "react-query";

function App() {
const queryClient = new QueryClient();

  return (
    <div className="main">
      <Header></Header>
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
    </div>
  );
}

export default App;
