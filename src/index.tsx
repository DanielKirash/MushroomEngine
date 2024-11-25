import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Test from "./pages/Test";

const isAuthenticated = () => {
  
  return localStorage.getItem('sessionStorage');
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="dashboard"
          element={isAuthenticated() ? <Dashboard /> : <Navigate to="/" />}
        />
        <Route path="test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);
