import instance from "api/instance";
import request from "api/request";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface IEditRa {
  setCanEditRa: React.Dispatch<React.SetStateAction<boolean>>;
  comment: string;
  uiSeq: number;
  ocSeq: number;
  alarm: boolean;
  setAlarm: React.Dispatch<React.SetStateAction<boolean>>;
  myArticle: (biIsbn: number, biSeq: number, biName: string) => Promise<void>;
}

const EditRating = (props: IEditRa) => {
  const navigate = useNavigate();
  const [editText, setEditText] = useState<string>(props.comment);
  const commentText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditText(e.target.value);
  };

  const editComment = () => {
    if (editText === props.comment) return alert("이전 내용과 같습니다.");
    const data = {
      uiSeq: props.uiSeq,
      onecommentSeq: props.ocSeq,
      content: editText,
    };
    instance.put(request.commentUpdate, data).then((res) => {
      alert("감상평 수정이 완료되었습니다.");
      navigate("/mypage");
    });
  };

  return (
    <div className="bookRating">
      <form>
        <textarea cols={80} rows={4} value={editText} onChange={commentText} />
      </form>
      <div className="button">
        <button type="button" onClick={() => props.setCanEditRa(false)}>
          취소
        </button>
        <button type="button" onClick={editComment}>
          완료
        </button>
      </div>
    </div>
  );
};

export default EditRating;
