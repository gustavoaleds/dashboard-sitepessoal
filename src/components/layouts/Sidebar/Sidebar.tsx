import React from 'react';

import styles from './Sidebar.module.css';

const Sidebar: React.FC = () => {
    return(
    <aside className={styles.sidebar}>
        <h1 className={styles.titleSidebar}>aleds</h1> 

        <nav>
            <li className={styles.itemMenu}>Portfolio</li>
        </nav>  

     </aside>

    )
}

export default Sidebar;