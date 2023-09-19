import { Dispatch } from "redux"
import { AlbumActionsTypes, AlbumbAction } from "../../types/album"

export const fetchAllAlbums = () => {
   return async (dispatch: Dispatch<AlbumbAction>) => {
      try {
         dispatch({type: AlbumActionsTypes.FETCH_POSTS})
         const response = await fetch('https://jsonplaceholder.typicode.com/albums?_limit=10')
         const data = await response.json()
         dispatch({type: AlbumActionsTypes.FETCH_POSTS_SUCCESS, payload: data})
      } catch (e) {
         dispatch({type: AlbumActionsTypes.FETCH_POSTS_ERROR, payload: 'Произошла ошибка при загрузке альбомов'})
      }
   }
}