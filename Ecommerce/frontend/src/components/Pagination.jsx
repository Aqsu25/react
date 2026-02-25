import React from 'react'

function Pagination({ currentPage, lastPage, onPageChange }) {
    const pages = [];


    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(lastPage, startPage + 4);

    for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
    }

    return (
        <div className="flex justify-center items-center gap-2 my-4">

            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            >
                Previous
            </button>


            {startPage > 1 && (
                <>
                    <button onClick={() => onPageChange(1)} className="px-3 py-1">
                        1
                    </button>
                    {startPage > 2 && <span className="px-2">...</span>}
                </>
            )}

            {pages.map((num) => (
                <button
                    key={num}
                    onClick={() => onPageChange(num)}
                    className={`px-3 py-1 rounded ${num === currentPage ? "bg-blue-600 text-white" : "bg-gray-200"
                        }`}
                >
                    {num}
                </button>
            ))}

            {endPage < lastPage && (
                <>
                    {endPage < lastPage - 1 && <span className="px-2">...</span>}
                    <button onClick={() => onPageChange(lastPage)} className="px-3 py-1">
                        {lastPage}
                    </button>
                </>
            )}


            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === lastPage}
                className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            >
                Next
            </button>
        </div>
    );
}

export default Pagination;

