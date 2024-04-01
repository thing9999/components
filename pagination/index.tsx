import { useMemo } from "react";

const Pagination = ({
  currentPageNo,
  totalRecordCount,
  recordCountPerPage,
  pageSize,
  pageMove,
}) => {
  const firstPageNo = 0;
  const lastPageNo = useMemo(() => {
    const totalPageCount =
      Math.trunc((totalRecordCount - 1) / recordCountPerPage) + 1;
    return totalPageCount - 1;
  }, [totalRecordCount, recordCountPerPage]);
  const firstPageNoOnPageList = useMemo(() => {
    return Math.trunc(currentPageNo / pageSize) * pageSize;
  }, [currentPageNo, pageSize]);
  const lastPageNoOnPageList = useMemo(() => {
    let lastPageNoOnPageList = firstPageNoOnPageList + pageSize - 1;
    if (lastPageNoOnPageList > lastPageNo) {
      lastPageNoOnPageList = lastPageNo;
    }
    return lastPageNoOnPageList;
  }, [firstPageNoOnPageList, lastPageNo, pageSize]);

  return (
    <>
      <div className="pagination aaa">
        {firstPageNoOnPageList - pageSize >= 0 ? (
          <a
            role="button"
            className="page go-prev"
            onClick={() => {
              if (currentPageNo === firstPageNo) return;
              let pg = currentPageNo - pageSize;
              if (pg < firstPageNo) pg = firstPageNo;
              pageMove(currentPageNo - pageSize);
            }}
          ></a>
        ) : null}
        <div className="pager">
          {Array.from(
            { length: lastPageNoOnPageList - firstPageNoOnPageList + 1 },
            (v, k) => k + firstPageNoOnPageList
          ).map((pg) => (
            <a
              role="button"
              className={`page page-${pg + 1} ${
                currentPageNo === pg ? "current" : ""
              }`}
              aria-label={pg + 1 + ""}
              onClick={() => {
                pageMove(pg);
              }}
              key={pg}
            >
              <span>{pg + 1}</span>
            </a>
          ))}
        </div>
        {firstPageNoOnPageList + pageSize < lastPageNo ? (
          <a
            role="button"
            className="page go-next"
            onClick={() => {
              if (currentPageNo === lastPageNo) return;
              let pg = currentPageNo + pageSize;
              if (pg > lastPageNo) pg = lastPageNo;
              pageMove(pg);
            }}
          ></a>
        ) : null}
      </div>
    </>
  );
};

export default Pagination;
