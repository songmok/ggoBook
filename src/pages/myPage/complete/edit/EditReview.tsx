import React, { useState } from "react";

interface IEditRe {
  setCanEditRe: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  content: string;
}

const EditReview = (props: IEditRe) => {
  const [editTitle, setEditTitle] = useState<string>(props.title);
  const [editContent, setEditContent] = useState<string>(props.content);

  const titleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditTitle(e.target.value);
  };

  const contentText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditContent(e.target.value);
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
        <button
          type="button"
          // onClick={addArticle}
        >
          완료
        </button>
      </div>
    </div>
  );
};

export default EditReview;
