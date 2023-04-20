import React from 'react';

import styles from './Footer.module.css';

const Footer: React.FC = () => {
    return(
        <footer className={styles.footer}>
            <p>Desenvolvido por Gustavo Alexandre | <b>Comeia Academy 2023</b></p>
        </footer>
    )
}

export default Footer;