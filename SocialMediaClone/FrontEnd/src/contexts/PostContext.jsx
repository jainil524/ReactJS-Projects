import React, { useState } from 'react'
import { createContext } from 'react'

export const PostContext = createContext();

function PostContextProvider({ children }) {

    const [post, setPost] = useState(null);

  return (
    <>
        <PostContext.Provider value={{post,setPost}}>
            {children}
        </PostContext.Provider>
    </>
  )
}

export default PostContextProvider

