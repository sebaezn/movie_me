import React from 'react'

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <nav className="pagination is-left" role="navigation" aria-label="pagination">
      <button
        className="pagination-previous"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <button
        className="pagination-next"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </nav>
  );
};

export default Pagination;