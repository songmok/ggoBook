import instance from "api/instance";
import request from "api/request";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "reducer/store";
import BookRatingCss from "./BookRatingCss";
interface IProps {
  ISBN: number;
}
interface IRating {
  content: string;
  nickName: string;
  score: number;
  onecommentSeq: number;
}
const BookRating = (props: IProps) => {
  const uiSeq = useSelector((state: RootState) => state.user.uiSeq);
  const [content, setContent] = useState<IRating[]>([]);
  const commentList = async () => {
    const params = {
      page: 0,
    };
    await instance
      .get(`api/onecomment/${props.ISBN}/list`, { params: params })
      .then((res) => {
        setContent(res.data.content);
      });
  };
  useEffect(() => {
    commentList();
  }, []);
  return (
    <BookRatingCss>
      <div className="ratings">
        {content.map((ele) => {
          return (
            <div className="rating" key={ele.onecommentSeq}>
              <p>{ele.content}</p>
              <p>{ele.nickName} 님</p>
              <span>{ele.score}</span>
            </div>
          );
        })}
      </div>
    </BookRatingCss>
  );
};
export default BookRating;
