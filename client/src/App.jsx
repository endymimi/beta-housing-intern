import { BrowserRouter, Routes, Route } from "react-router-dom";
import DesignLayouts from "./components/DesignLayouts.jsx";
import HomePage from "./pages/HomePage.jsx";
import SignIn from "./authbtn/SignIn.jsx";
import SignUp from "./authbtn/SignUp.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";



import "./App.css";

function App() {
  return (
    
    <AuthProvider> 
      <BrowserRouter>
        <Routes>
          <Route element={<DesignLayouts />}>
            <Route path="/" element={<HomePage />} />
          </Route>
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
    
  );
}

export default App;