import React, { useState, useEffect } from 'react';
import { FaComments, FaUserAlt } from 'react-icons/fa';
import './assets/css/Post.css';

const Post = ({ id, title, body, tags, reactions, handleCommentsClick, userId }) => {

  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch(`https://dummyjson.com/users/${userId}`);
      const data = await res.json();
      setUser(data);
    }

    fetchUser();
  }, [userId]);

  return (
    <div className="post">
      <div className="user-info">
        
        {user.image ? (
          <img src={user.image} alt="Profile Pic" className="profile-pic" />
        ) : (
          <FaUserAlt className="profile-pic altimg" />
        )}
        <span className="username">{user.username}</span>
      </div>
      <h2 className="post-title">{title}</h2>
      <p className="post-body">{body}</p>
      <div className="post-tags">
        {tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>
      <div className="post-info">
        <span className="reactions-count">Reactions: {reactions}</span>
        <span className="comments-icon" onClick={()=> handleCommentsClick(e,id)}>
          <FaComments /> {/* Using react-icons for comments icon */}
        </span>
      </div>
    </div>
  );
};

export default Post;
