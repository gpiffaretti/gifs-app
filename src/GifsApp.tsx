import { CustomHeader } from './shared/components/CustomHeader'
import { SearchBar } from './gifs/SearchBar'
import { PreviousSearches } from './shared/components/PreviousSearches'
import { GifsContainer } from './gifs/GifsContainer'
import { useGifs } from './gifs/hooks/useGifs';

export const GifsApp = () => {

  const { previouSearches,gifs,handleTermClicked,handleSearch } = useGifs({ maxPreviousSearches: 5 });

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
