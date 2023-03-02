import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "reducer/store";

interface IEditRe {
  setCanEditRe: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  content: string;
  aiSeq: number;
  alarm: () => void;
}

const EditReview = (props: IEditRe) => {
  const uiSeq = useSelector((state: RootState) => state.user.uiSeq);
  const [editTitle, setEditTitle] = useState<string>(props.title);
  const [editContent, setEditContent] = useState<string>(props.content);

  const titleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditTitle(e.target.value);
  };

  const contentText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditContent(e.target.value);
  };

  const editArticle = () => {
    if (editContent === props.content && editTitle === props.title)
      return alert("이전의 제목 또는 이전의 내용과 같습니다.");
    if (editContent.length < 200)
      return alert("독후감은 200자 이상 작성해주세요.");
    const formData = {
      aiTitle: editTitle,
      content: editContent,
      aiPublic: 1,
      uiSeq: uiSeq,
      aiSeq: props.aiSeq,
    };
    axios({
      method: "patch",
      url: "http://192.168.0.160:8520/api/article",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then((res) => console.log(res));
    alert("독후감 수정이 완료되었습니다.");
    props.setCanEditRe(false);
    props.alarm();
  };

  return (
    <div className="bookReview">
      <form>
        <textarea cols={80} rows={1} value={editTitle} onChange={titleText} />
        <textarea
          cols={80}
          rows={10}
          value={editContent}
          onChange={contentText}
        />
      </form>
      <div className="button">
        <button type="button" onClick={() => props.setCanEditRe(false)}>
          취소
        </button>
        <button type="button" onClick={editArticle}>
          완료
        </button>
      </div>
    </div>
  );
};

export default EditReview;
