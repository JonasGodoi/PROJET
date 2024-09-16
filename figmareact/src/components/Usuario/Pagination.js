import React from "react";
import { Button } from "react-bootstrap";
import styles from "./GerenciarUsuario.module.css";

function Pagination({ currentPage, totalItems, itemsPerPage, onPageChange }) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const maxPageButtons = 5;

  const getPageNumbers = () => {
    const pages = [];
    const startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
    const endPage = Math.min(totalPages, startPage + maxPageButtons - 1);

    if (startPage > 1) {
      pages.push("...");
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (endPage < totalPages) {
      pages.push("...");
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className={styles.pagination}>
      <Button
        className={styles.pageButton}
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Anterior
      </Button>
      {pageNumbers.map((page, index) =>
        page === "..." ? (
          <span key={index}>...</span>
        ) : (
          <Button
            key={page}
            className={`${styles.pageButton} ${currentPage === page ? styles.activePage : ""}`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </Button>
        )
      )}
      <Button
        className={styles.pageButton}
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Próximo
      </Button>
    </div>
  );
}

export default Pagination;
