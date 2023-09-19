import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { TPost } from '../../types/post'
import styles from './Post.module.scss'

const Post = () => {
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
    <div className={styles.post}>
      {post &&
         <>
            <button className={styles.post__link} onClick={goBack}>Вернуться назад</button>
            <div>
               <div className={styles.post__title}>{post.title}</div>
               <div className={styles.post__body}>{post.body}</div>
            </div>
            <div className={styles.post__button}>
               <Link to={`/posts/${id}/edit`}>Редактировать</Link>
            </div>
         </>
      }
    </div>
  )
}

export default Post