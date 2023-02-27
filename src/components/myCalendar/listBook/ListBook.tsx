import instance from "api/instance";
import request from "api/request";
import { Button } from "utils/repeatCss";
import ListBookCss from "./style/ListBookCss";

interface IProps {
  plan: any[];
  openForm: any;
  setModalData: any;
  start: any;
}

const ListBook = (props: IProps) => {
  const listDelete = (id: number) => {
    const params = {
      id: id,
    };
    window.confirm("책 목록에서 삭제하시겠습니까?") &&
      instance.delete(request.listDelete, { params: params }).then((res) => {
        alert(res.data.message);
      });
  };

  const listCompelete = (id: number) => {
    const params = {
      id: id,
    };
    window.confirm("완독서로 넣으시겠습니까?") &&
      instance
        .post(request.listComplete, null, { params: params })
        .then((res) => {
          console.log(res);
        });
  };
  console.log(props.plan);

  return (
    <ListBookCss>
      <div className="bookList">
        <div className="header">
          <h3>나의 북 리스트</h3>
        </div>
        <ul className="bookGnb">
          {props.plan.map((v) => {
            return (
              <li key={v.id} className="bookInfo">
                <div className="bookImg">
                  <img src={v.bimgUri} alt={v.biName} />
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

                    <button
                      onClick={() => {
                        listDelete(v.id);
                      }}
                    >
                      삭제
                    </button>

                    <button
                      onClick={() => {
                        listCompelete(v.id);
                      }}
                    >
                      완독
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
