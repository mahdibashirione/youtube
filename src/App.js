import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="*"
        element={
          <section className="h-screen w-screen flex items-center justify-center">
            Not Found Page Error 404
          </section>
        }
      />
    </Routes>
  );
}

export default App;
