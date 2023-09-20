export enum PostActionsTypes {
   FETCH_POSTS = "FETCH_POSTS",
   FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS",
   FETCH_POSTS_ERROR = "FETCH_POSTS_ERROR"
}

interface FetchPosts {
  type: PostActionsTypes.FETCH_POSTS
}

interface FetchPostsSuccess {
  type: PostActionsTypes.FETCH_POSTS_SUCCESS
  payload: any[]
}

interface FetchPostsError {
  type: PostActionsTypes.FETCH_POSTS_ERROR
  payload: string
}

export type PostAction = FetchPosts | FetchPostsSuccess | FetchPostsError

export interface PostState {
  data: TPost[]
  loading: boolean
  error: null | string
}

export interface TPost {
   userId: number
   id: number
   title: string
   body: string
}