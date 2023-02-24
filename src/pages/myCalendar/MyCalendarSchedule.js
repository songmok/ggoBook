import ListBookCss from "components/listBook/style/ListBookCss";
import { Button } from "utils/repeatCss";

const MyCalendarSchedule = ({ ing, openForm, setModalData }) => {
  return (
    <>
      {ing.status === "성공" ? (
        ""
      ) : (
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
                          <button onClick={() => {}}>일정 삭제하기</button>
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

