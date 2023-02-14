import React from "react";
import Header from "components/common/header/Header";
import Footer from "components/common/footer/Footer";
import Login from "pages/login/Login";
import Signup from "pages/singup/Signup";
import Event from "pages/event/Event";
import MyPage from "pages/myPage/MyPage";
import NotFound from "pages/notFound/NotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/event" element={<Event />} />
          <Route path="/myPage" element={<MyPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
