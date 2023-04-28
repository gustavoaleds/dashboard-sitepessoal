import React from 'react';
import styles from './Portfolio.module.css';
import { Link } from 'react-router-dom';
const Portfolio = () => {
    return(
        <div className={styles.buttons}>
            <h2>Portfolio</h2>
            <Link to='cadastrarprojeto'><input type='button' value='Cadastrar projeto'/></Link>
            <input type='button' value='Listar projetos'/>
        </div>
    )
}

export default Portfolio;