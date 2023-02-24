import { Button } from "utils/repeatCss";
import ListBookCss from "./style/ListBookCss";

interface Props {
  plan: any[];
  openForm: any;
  setModalData: any;
  start: any;
}
const ListBook = (props: Props) => {
  console.log(props.plan);
  return (
    <ListBookCss>
      <div className="bookList">
        <ul className="bookGnb">
          {props.plan.map((v, i) => {
            return (
              <li key={v.id} className="bookInfo">
                <div className="bookImg">
                  <img src="/" alt="" />
                </div>
                <div className="text">
                  <p>
                    <span className="title">{v.biName}</span>
                    <span className="author">{v.biAuthor}</span>
                    <span className="pub">{v.biPublisher}</span>
                  </p>
                  <Button className="add">
                    <button
                      onClick={() => {
                        props.openForm(true);
                        props.setModalData(v);
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
  );
};

export default ListBook;
