import ReactPaginate from "react-paginate";
import "../pagination.css";

interface PaginationProps {
  pageCount: number;
  onPageChange: (selectedItem: { selected: number }) => void;
}

const PaginationComponent = ({ pageCount, onPageChange }: PaginationProps) => {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel=""
      previousLabel=""
      onPageChange={onPageChange}
      pageRangeDisplayed={1}
      marginPagesDisplayed={1}
      pageCount={pageCount}
      renderOnZeroPageCount={null}
      containerClassName="pagination"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      breakClassName="page-item"
      breakLinkClassName="page-link"
      activeClassName="active"
    />
  );
};

export default PaginationComponent;
