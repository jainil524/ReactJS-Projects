import React, { useState, useEffect } from 'react';
import useLoading from '../../hooks/useLoading';
import Post from '../../components/Post/Post';
import SkeletonFeed from '../../pages/Feeds/SkeletonFeed';
import "./css/Feeds.css";

function Feeds() {
    const [posts, setPosts] = useState([]);
    const [loading, startLoading, stopLoading] = useLoading();
    const [page, setPage] = useState(0);
    const [reachedEnd, setReachedEnd] = useState(false);

    useEffect(() => {
        fetchData();
    }, [page]);

    async function fetchData() {
        startLoading();
        try {
            let res = await fetch(`https://dummyjson.com/posts?limit=10&skip=${10*page}`);
            let data = await res.json();
            if (data.posts.length === 0) {
                setReachedEnd(true);
            } else {
                setPosts([...posts, ...data.posts]);
            }
            stopLoading();
            console.log(data);
        } catch (error) {
            console.error('Error fetching posts:', error);
            stopLoading();
        }
    }

    function handleCommentsClick(e, postId) {
        console.log(e, postId);
    }

    function handleScroll() {
        const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
        if (scrollTop + clientHeight >= scrollHeight - 5 && !loading && !reachedEnd) {
            setPage(page + 1);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [loading, reachedEnd]);

    return (
        <div className='feeds'>
            {loading && posts.length === 0 ? (
                <SkeletonFeed />
            ) : (
                posts.map((post) => (
                    <Post key={post.id} {...post} handleCommentsClick={handleCommentsClick} />
                ))
            )}
            {loading && posts.length > 0 && <SkeletonFeed />}
        </div>
    );
}

export default Feeds;
