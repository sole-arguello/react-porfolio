import "./App.scss";
import EmailForm from "./components/EmailForm";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <div className="app">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/emailForm" element={<EmailForm />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
