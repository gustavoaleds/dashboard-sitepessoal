import React from "react";
import Portfolio from '../Portfolio';
import * as Yup from 'yup';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import styles from './CadastrarProjeto.module.css';
import { useLocation, useNavigate } from "react-router-dom";

import { Projetos, createOrEditProjeto, createProjetos } from '../../../services/projetosService';

import Input from "../../../components/forms/Input/Input";
import TextArea from "../../../components/forms/textarea/textarea";

const CadastrarProjeto: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const projeto = location.state as Projetos;

    const initialValues: Projetos = {
        id: 0,
        nome:"",
        descricao:"",
        link:""
    };

    const validationSchema = Yup.object().shape({
        nome: Yup.string().required('Este campo é obrigatório!'),
        descricao: Yup.string().required('Este campo é obrigatório!'),
        link: Yup.string().required('Este campo é obrigatório!')
    });

    const onSubmit = async (values: Projetos, { resetForm }: {resetForm: () => void}) => {
        try{
            await createOrEditProjeto(values);
            console.log(values);
            resetForm();
            navigate('/portfolio/listaprojetos');
            alert('Formulário enviado com sucesso!');
        } catch(error){
            console.log('Erro ao enviar formulário:', error);
            alert('Ocorreu um erro ao enviar formulário!')
        }
    };

 return(
    <>
    <Portfolio/>
    <Formik initialValues={projeto || initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
    {({errors, touched}) => (
    <Form className={styles.form}>
        <h1 className={styles.formTitle}>Novo projeto</h1>
        <Input label="Nome do Projeto" name="nome" type="text" errors={errors.nome} touched={touched.nome}/>
        <TextArea label="Descrição do projeto" name="descricao" as="textarea" errors={errors.descricao} touched={touched.descricao}/>
        <Input label="Link da demonstração" name="link" errors={errors.link} touched={touched.link}/>
        <button type="submit">Salvar</button>
        </Form>
    )}
    </Formik>
    </>
 )
}
export default CadastrarProjeto;