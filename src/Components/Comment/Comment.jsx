import React, { useEffect, useState } from 'react'
import "./Comment.css"
import axios from "../../api/axios";
import { USER_URL } from "../../utils/constants";

export const Comment = ({comment}) => {

  const [postUser, setPostUser] = useState({})

  useEffect(() => {
   
    const fetchPostUser = async(id) => {
      const response = await axios.get(`${USER_URL}/${id}`);
      setPostUser(response.data);
    }

    fetchPostUser(comment.user.id);
    
  })
  return (
    <div>

      <div className="comment">

        <div className="comment-img">
          <img src={postUser.image} />
        </div>

        <div className="comment-body">
          

        <div className="comment-name">
          <span>{comment.user.username}</span>
        </div>  

      <div className="comment-content">
        {comment.body}
      </div>

        </div>
      </div>  

    </div>
  )
}
