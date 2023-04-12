import React, { useState } from 'react'
import "./BlogList.css"
import { Link } from "react-router-dom";
import { Loader } from "../Loader/Loader";
import { Pagination } from "../Pagination/Pagination";
import { UseBlogsContext } from "../../context/blogsContext";

export const BlogList = ({ blogs }) => {

  const { blogsLoading, searchBlogsLoading} = UseBlogsContext();
  const blogLimit = 6;
  const [paginate, setPaginate] = useState(1 * blogLimit);

  const paginateHandler = (value) => setPaginate(value * blogLimit);

  if(blogsLoading || searchBlogsLoading){
    return(
      <Loader/>
    )
  }

  return (
    <>
    <section className='blogs-section'>
      
    <div className="blog-items grid-6">
      {
        blogs.slice(paginate - 6, paginate).map((blog) => {
          return (
            <>
              <div className="blog-item" key={blog.id}>

                <div className="blog-item-title">
                  {blog.title}
                </div>
                <div className="blog-item-desc">
                  {(blog.body).substring(0, 100)} ...
                </div>

                <div className="blog-item-reaction">
                  <i className='fas fa-heart'></i>
                  <span  className='reaction-value'>{blog.reactions}</span>
                </div>

                <div className="blog-item-tags">
                  {
                    blog.tags.map((tag, tagI) => {
                    return (
                      <>
                      <span className='blog-item-tag' key={tagI}>
                          {tag}
                      </span>
                      </>
                    )
                  })
                  }
                </div>

                <div className="blog-item-btn">
                  <Link to={`/blog/${blog.id}`} className="blog-btn">Read More</Link>
                </div>

              </div>
            </>
          )
        })
      }
    </div>
      
    <Pagination noOfBlogs={blogs.length} paginateHandler={paginateHandler}/>

    </section>
    </>
  )
}
