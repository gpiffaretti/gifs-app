import {} from 'react'

interface PreviousSearchesProps {
  previousSearches: string[];
  onTermClicked?: (term: string) => void;
}

export const PreviousSearches = ({ previousSearches, onTermClicked }: PreviousSearchesProps) => {
  return (
    <div className='previous-searches'>
        <h2>Busquedas previas</h2>
        <ul className='previous-searches-list'>
            {previousSearches.map((searchTerm) => (
                <li key={searchTerm} onClick={() => onTermClicked?.(searchTerm)}>{searchTerm}</li>
            ))}
        </ul>
    </div>
  )
}
