import { Link } from "react-router-dom";
import styles from './NoMatch.module.scss';

export default function NoMatch() {
   return (
     <div className={styles["no-match"]}>
       <h2 className={styles["no-match__title"]}>Nothing to see here!</h2>
       <p>
         <Link className={styles["no-match__button"]} to="/">Go to the home page</Link>
       </p>
     </div>
   );
 }