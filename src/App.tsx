import Footer from "components/common/footer/Footer";
import Header from "components/common/header/Header";
import Event from "pages/event/Event";
import Login from "pages/login/Login";
import MyPage from "pages/myPage/MyPage";
import NotFound from "pages/notFound/NotFound";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/home"
            element={
              <>
                <Header />
              </>
            }
          />
          <Route
            path="/event"
            element={
              <>
                <Header />
                <Event />
                <Footer />
              </>
            }
          />
          <Route path="/myPage" element={<MyPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
