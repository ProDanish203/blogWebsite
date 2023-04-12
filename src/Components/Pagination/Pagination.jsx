import React from 'react'
import "./Pagination.css"

export const Pagination = ({ noOfBlogs, paginateHandler}) => {

  let noOfPaginateItems = Math.ceil(noOfBlogs / 6);

  return (
    <>
        <div className="paginate-items">
        {
          [...Array(noOfPaginateItems)].map((item, index) => {
            return (
              <>
                <button type='button' className='paginate-item' onClick={() => paginateHandler(index + 1)} key={index}>{index + 1}</button>
              </>
            )
          })
        }
        

        </div>

    </>
  )
}
