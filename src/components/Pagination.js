import React from 'react'

const Pagination = ({ pageNumber, setPageNumber }) => {
    let next = () => {
        if(pageNumber === 9) return;
        setPageNumber((x) => x + 1) // represents previous value.
    }
    let prev = () => {
        if(pageNumber === 1) return;
        setPageNumber((x) => x - 1)
    }
    return (
        <div className="container d-flex justify-content-center gap-3 my-3">
           <button onClick={prev} className="btn btn-outline-warning">previous</button>
           <button onClick={next} className="btn btn-outline-warning">next</button>
        </div>
    )
}

export default Pagination;