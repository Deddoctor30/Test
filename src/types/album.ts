export enum AlbumActionsTypes {
   FETCH_POSTS = "FETCH_ALBUMS",
   FETCH_POSTS_SUCCESS = "FETCH_ALBUMS_SUCCESS",
   FETCH_POSTS_ERROR = "FETCH_ALBUMS_ERROR"
}

interface FetchAlbumb {
   type: AlbumActionsTypes.FETCH_POSTS
}
 
interface FetchAlbumbSuccess {
   type: AlbumActionsTypes.FETCH_POSTS_SUCCESS
   payload: any[]
}
 
interface FetchAlbumbError {
   type: AlbumActionsTypes.FETCH_POSTS_ERROR
   payload: string
}
 
export type AlbumbAction = FetchAlbumb | FetchAlbumbSuccess | FetchAlbumbError

export interface AlbumsState {
   data: any[]
   loading: boolean
   error: null | string
 }

export interface Albums {
   userId: number
   id: number
   title: string
}