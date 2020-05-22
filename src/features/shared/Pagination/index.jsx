import React from 'react';
import * as Pagination from './elements';

const createPaginationArray = (page, maxPage) => {
  let pages = ['before'];
  for(let i = -1; i < 2; i++) {
    if (page + i <= 0) {
      pages[0] = null;
      continue;
    }
    else if (page + i > maxPage) continue;
    pages.push(page + i);
  }

  if (pages[pages.length - 1] < maxPage) pages.push('after');
  pages = pages.filter(page => page);
  return pages;
}

const PaginationBlock = ({ page, maxPage }) => {
  const pages = createPaginationArray(page, maxPage);
  
  return (
    <Pagination.Container>
      <Pagination.Block>
        {
          pages.map(item => {
            if (item === 'before') return <Pagination.Link href = {`${window.location.origin}${window.location.pathname}`}>←</Pagination.Link>
            else if (item == 'after') return <Pagination.Link href = {`${window.location.origin}${window.location.pathname}?page=${maxPage}`}>→</Pagination.Link>
            return <Pagination.Link active = {item === page} href = {`${window.location.origin}${window.location.pathname}?page=${item}`}>{item}</Pagination.Link>  
          })
        }
      </Pagination.Block>
    </Pagination.Container>
  );
}

export default PaginationBlock;