import React, { useEffect } from 'react'
import "./singleBlogPage.css"
import { Title } from "../../Components/Title/Title";
import { Singleblog } from "../../Components/Singleblog/Singleblog";
import { UseBlogsContext } from "../../context/blogsContext";
import { useParams } from "react-router-dom";
import { banner } from "../../utils/images";
import { useUserContext } from "../../context/userContext";
import { useCommentContext } from "../../context/commentContext";

export const SingleBlogPage = () => {

  const { fetchSingleBlog, singleBlog} = UseBlogsContext();

  const { fetchSingleUser, singleUser} = useUserContext(); 
  const { fetchCommentsByPost, commentsByPost} = useCommentContext(); 

  const { id } = useParams();
  // console.log(id)

  useEffect(() => {
    fetchSingleBlog(id);

    if(singleBlog.userId) fetchSingleUser(singleBlog.userId);
    if(singleBlog.id) fetchCommentsByPost(singleBlog.id);

  }, [singleBlog.userId, singleBlog.id, id])

  // console.log(singleUser)
  

  return (
    <>
    
    <header className='header single-header' style={{
      background: `linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,0.2)), url(${banner}) center/cover no-repeat`
    }}>

        <Title title="Blog Details" color="#fff"/>
    </header>

    <section className="singleBlog-section">

      <div className="container">
          <div className="ssection-content">

            <Singleblog blog={singleBlog} blogTags={singleBlog.tags} user={singleUser} comments={commentsByPost}/>

          </div>
      </div>

    </section>

    </>
  )
}
