import Footer from "components/common/footer/Footer";
import Header from "components/common/header/Header";
import Book from "pages/book/Book";
import BookDetail from "pages/bookDetail/BookDetail";
import Event from "pages/event/Event";
import Login from "pages/login/Login";
import MyCalendar from "pages/myCalendar/MyCalendar";
import Complete from "pages/myPage/complete/Complete";
import MyPage from "pages/myPage/MyPage";
import NotFound from "pages/notFound/NotFound";
import Rank from "pages/rank/Rank";
import Signup from "pages/signup/Signup";
import Wait from "pages/wait/Wait";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "theme/ThemeProvider";

function App() {
  return (
    <>

      <ThemeProvider theme={theme}>
        <Router>
          <Header />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/mycalendar" element={<MyCalendar />} />
            <Route path="/event" element={<Event />} />
            <Route path="/myPage" element={<MyPage />} />
            <Route path="/complete" element={<Complete />} />
            <Route path="/rank" element={<Rank />} />
            <Route path="/book" element={<Book />} />
            <Route path="/bookdetail" element={<BookDetail />} />
            <Route path="*" element={<NotFound />} />
             <Route path="/wait" element={<Wait />} />
          </Routes>
          <Footer />
        </Router>
      </ThemeProvider>

    </>
  );
}

export default App;
