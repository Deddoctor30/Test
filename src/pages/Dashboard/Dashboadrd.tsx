import { useEffect, useState } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import styles from './Dashboadrd.module.scss';

export default function Dashboard() {
  const [albums, setAlbums] = useState([])
  const {data, error, loading} = useTypedSelector(state => state.albums)
  const {} = useActions()

  useEffect(() => {

  }, [])

   return (
     <div className={styles.dashboard}>
       <h2>Dashboard</h2>
       {data.map(item => 
          <div key={item}>{item}</div>
      )}
     </div>
   );
 }