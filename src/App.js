import Footer from "components/common/footer/Footer";
import Header from "components/common/header/Header";
import Book from "pages/book/Book";
import BookDetail from "pages/bookDetail/BookDetail";

import Event from "pages/event/Event";
import Login from "pages/login/Login";
import MyCalendar from "pages/myCalendar/MyCalendar";
import MyPage from "pages/myPage/MyPage";
import NotFound from "pages/notFound/NotFound";
import Rank from "pages/rank/Rank";
import Signup from "pages/signup/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/mycalendar" element={<MyCalendar />} />
          <Route path="/event" element={<Event />} />
          <Route path="/myPage" element={<MyPage />} />
          <Route path="/rank" element={<Rank />} />
          <Route path="/book" element={<Book />} />
          <Route path="/bookdetail" element={<BookDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
