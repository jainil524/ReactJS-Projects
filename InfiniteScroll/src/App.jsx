import React,{useState,useRef,useCallback} from 'react'
import useBookSearch from './useBookSearch'

function App() {
  const [query,setQuery] = useState('');
  const [pageNumber,setPageNumber] = useState(1);
  const {loading,error,books,hasMore} =  useBookSearch(query,pageNumber)
  const observer = useRef();
  
  const lastBookElementRef = useCallback(node=>{
    if(loading) return
    if(observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(entry=>{
      if(entry[0].isIntersecting && hasMore){
        setPageNumber((prevPageNumber)=>{
          return prevPageNumber + 1
        })
      }
    })


    if(node) observer.current.observe(node);
  },[loading,hasMore])


  function handleSearch(e){
    setQuery(e.target.value);
    setPageNumber(1);
  }

  
  return (
    <>
      <input value={query} onChange={handleSearch} type="text" name="" id="" />
      {
        books.map((book,index)=>{
          if(books.length === index+1){
            return <div ref={lastBookElementRef} key={book}>{book}</div>
          }
          return <div key={book}>{book}</div>
        })
      }
      <div>{loading?"Loading...":""}</div>
      <div>{error?"Error":""}</div>
    </>
  )
}

export default App
