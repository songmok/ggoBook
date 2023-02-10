import Footer from "components/common/footer/Footer";
import Header from "components/common/header/Header";
import Event from "pages/event/Event";
import MyPage from "pages/myPage/MyPage";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route />
          <Route path="/event" element={<Event />} />
          <Route path="/myPage" element={<MyPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
