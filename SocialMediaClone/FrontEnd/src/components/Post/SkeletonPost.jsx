import React from 'react'
import { FaComments } from 'react-icons/fa';
import "./assets/css/Post.css";
import "./assets/css/SkeletonPost.css";

function SkeletonPost() {
    return (
        <div className="post skeleton">
          <div className="user-info">
            <div className="profile-pic"></div>
            <span className="username"></span>
          </div>
          <h2 className="post-title"></h2>
          <p className="post-body"></p>
          <div className="post-tags">
            <span className="tag"></span>
            <span className="tag"></span>
            <span className="tag"></span>
          </div>
          <div className="post-info">
            <span className="reactions-count"></span>
            <span className="comments-icon">
              <FaComments /> {/* Using react-icons for comments icon */}
            </span>
          </div>
        </div>
      );
}

export default SkeletonPost
