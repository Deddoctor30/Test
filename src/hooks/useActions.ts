import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import * as UserActionCreators from '../store/asyncActions/posts'

export const useActions = () => {
   const dispatch = useDispatch()
   return bindActionCreators(UserActionCreators, dispatch)
}