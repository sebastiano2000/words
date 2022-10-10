import { useState, useEffect } from 'react';
import { calculateRange } from './range';

const sliceData = (data, page, rowsPerPage) => {
    return data?.slice((page - 1) * rowsPerPage, page * rowsPerPage);
};

export const useTable = (data, page, rowsPerPage) => {
    const [tableRange, setTableRange] = useState([]);
    const [slice, setSlice] = useState([]);

    useEffect(() => {
        if(data){
        const range = calculateRange(data, rowsPerPage);
        setTableRange([...range]);

        const slice = sliceData(data, page, rowsPerPage);
        setSlice([...slice]);
        }
    }, [data, setTableRange, page, setSlice, rowsPerPage]);

    return { slice, range: tableRange };
};

export const TableFooter = ({ range, setPage, page, slice }) => {
    useEffect(() => {
      if (slice.length < 1 && page !== 1) {
        setPage(page - 1);
      }
    }, [slice, page, setPage]);

    return (
      <div className="font-weight-normal w-100 py-2 text-start h6 bg-secondary text-dark d-flex justify-content-center">
        {range.map((el, index) => (
          <button
            key={index}
            className={`mx-1 py-2 px-3 rounded border-0 cursor-pointer ${
              page === el ? "bg-primary text-white" : "bg-light text-dark"
            }`}
            onClick={() => setPage(el)}
          >
            {el}
          </button>
        ))}
      </div>
    );
};
