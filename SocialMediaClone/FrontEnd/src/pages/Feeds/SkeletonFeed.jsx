import React from 'react'
import "./css/Feeds.css";
import SkeletonPost from '../../components/Post/SkeletonPost';

function SkeletonFeed() {
  return (
    <div className='feeds'>
        <SkeletonPost/>
        <SkeletonPost/>
        <SkeletonPost/>
        <SkeletonPost/>
    </div>
  )
}

export default SkeletonFeed
    