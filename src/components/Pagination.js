import React, { useRef } from "react";
import UsePaginateFetch from "../hooks/UsePaginateFetch";
import { Button } from "./Button";
import { SubHeader } from "./Header";
import Loading from "./Loading";
import "../assets/styles/Pagination.scss";

const getPageNumbers = (current, lastPage) => {
  let pageNumbers = [];

  let i = 1;
  for (; i <= Math.min(lastPage, 3); i++) {
    pageNumbers.push(i);
  }

  if (i + 2 < current) pageNumbers.push(-1);

  i = Math.max(i, current - 2);
  for (; i <= current + 2 && i <= lastPage; i++) {
    pageNumbers.push(i);
  }

  if (i < lastPage - 2) pageNumbers.push(-1);

  i = Math.max(i, lastPage - 2);
  for (; i <= lastPage; i++) {
    pageNumbers.push(i);
  }

  return pageNumbers;
};

function Pagination({ title, api, Container, setCurrentDataItem }) {
  const { loading, pageNumber, gotoPage, totalPages, docs } = UsePaginateFetch({
    url: api,
  });

  const myRef = useRef(null);

  function changePage(number) {
    gotoPage(number);
    myRef.current.scrollIntoView();
  }

  return (
    <div class="pages-container" ref={myRef}>
      <SubHeader title={title} left={true}></SubHeader>
      {loading ? (
        <Loading />
      ) : !docs || docs.length === 0 ? (
        <p>No records found</p>
      ) : (
        <div className="content-container">
          {docs.map((item, index) => (
            <Container
              key={index}
              data={item}
              onClick={() => {
                if (setCurrentDataItem) {
                  setCurrentDataItem(item);
                }
              }}
            ></Container>
          ))}
        </div>
      )}
      <div className="flex wrap paginations">
        <Button
          icon="chevron_left"
          text="Previous"
          className="flex-reverse page-button"
          onClick={() => changePage(pageNumber - 1)}
        ></Button>
        {getPageNumbers(pageNumber, totalPages).map((page) => {
          if (page === -1) return <span>...</span>;
          return (
            <button
              className={
                "pointer number nav-button" +
                (page === pageNumber ? " active" : "")
              }
              onClick={() => changePage(page)}
            >
              {page}
            </button>
          );
        })}
        <Button
          icon="chevron_right"
          text="Next"
          className="page-button"
          onClick={() => changePage(pageNumber + 1)}
        ></Button>
      </div>
    </div>
  );
}

export default Pagination;
