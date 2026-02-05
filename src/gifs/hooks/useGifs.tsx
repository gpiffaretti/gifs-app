import { useRef, useState } from 'react'
import type { Gif } from '../interfaces/gif.interface';
import { getGifsByQuery } from '../actions/get-gifs-by-query.action';

interface Props {
  maxPreviousSearches?: number;
}

export const useGifs = ({ maxPreviousSearches = 5 }: Props) => {

    const [previouSearches, setPreviousSearches] = useState<string[]>(['pokemon']);
    const [gifs, setGifs] = useState<Gif[]>([]);

    const gifsCache = useRef<Map<string, Gif[]>>(new Map());

    const getGifs = async (query: string) => {
        // get from cache or use action
        if(gifsCache.current.has(query)) {
            return gifsCache.current.get(query)!;
        }
        
        return await getGifsByQuery(query);
    }
    const handleTermClicked = async (term: string) => {
        const gifs = await getGifs(term);
        setGifs(gifs);
    };

    const handleSearch = async (query: string) => {
        const trimmedQuery = query.trim().toLocaleLowerCase();
        // execute search
        const gifs = await getGifs(trimmedQuery);
        setGifs(gifs);
        gifsCache.current.set(trimmedQuery, gifs);

        // check for repeated elements
        if(previouSearches.includes(trimmedQuery)) return;
        
        // store the search term
        const newTerms = [trimmedQuery, ...previouSearches];

        if(newTerms.length > maxPreviousSearches) {
        newTerms.pop();
        }
        setPreviousSearches(newTerms);
    };
    return {
        previouSearches,
        gifs,

        handleTermClicked,
        handleSearch
    }
}
