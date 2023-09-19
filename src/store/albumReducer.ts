import { AlbumActionsTypes, AlbumbAction, AlbumsState, Albums } from "../types/album"

const initialValue: AlbumsState = {
   data: [],
   loading: false,
   error: null
}

export const albumReducer = (state = initialValue, action: AlbumbAction): AlbumsState => {
   switch (action.type) {
     case AlbumActionsTypes.FETCH_POSTS:
       return {...state, loading: true}
     case AlbumActionsTypes.FETCH_POSTS_SUCCESS:
       return {...state, loading: false, data: action.payload}
     case AlbumActionsTypes.FETCH_POSTS_ERROR:
       return {...state, loading: false, error: action.payload}
     default:
       return state
   }
}