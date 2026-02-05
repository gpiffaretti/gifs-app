import type { GiphyResponse } from '../interfaces/giphy.response'
import type { Gif } from '../interfaces/gif.interface';
import { giphyAPI } from '../api/giphy.api';


export const getGifsByQuery = async (query: string): Promise<Gif[]> => {
    
    const response = await giphyAPI.get<GiphyResponse>('/search', {
      params: {
        q: query,
        limit: 10,
      }  
    })
    
    return response.data.data.map(giphyGif => ({
      id: giphyGif.id,
      title: giphyGif.title,
      url: giphyGif.images.original.url,
      width: Number.parseInt(giphyGif.images.original.width),
      height: Number.parseInt(giphyGif.images.original.height),
    }));
}
// https://api.giphy.com/v1/gifs/search?api_key=&q=charmander&limit=10&offset=0&rating=g&lang=en&bundle=messaging_non_clips