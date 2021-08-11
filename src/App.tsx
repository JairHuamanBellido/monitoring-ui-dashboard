import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router } from "react-router-dom";
import MainRouter from "router/MainRouter";
import "./sass/App.scss";

const queryClient = new QueryClient({defaultOptions: {queries:{refetchOnWindowFocus: false}}});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <MainRouter />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
