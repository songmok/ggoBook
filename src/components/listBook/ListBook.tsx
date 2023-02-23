import React from "react";
import ListBookCss from "./style/ListBookCss";

interface Props {
  plan: any[];
}

const ListBook = (props: Props) => {
  return (
    <ListBookCss>
      <div className="bookList">
        <ul className="bookGnb">
          {props.plan.map((v, i) => {
            console.log(v);
            return (
              <li key={i} className="bookInfo">
                <div className="bookImg">
                  <img src="/" alt="" />
                </div>
                <div className="text">
                  <p>
                    <span className="title">{v.biName}</span>
                    <span className="author">{v.biAuthor}</span>
                    <span className="pub">{v.biPublisher}</span>
                  </p>
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
