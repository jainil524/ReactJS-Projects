import { BrowserRouter, Routes, Route, Outlet, Link } from 'react-router-dom'
import Home from "./Home"
import NotFound from "./NotFound"
import BooksRoute from './BooksRoute'

function App() {

  return (
    <>

      <Routes>
        <Route path="/books" element={<h1>Extra Content</h1>} />
      </Routes>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* <Route path="/books" element={<BookLayout />}/>
        <Route path="/books/" element={<BookList />} />
        <Route path="/books/:id" element={<Book />} />
        <Route path="/books/new" element={<NewBook />} /> */}


        {/* =======================OR========================= */}


        {/* <Route path="/books" element={<BookLayout />}>
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
        </Route> */}
        
        {/* =======================OR========================= */}
        
        {/* <Route element={<BookLayout />}>
          <Route path="/books" element={<BookList />} />
          <Route path="/books/:id" element={<Book />} />
          <Route path="/books/new" element={<NewBook />} />
        </Route> */}

        {/* =======================OR========================= */}

        <Route path="/books/*" element={<BooksRoute />}/>
        
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </>
  )
}

export default App
