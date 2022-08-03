import { useEffect, useState } from "react";
import UseFetch from "./UseFetch";

function UsePaginateFetch({ url }) {
  const [pageNumber, setPageNumber] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [api, setApi] = useState("");
  const [loading, docs, data] = UseFetch(api);

  // read page from url parameter
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const page = parseInt(params.get("page")) || 1;

    setPageNumber(page);
  }, []);

  useEffect(() => {
    if (!url || !pageNumber) return;
    setApi(url + "?page=" + pageNumber);
  }, [pageNumber]);

  function gotoPage(page) {
    if (page < 1 || page > totalPages) return;
    setPageNumber(page);
  }

  useEffect(() => {
    if (!data) return;
    setTotalPages(data.totalPages);
    setPageNumber(data.page);

    // update url to current page number
    const params = new URLSearchParams(window.location.search);
    params.set("page", pageNumber);

    // update url
    window.history.pushState(null, null, "?" + params.toString());
  }, [data]);

  return {
    loading,
    pageNumber,
    gotoPage,
    totalPages,
    docs,
    limit: data?.limit,
  };
}

export default UsePaginateFetch;
