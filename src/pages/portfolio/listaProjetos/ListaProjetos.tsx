import React, { useEffect, useState } from "react";
import Portfolio from "../Portfolio";
import styles from './ListaProjetos.module.css';
import { Projetos, deleteProjeto, getProjetos, updateProjeto } from "../../../services/projetosService";
import { useLocation, useNavigate } from "react-router-dom";
import { Sidebar } from "../../../components/layouts/Sidebar";


const ListaProjetos: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [projetos, setProjetos] = React.useState<Projetos[]>([]);

    const fetchProjetos = async () =>{
        try {
            const projetos = await getProjetos();
            if (Array.isArray(projetos)) {
              const projetosValidos = projetos.filter(item => (
                item.nome && item.descricao && item.link
              ));
              setProjetos(projetosValidos);
            }
        } catch (error) {
            console.log('Erro ao buscar projetos', error)
        }
    };

    useEffect(() => {
        fetchProjetos();
    })

    const handleEdit = (projetos: Projetos) => {
        navigate('/portfolio/cadastrarprojeto', { state: projetos })
    }

    const handleDelete = async (id: number) => {
        try {
            await deleteProjeto(id);
            alert('Projeto excluído com sucesso!')
        } catch (error) {
            console.log('Ocorreu um erro ao deletar projeto.', error)
            
        }
    }
return(
    <>
    <Sidebar/>
    <Portfolio/>
    <div className={styles.table}>
    <h1 className={styles.tableTitle}>Lista de projetos</h1>
    <table>
        <thead>
            <tr>
                <th>Nome</th>
                <th>Descrição</th>
                <th>Link</th>
                <th>Ações</th>
            </tr>
        </thead>
        <tbody>
            {projetos.map((itemProjetos, index) => (
                <tr key={index}>
                <td>{itemProjetos.nome}</td>
                <td>{itemProjetos.descricao}</td>
                <td>{itemProjetos.link}</td>
                <td>
                    <button onClick={() => handleEdit(itemProjetos)}>Editar</button>
                    <button onClick={() => handleDelete(itemProjetos.id)}>Excluir</button>
                </td>
            </tr>                
            ))}
            
        </tbody>
    </table>        
    </div>

    </>
)
}

export default ListaProjetos;