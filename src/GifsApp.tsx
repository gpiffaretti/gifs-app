import { useState } from 'react'
import { CustomHeader } from './shared/components/CustomHeader'
import { SearchBar } from './gifs/SearchBar'
import { PreviousSearches } from './shared/components/PreviousSearches'
import { GifsContainer } from './gifs/GifsContainer'
import { getGifsByQuery } from './gifs/actions/get-gifs-by-query.action'
import type { Gif } from './gifs/interfaces/gif.interface';

interface GifsAppProps {
  maxPreviousSearches?: number;
}

export const GifsApp = ({ maxPreviousSearches = 5 }: GifsAppProps) => {

  const [previouSearches, setPreviousSearches] = useState<string[]>(['pokemon']);
  const [gifs, setGifs] = useState<Gif[]>([]);

  const handleTermClicked = (term: string) => {
    console.log(term);
    handleSearch(term);
  };

  const handleSearch = async (query: string) => {
    const trimmedQuery = query.trim().toLocaleLowerCase();
    console.log(trimmedQuery);
    // execute search
    const gifs = await getGifsByQuery(trimmedQuery);
    console.log(gifs);
    setGifs(gifs);

    // check for repeated elements
    if(previouSearches.includes(trimmedQuery)) return;
    
    // store the search term
    const newTerms = [trimmedQuery, ...previouSearches];

    if(newTerms.length > maxPreviousSearches) {
      newTerms.pop();
    }
    setPreviousSearches(newTerms);
  };

  return (
    <>
    <CustomHeader 
        title="Buscador de Gifs" 
        description="Encuentra los gifs que estás buscando" 
    />
    
    <SearchBar placeholder="Buscar gifs" onSearch={handleSearch} />

    <PreviousSearches previousSearches={previouSearches} onTermClicked={handleTermClicked} />

    <GifsContainer gifs={gifs} />
    </>
  )
}
