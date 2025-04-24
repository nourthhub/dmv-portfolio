import React from "react"
import PageLink from "./PageLink"
import "./css/Pagination.css"

export default function Pagination() {
  const pageNums = [1, 2, 3]
  return (
    <nav className="pagination " aria-label="Pagination">
      <PageLink href="#">Previous</PageLink>
      {pageNums.map((pageNum, idx) => (
        <PageLink key={idx} href="#">
          {pageNum}
        </PageLink>
      ))}
      <PageLink href="#">Next</PageLink>
    </nav>
  )
}
