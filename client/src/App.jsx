import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './layouts/Navbar';
import PropertyList from './pages/PropertyList';
import PopularProp from './pages/PopularProp';
import Footer from './layouts/Footer';
import SignIn from './authbtn/SignIn';
import SignUp from './authbtn/SignUp';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home route with Navbar, Footer, and main components */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <PropertyList />
              <PopularProp />
              <Footer />
            </>
          }
        />

        {/* Sign In and Sign Up routes without Navbar or Footer */}
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;