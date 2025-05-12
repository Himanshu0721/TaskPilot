import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Chatbot from "./components/Chatbot";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
