import React from 'react';
import styles from './Portfolio.module.css';
import { Link } from 'react-router-dom';
const Portfolio = () => {
    return(
        <div className={styles.buttons}>
            <h2>Portfolio</h2>
            <Link to='/portfolio/cadastrarprojeto'><input type='button' value='Cadastrar projeto'/></Link>
            <Link to='/portfolio/listaprojetos'><input type='button' value='Listar projetos'/></Link>
        </div>
    )
}

export default Portfolio;