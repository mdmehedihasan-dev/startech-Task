/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import SingleProduct from './SingleProduct';


// Example items, to simulate fetching from another resources.
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function Items({ currentItems }) {
  return (
    <>
    <div className='mb-20'>
    <div className='flex flex-wrap justify-center gap-10'>
     {currentItems &&
        currentItems.map((item) => (
          <SingleProduct key={item.i}/>
        ))}
     </div>
    </div>
    </>
  );
}



const Pagination = ({ itemsPerPage }) => {
 
  const [itemOffset, setItemOffset] = useState(0);

  
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);


  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className=''>
      <Items currentItems={currentItems} />
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="prev"
        renderOnZeroPageCount={null}
        containerClassName='flex gap-x-2'
        pageLinkClassName='border  border-1 font-bold hover:text-white border-solid border-gray-500 px-4  hover:bg-icon py-2'
      />
    </>
  );
}

export default Pagination