import React from "react";
import BookRatingCss from "./BookRatingCss";

const BookRating = () => {
  return (
    <BookRatingCss>
      <div>
        <form>
          <textarea
            cols={70}
            placeholder="감상평을 남겨주세요. 이 책에 대한 욕설 및 인신공격성 글은 평점 페이지에서 노출 제외처리됩니다."
            rows={4}
          ></textarea>
        </form>
      </div>
      <div></div>
    </BookRatingCss>
  );
};

export default BookRating;
