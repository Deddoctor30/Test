/* eslint-disable import/no-anonymous-default-export */
import * as AlbumActionCreators from './album'
import * as PostActionCreators from './posts'

export default {
   ...AlbumActionCreators,
   ...PostActionCreators
}