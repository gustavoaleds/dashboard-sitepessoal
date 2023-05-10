import React, { useEffect, useState } from "react";
import Portfolio from "../Portfolio";
import styles from './ListaProjetos.module.css';
import { Projetos, deleteProjeto, getProjetos, updateProjeto } from "../../../services/projetosService";
import { useLocation, useNavigate } from "react-router-dom";
import { Sidebar } from "../../../components/layouts/Sidebar";
import { Column, Table } from "../../../components/commons/table";


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

    const handleDelete = async (projetos: Projetos) => {
        try {
            await deleteProjeto(projetos.id);
            alert('Projeto excluído com sucesso!')
        } catch (error) {
            console.log('Ocorreu um erro ao deletar projeto.', error)
            
        }
    }
    const columns: Column<Projetos>[] = [
        {header: 'Nome', accessor: 'nome'},
        {header: 'Descrição', accessor: 'descricao'},
        {header: 'Link', accessor: 'link'},
    ];
return(
    <>
    <Sidebar/>
    <Portfolio/>
    <h1 className={styles.tableTitle}>Lista de projetos</h1>
    <Table
        columns={columns}
        data={projetos}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        />   
    </>
)
}

export default ListaProjetos;