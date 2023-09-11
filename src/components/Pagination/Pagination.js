import React, { useState, useEffect, useMemo } from "react";
import "./style.css";
import ReactPaginate from "react-paginate";

export function Pagination({ products, limit, handleChangePage }) {
  const [thisPage, setThisPage] = useState(1);
  const [list, setList] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    setList(products);
  }, [products]);

  // useEffect(() => {
  //   loadItem();
  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, [thisPage, windowWidth, loadItem, handleResize]);

  // function loadItem() {
  //   const beginGet = limit * (thisPage - 1);
  //   const endGet = limit * thisPage - 1;
  //   list.forEach((item, key) => {
  //     if (key >= beginGet && key <= endGet) {
  //       item.style.display = 'block';
  //     } else {
  //       item.style.display = 'none';
  //     }
  //   });
  //   listPage();
  // }

  // function listPage() {
  //   const count = Math.ceil(list.length / limit);
  //   const pagination = document.querySelector('.home-product__pagination');
  //   pagination.innerHTML = '';

  //   const prev = document.createElement('li');
  //   prev.classList.add('pagination-item');
  //   prev.classList.add('pagination-item__link');
  //   prev.innerText = '<';
  //   pagination.appendChild(prev);

  //   if (thisPage !== 1) {
  //     prev.addEventListener('click', () => changePage(thisPage - 1));
  //   }

  //   let ellipsisStart = false;
  //   let ellipsisEnd = false;

  //   for (let i = 1; i <= count; i++) {
  //     if (count > 7 && i > 3 && i < thisPage - 1) {
  //       if (!ellipsisStart) {
  //         const ellipsis = document.createElement('li');
  //         ellipsis.classList.add('pagination-item');
  //         ellipsis.classList.add('pagination-item__link');
  //         ellipsis.innerText = '...';
  //         pagination.appendChild(ellipsis);
  //         ellipsisStart = true;
  //       }
  //       continue;
  //     }

  //     if (count > 7 && i < count - 2 && i > thisPage + 1) {
  //       if (!ellipsisEnd) {
  //         const ellipsis = document.createElement('li');
  //         ellipsis.classList.add('pagination-item');
  //         ellipsis.classList.add('pagination-item__link');
  //         ellipsis.innerText = '...';
  //         pagination.appendChild(ellipsis);
  //         ellipsisEnd = true;
  //       }
  //       continue;
  //     }

  //     const newPage = document.createElement('li');
  //     newPage.classList.add('pagination-item');
  //     newPage.classList.add('pagination-item__link');
  //     newPage.innerText = i;
  //     if (i === thisPage) {
  //       newPage.classList.add('pagination-item--active');
  //     }
  //     newPage.addEventListener('click', () => changePage(i));
  //     pagination.appendChild(newPage);
  //   }

  //   const next = document.createElement('li');
  //   next.classList.add('pagination-item');
  //   next.classList.add('pagination-item__link');
  //   next.innerText = '>';
  //   pagination.appendChild(next);

  //   if (thisPage !== count) {
  //     next.addEventListener('click', () => changePage(thisPage + 1));
  //   }
  // }

  // function changePage(i) {
  //   setThisPage(i);
  //   window.scrollTo(0, 0);
  //   loadItem();
  // }

  // function handleResize() {
  //   setWindowWidth(window.innerWidth);
  //   setLimit(window.innerWidth <= 739 ? 10 : 15);
  //   loadItem();
  // }
  const handlePageClick = (event) => {
    const newOffset = (event.selected * limit) % products.length + 1;
    handleChangePage(event.selected + 1);
  };

  return (
    <ReactPaginate
      containerClassName="pagination home-product__pagination"
      pageClassName="pagination-item pagination-item__link "
      pageLinkClassName="pagination-item__link"
      activeClassName="pagination-item--active"
      previousClassName="pagination-item previous"
      nextClassName="pagination-item next"
      breakLabel="..."
      nextLabel=">"
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      pageCount={6}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
    // <ul className="pagination home-product__pagination">
    //   {pageNumber > 3 ? (
    //     <>
    //       <li class="pagination-item">
    //         <a href="#" class="pagination-item__link">
    //           <i class="pagination-item__icon fa-solid fa-angle-left"></i>
    //         </a>
    //       </li>
    //       <li class="pagination-item">
    //         <a href="#" class="pagination-item__link">
    //           ...
    //         </a>
    //       </li>
    //       <li class="pagination-item">
    //         <a href="#" class="pagination-item__link">
    //           <i class="pagination-item__icon fa-solid fa-angle-right"></i>
    //         </a>
    //       </li>
    //     </>
    //   ) : (
    //     <>
    //       {/* <li class="pagination-item">
    //         <a href="#" class="pagination-item__link">
    //           <i class="pagination-item__icon fa-solid fa-angle-left"></i>
    //         </a>
    //       </li> */}
    //       <li className="pagination-item pagination-item__link pagination-item--active">
    //         1
    //       </li>
    //       <li className="pagination-item pagination-item__link">2</li>
    //       <li className="pagination-item pagination-item__link">3</li>
    //       {/* <li class="pagination-item">
    //         <a href="#" class="pagination-item__link">
    //           ...
    //         </a>
    //       </li> */}
    //       {/* <li class="pagination-item">
    //         <a href="#" class="pagination-item__link">
    //           <i class="pagination-item__icon fa-solid fa-angle-right"></i>
    //         </a>
    //       </li> */}
    //     </>
    //   )}
    //   <li class="pagination-item">
    //     <a href="#" class="pagination-item__link">
    //       <i class="pagination-item__icon fa-solid fa-angle-left"></i>
    //     </a>
    //   </li>
    //   <li className="pagination-item pagination-item__link pagination-item--active">
    //     1
    //   </li>
    //   <li className="pagination-item pagination-item__link">2</li>
    //   <li className="pagination-item pagination-item__link">3</li>
    //   <li class="pagination-item">
    //     <a href="#" class="pagination-item__link">
    //       ...
    //     </a>
    //   </li>
    //   <li class="pagination-item">
    //     <a href="#" class="pagination-item__link">
    //       <i class="pagination-item__icon fa-solid fa-angle-right"></i>
    //     </a>
    //   </li>
    // </ul>
  );
}

export default Pagination;
