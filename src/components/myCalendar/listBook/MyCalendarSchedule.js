import { Button } from "utils/repeatCss";
import ListBookCss from "./style/ListBookCss";

const MyCalendarSchedule = ({ ing, openForm, setModalData }) => {
  console.log(ing);
  return (
    <>
      {ing.status === "성공" ? (
        ""
      ) : (
        <>
          <ListBookCss>
            <div className="bookList scheduleList">
              <div className="header">
                <h3>일정 리스트</h3>
              </div>
              <ul className="bookGnb">
                {ing.map((v, i) => {
                  return (
                    <li key={v.id} className="bookInfo">
                      <div className="bookImg">
                        <img src={v.biUri} alt={v.biName} />
                      </div>
                      <div className="text">
                        <p>
                          <span className="title">{v.title}</span>
                          <span className="author">{v.start}</span>
                          <span className="author">{v.end}</span>
                          <span className="description">{v.description}</span>
                        </p>
                        <Button className="addSch">
                          <button className="delete" onClick={() => {}}>
                            일정 삭제하기
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
      )}
    </>
  );
};

export default MyCalendarSchedule;
