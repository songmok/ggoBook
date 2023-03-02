import instance from "api/instance";
import request from "api/request";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Button } from "utils/repeatCss";

interface IEditRa {
  setCanEditRa: React.Dispatch<React.SetStateAction<boolean>>;
  comment: string;
  uiSeq: number;
  ocSeq: number;
  myArticle: (biIsbn: number, biSeq: number, biName: string) => Promise<void>;
  value: number | null;
  alarm: () => void;
}

const EditRating = (props: IEditRa) => {
  const navigate = useNavigate();
  const [value, setValue] = useState<number | null>(props.value);
  const [editText, setEditText] = useState<string>(props.comment);
  const commentText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditText(e.target.value);
  };

  const editComment = () => {
    if (editText === props.comment && value === props.value)
      return alert("이전의 하트 또는 이전의 내용과 같습니다.");
    const data = {
      uiSeq: props.uiSeq,
      onecommentSeq: props.ocSeq,
      content: editText,
      score: value,
    };
    instance.put(request.commentUpdate, data).then((res) => {
      alert("감상평 수정이 완료되었습니다.");
      props.setCanEditRa(false);
      props.alarm();
    });
  };

  return (
    <div className="bookRating">
      <form>
        <div className="heart">
          <Rating
            name="simple-controlled"
            value={value}
            icon={<FavoriteIcon fontSize="inherit" />}
            emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </div>
        <textarea cols={80} rows={4} value={editText} onChange={commentText} />
      </form>
      <Button className="button">
        <button type="button" onClick={() => props.setCanEditRa(false)}>
          취소
        </button>
        <button type="button" onClick={editComment}>
          완료
        </button>
      </Button>
    </div>
  );
};

export default EditRating;
