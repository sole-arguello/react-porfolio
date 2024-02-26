import "./App.scss";
import EmailForm from "./components/EmailForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/emailForm" element={<EmailForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
