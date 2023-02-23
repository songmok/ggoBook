import React from "react";
import BookReviewCss from "./BookReviewCSS";

const BookReview = () => {
  return (
    <BookReviewCss>
      <div className="reviewTop">
        <form>
          <textarea
            cols={80}
            placeholder="독후감을 남겨주세요. 이 책에 대한 욕설 및 인신공격성 글은 평점 페이지에서 노출 제외처리됩니다."
            rows={10}
          ></textarea>
        </form>
        <button type="button">작성</button>
      </div>
      <div className="reviewBottom">
        <div className="review">
          <div>제목</div>
          <div>내용</div>
        </div>
        <div className="review">
          <div>제목</div>
          <div>내용</div>
        </div>
        <div className="review">
          <div>제목</div>
          <div>내용</div>
        </div>
      </div>
    </BookReviewCss>
  );
};

export default BookReview;
