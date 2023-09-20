import { useEffect, useState } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { AlbumsState } from '../../types/album';
import styles from './Dashboadrd.module.scss';

export default function Dashboard() {
  const [albums, setAlbums] = useState([])
  const {data, error, loading}: AlbumsState = useTypedSelector(state => state.albums)
  const {fetchAllAlbums} = useActions()

  useEffect(() => {
    fetchAllAlbums()
  }, [])

   return (
     <div className={styles.dashboard}>
       <h2>Dashboard</h2>
       {data.map(item => 
          <div key={item.id}>{item.title}</div>
      )}
     </div>
   );
 }