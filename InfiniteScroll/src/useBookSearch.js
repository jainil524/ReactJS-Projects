import { useState, useEffect } from "react";
import axios from "axios";

export default function useBookSearch(query, pageNumber) {

    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(false);
    const [books,setBooks] = useState([]);
    const [hasMore,setHasMore] = useState(false);

    useEffect(()=>{
        setBooks([])
    },[query])

    useEffect(() => {
        
        let cancle;
        setLoading(true)
        setError(false)

        axios({
            method: 'GET',
            withCredentials: false,
            url: 'http://openlibrary.org/search.json',
            params: {q: query, page: pageNumber},
            cancelToken: new axios.CancelToken(c=> cancle = c)
        }).then(res=>{
            setBooks( prevBook => {
                let newBookTitles = res.data.docs.map(book => book.title);  // Make the arrays of books with only title
                let combineOldAndNewBooks = [...prevBook,...newBookTitles];

                let UniqueBookOnly = [...(new Set(combineOldAndNewBooks))];     // Conver the combined books array to set to get rid of duplicate books and the make the set back to the array

                return UniqueBookOnly;
            } )
            setHasMore(res.data.docs.length > 0);
            setLoading(false);
        }).catch(e=>{
            if(axios.isCancel(e)) return;
            setError(true);
        })
        return ()=>cancle()
    },[query, pageNumber]);

    return {loading,error,books,hasMore};
}
