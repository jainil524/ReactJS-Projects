import React from 'react'
import { useOutletContext, useParams } from 'react-router-dom'

function Book() {
  const {id} = useParams()
  const {heelo} = useOutletContext()
  return (
      <>
        <h1>Book {id}</h1>
        <h1>{heelo}</h1>
      </>

  )
}

export default Book
