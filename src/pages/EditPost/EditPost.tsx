import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { TPost } from '../../types/post'
import styles from './EditPost.module.scss'

const EditPost = () => {
   const {id} = useParams()
   const [post, setPost] = useState<TPost | null>(null)
   const navigate = useNavigate()

   const goBack = () => navigate(-1)
   
   useEffect(() => {
      fetchPost()
   }, [])

   const fetchPost = () => {
      fetch('https://jsonplaceholder.typicode.com/posts/' + id)
         .then(response => response.json())
         .then(json => setPost(json))
   }

  return (
   <div className={styles.editPost}>
    <button className={styles.editPost__link} onClick={goBack}>Вернуться назад</button>
    <div className={styles.editPost__body}>EditPost {post?.id}</div>
   </div>
  )
}

export default EditPost