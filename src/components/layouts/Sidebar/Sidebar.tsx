import React from 'react';

import styles from './Sidebar.module.css';
import {Link} from 'react-router-dom'
import { useAuth } from '../../../contexts/AuthContext';
const Sidebar = () => {
    const { logout } = useAuth();
    return(
    <aside className={styles.sidebar}>
        <Link to='/'><h1>aleds</h1></Link>
        <nav>
            <Link to='/portfolio'><li className={styles.itemMenu}>Portfolio</li></Link>
            <Link onClick={logout} to='/login'><li className={styles.logout}>Sair</li></Link>
        </nav>  
     </aside>
    )
}

export default Sidebar;