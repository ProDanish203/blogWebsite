import React from 'react'
import "./Singleblog.css"
import { Link } from "react-router-dom";
import author from "../../Assets/Images/author.png";
import { Comment } from "../Comment/Comment";
import { Loader } from "../Loader/Loader";
import { UseBlogsContext } from "../../context/blogsContext";

export const Singleblog = ({ blog, blogTags, user, comments }) => {
console.log(blogTags)
  const { tempBlogs, singleBlogLoading} = UseBlogsContext();

  if(singleBlogLoading){
    return (
      <Loader/>
    )
  }

  return (
    <>
    <section className='singleBlog-section'>

    <div className="blog-single card">
      <div className="single-blog-upper">

        <div className="blog-upper-item">
          <i className='fas fa-comment'></i>
          <span>{comments.length}</span>
        </div>
        <div className="blog-upper-item">
            <i className='fas fa-heart'></i>
            <span  className='reaction-value'>{blog.reactions}</span>
        </div>
      </div>

      <div className="blog-title">{blog.title}</div>
      <div className="blog-desc">{blog.body}</div>

      <div className="blog-item-tags">

        <span> Popular tags : </span>
      {/* {
      blogTags.map((tag, i) => {
        return (
          <>
          <span className="blog-item-tag" key={i}>
            {tag}
          </span>
          </>
        )
      })
    } */}
    </div>

    </div>

    <div className="comments">
      <h2 className="heading">Comments: </h2>

      <div className="blog-comment-list">
        {
          comments.map((comment) => {
            return (
            <>
            <Comment comment={comment} key={comment.id}/>
            </>
            )
          })
        }
      </div>

    </div>


    {/* <div className="recent">
      <h2 className="heading">Recent Blogs: </h2>

      <div className="recent-blogs-list">
        {
          tempBlogs.slice(0, 5).map((blog) => {
            return(
              <>
                <div className="recent-blog" key={blog.id}>
                  <Link to={`/blog/${blog.id}`}>
                    <h3>{blog.title}</h3>
                  </Link>
                  <div className="recent-flex">
                    <i className='fas fa-heart'></i>
                    <span>{blog.reactions}</span>
                  </div>
                </div>
              </>
            )
          })
        }
      </div>

    </div> */}



    </section>
    </>
  )
}
