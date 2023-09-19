import { PostAction, PostActionsTypes, PostState } from "../types/post"

const initialValue: PostState = {
   data: [],
   loading: false,
   error: null
}

export const postReducer = (state = initialValue, action: PostAction): PostState => {
   switch (action.type) {
     case PostActionsTypes.FETCH_POSTS:
       return {...state, loading: true}
     case PostActionsTypes.FETCH_POSTS_SUCCESS:
       return {...state, loading: false, data: action.payload}
     case PostActionsTypes.FETCH_POSTS_ERROR:
       return {...state, loading: false, error: action.payload}
     default:
       return state
   }
}

