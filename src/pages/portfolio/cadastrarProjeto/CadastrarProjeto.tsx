import React from "react";
import Portfolio from '../Portfolio';
import styles from './CadastrarProjeto.module.css';

import Input from "../../../components/forms/Input/Input";
import TextArea from "../../../components/forms/textarea/textarea";

import * as Yup from 'yup';
import {Formik, Form, Field, ErrorMessage} from 'formik';

interface FormValues{
    nome: string;
    descricao: string;
    link: string;
}

const CadastrarProjeto: React.FC = () => {

    const initialValues: FormValues = {
        nome:"",
        descricao:"",
        link:""
    };

    const validationSchema = Yup.object().shape({
        nome: Yup.string().required('Este campo é obrigatório!'),
        descricao: Yup.string().required('Este campo é obrigatório!'),
        link: Yup.string().required('Este campo é obrigatório!')
    });

    const onSubmit = (values: FormValues, { resetForm }: {resetForm: () => void}) => {
        console.log(values);
        resetForm();
        alert('Formulário enviado com sucesso!');
    };

 return(
    <>
    <Portfolio/>
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
    {({errors, touched}) => (
    <Form className={styles.form}>
        <h1 className={styles.formTitle}>Novo projeto</h1>
        <Input label="Nome do Projeto" name="nome" type="text" errors={errors.nome} touched={touched.nome}/>
        <TextArea label="Descrição do projeto" name="descricao" as="textarea" errors={errors.descricao} touched={touched.descricao}/>
        <Input label="Link da demonstração" name="link" errors={errors.link} touched={touched.link}/>
        <button type="submit">Cadastrar</button>
        </Form>
    )}
    </Formik>
    </>
 )
}
export default CadastrarProjeto;