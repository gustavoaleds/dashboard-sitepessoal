import React, { useState } from "react";
import Portfolio from "../Portfolio";
import styles from './ListaProjetos.module.css';

interface Projetos{
    nome: string;
    descricao: string;
    link: string;
};

const ListaProjetos: React.FC = () => {
    const [projetos, setProjetos] = useState<Projetos[]>([
        {
            nome: 'Nexus Society',
            descricao: 'Descrição do projeto nexus society.',
            link: 'www.nexussociety.com'
        },
        {
            nome: 'Nexus Society',
            descricao: 'Descrição do projeto nexus society.',
            link: 'www.nexussociety.com'
        },  
        {
            nome: 'Nexus Society',
            descricao: 'Descrição do projeto nexus society.',
            link: 'www.nexussociety.com'
        }
    ]
    );
return(
    <>
    <Portfolio/>
    <div className={styles.table}>
    <h1 className={styles.tableTitle}>Lista de projetos</h1>
    <table>
        <thead>
            <tr>
                <th>Nome</th>
                <th>Descrição</th>
                <th>Link</th>
            </tr>
        </thead>
        <tbody>
            {projetos.map((itemProjetos, index) => (
                <tr key={index}>
                <td>{itemProjetos.nome}</td>
                <td>{itemProjetos.descricao}</td>
                <td>{itemProjetos.link}</td>
            </tr>                
            ))}
            
        </tbody>
    </table>        
    </div>

    </>
)
}

export default ListaProjetos;