import React from 'react'
import { useState, useEffect } from 'react'
import Post from '../../components/Post/Post';
import "./css/Feeds.css";

function Feeds() {
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        async function fetchData() {
            let res = await fetch('https://dummyjson.com/posts?limit=10');
            let data = await res.json();
            setPosts(data.posts);
            console.log(data);
        }

        fetchData();
    }, []);

    function handleCommentsClick(e,postId) {
        // Do something when the comments icon is clicked
        console.log(e,postId);
    }

    return (
        <>
            <div className='feeds'>
                {posts.map((post, index) => (
                    <Post className="" key={index} {...post} handleCommentsClick={handleCommentsClick} />
                ))}
            </div>
        </>
    )
}

export default Feeds
