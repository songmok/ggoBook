import React, { useEffect, useMemo, useRef, useState } from "react";
import BookReviewCss from "./BookReviewCSS";
import { IProps } from "../bookRating/BookRating";
import instance from "api/instance";
import request from "api/request";

interface IReview {
  aiSeq: number;
  aiTitle: string;
  uiNickname: string;
  aiContent: string;
  aiRegDt: string;
}

const BookReview = (props: IProps) => {
  const [article, setArticle] = useState<IReview[]>([]);
  const articleBook = async () => {
    const params = {
      keyword: props.ISBN,
    };
    await instance
      .get(request.articleBook, { params: params })
      .then((res) => setArticle(res.data));
  };

  useEffect(() => {
    articleBook();
  }, []);

  // 더보기 닫기 토글
  const [isShowMore, setIsShowMore] = useState<boolean>(false);
  const textLimit = useRef<number>(190);

  const commentar = (content: string) => {
    const shortReview: string = content.slice(0, textLimit.current);

    if (content.length > textLimit.current) {
      if (isShowMore) {
        return content;
      }
      return shortReview;
    }
    return content;
  };

  // 날짜 변경 함수
  const datePrefix = (Day: string) => {
    const Date = Day.substring(0, 10);
    const [year, month, day] = Date.split("-");
    return `${year}년${month}월${day}일`;
  };

  return (
    <BookReviewCss>
      <div className="reviewTop">
        {article.length === 0 ? (
          <div>
            <p>
              등록된 독후감이 없습니다. 이 책을 완독하고 첫 독후감을
              등록해보세요!
            </p>
          </div>
        ) : (
          article.map((ele) => {
            return (
              <div key={ele.aiSeq}>
                <div className="review">
                  <p className="reviewTitle">{ele.aiTitle}</p>
                  <p className="reviewContent">
                    {commentar(ele.aiContent)}
                    <button
                      onClick={() => setIsShowMore(!isShowMore)}
                      className="showMore"
                    >
                      {ele.aiContent.length > textLimit.current && // 버튼명은 조건에 따라 달라진다
                        (isShowMore ? "닫기" : "...더보기")}
                    </button>
                  </p>
                  <p className="reviewND">
                    <span>{ele.uiNickname}님</span>
                    <span>{datePrefix(ele.aiRegDt)}</span>
                  </p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </BookReviewCss>
  );
};

export default BookReview;
