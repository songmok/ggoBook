import React from "react";
import ListBookCss from "components/listBook/style/ListBookCss";
import { Button } from "utils/repeatCss";

const MyCalendarSchedual = ({ ing, openForm, setModalData }) => {
  console.log(ing);
  return (
    <>
      {ing !== null ? (
        <>
          <ListBookCss>
            <div className="bookList">
              <ul className="bookGnb">
                {ing.map((v, i) => {
                  return (
                    <li key={v.id} className="bookInfo">
                      <div className="bookImg">
                        <img src="/" alt="" />
                      </div>
                      <div className="text">
                        <p>
                          <span className="title">{v.title}</span>
                          <span className="author">{v.start}</span>
                          <span className="author">{v.end}</span>
                        </p>
                        <Button className="add">
                          <button
                            onClick={() => {
                              openForm(true);
                              setModalData(v);
                            }}
                          >
                            일정 추가하기
                          </button>
                        </Button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </ListBookCss>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default MyCalendarSchedual;
