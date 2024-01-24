import React, { useState } from 'react'
import { useNavigate } from 'react-router';

const SearchOrder = () => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate()
    const handleSubmit = (e) => {

        if (!query)  return;
        navigate(`/order/${query}`)
        setQuery('')
    }

  return (
    <form onSubmit={handleSubmit}>
    <input placeholder='Search order #' value={query} onChange={(e) => setQuery(e.target.value)} />
    </form>
  )
}

export default SearchOrder