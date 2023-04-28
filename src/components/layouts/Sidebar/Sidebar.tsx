import React from 'react';

import styles from './Sidebar.module.css';
import {Link} from 'react-router-dom'
const Sidebar: React.FC = () => {
    return(
    <aside className={styles.sidebar}>
        <Link to='/'><h1>aleds</h1></Link>
        <nav>
            <Link to='portfolio'><li className={styles.itemMenu}>Portfolio</li></Link>
        </nav>  
     </aside>
    )
}

export default Sidebar;