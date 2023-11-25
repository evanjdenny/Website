import "./App.css";
import logo from "./logo.svg";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import ToDo from "./pages/ToDo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/todolist" element={<ToDo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
