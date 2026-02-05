import { useEffect, useState, type KeyboardEvent } from "react"

interface Props {
  placeholder: string
  onSearch: (term: string) => void
}

export const SearchBar = ({ placeholder, onSearch }: Props) => {
  const [query, setQuery] = useState('')

  useEffect(() => {
    
    const timeoutId = setTimeout(() => {
      console.log('query', query)
      if(query.trim()) {
        onSearch(query.trim())
      }
    }, 1000)
    
    return () => {
      clearTimeout(timeoutId)
    }
  }, [query])

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {

    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  const handleSearch = () => {
    if(query.trim()) {
      onSearch(query.trim())
      setQuery('')
    }
  }

  return (
    <div className='search-container'>
      <input type='text' 
        placeholder={placeholder} 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        onKeyDown={handleKeyDown} />
      <button onClick={handleSearch}>Search</button>
    </div>
  )
}
