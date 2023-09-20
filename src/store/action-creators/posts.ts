import { Dispatch } from "redux"
import { PostAction, PostActionsTypes } from "../../types/post"

export const fetchAllPosts = () => {
   return async (dispatch: Dispatch<PostAction>) => {
      try {
         dispatch({type: PostActionsTypes.FETCH_POSTS})
         const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
         const data = await response.json()
         dispatch({type: PostActionsTypes.FETCH_POSTS_SUCCESS, payload: data})
      } catch (e) {
         dispatch({type: PostActionsTypes.FETCH_POSTS_ERROR, payload: 'Произошла ошибка при загрузке постов'})
      }
   }
}