import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const ResultData = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]


const BoxPagination = (props) => {
  const { counter, setCounter, addPrompt, incrementPrompt, setLessonNumber } = props;
  const itemsPerPage = 1;
  
  const [itemOffset, setItemOffset] = useState(0);


  const pageCount = Math.ceil(ResultData.length / itemsPerPage);


  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % ResultData.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
    setCounter(newOffset);
    setLessonNumber(newOffset);
    incrementPrompt(true)
    addPrompt(`start lesson ${newOffset + 1}`)
  };

  function Items({ ResultData }) {
    return (
      <>
        {ResultData &&
          ResultData?.map((result, index) => (
            <div
              key={`result-data-${index}`}
              className=' flex flex-wrap rounded-[12px] p-[24px_24px_24px_24px] mb-[42px] cursor-pointer'
              style={{ background: 'var(--glass-fill, linear-gradient(145deg, rgba(215, 237, 237, 0.16) 0%, rgba(204, 235, 235, 0.00) 100%))' }}
            >
              <h1>{result}</h1>
            </div>
          ))}
      </>
    );
  }

  return (
    <>
      <div className=''>
        {/* <Items ResultData={currentItems} /> */}
        <ReactPaginate
          breakLabel="..."
          nextLabel={<BsChevronRight className='text-[#9B9C9E]' />}
          onPageChange={handlePageClick}
          onClick={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          forcePage={counter}
          breakClassName="break-page-item"
          previousLabel={<BsChevronLeft className='text-[##9B9C9E]' />}
          renderOnZeroPageCount={null}
          containerClassName="flex justify-center pagination justify-content-center"
          pageClassName="page-item w-[32px] h-[32px] mx-2 text-center text-[#9B9C9E] bg-[#363A3D] flex justify-center items-center rounded-[50%] border-2 border-[#202327]"
          pageLinkClassName="page-link"
          previousClassName="prev-page-item leading-[32px] w-[32px] h-[32px] mx-2 text-center text-[#9B9C9E] bg-[#363A3D] flex justify-center items-center rounded-[50%] border-2 border-[#202327]"
          previousLinkClassName="page-link"
          nextClassName="next-page-item leading-[32px]  w-[32px] h-[32px] mx-2 text-center text-[#9B9C9E] bg-[#363A3D] flex justify-center items-center rounded-[50%] border-2 border-[#202327]"
          nextLinkClassName="page-link"
          activeClassName="active !text-[#000000] !border-[#B6F09C] bg-[#B6F09C]"
        />
      </div>

    </>
  )
}

export default BoxPagination;