import React from "react";
import BookRatingCss from "./BookRatingCss";

const BookRating = () => {
  return (
    <BookRatingCss>
      <div className="ratingTop">
        <form>
          <textarea
            cols={80}
            placeholder="감상평을 남겨주세요. 이 책에 대한 욕설 및 인신공격성 글은 평점 페이지에서 노출 제외처리됩니다."
            rows={4}
          ></textarea>
          <button type="button">작성</button>
        </form>
      </div>
      <div className="ratingBottom">
        <div className="rating">감상평1</div>
        <div className="rating">감상평2</div>
        <div className="rating">감상평3</div>
        <div className="rating">감상평4</div>
        <div className="rating">감상평4</div>
        <div className="rating">감상평4</div>
        <div className="rating">감상평4</div>
        <div className="rating">감상평4</div>
      </div>
    </BookRatingCss>
  );
};

export default BookRating;
