import React from "react";
import styles from './Login.module.css';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import Input from "../../components/forms/Input";
import { useNavigate } from "react-router-dom";
import { login as loginService } from "../../services/authService";
import { useAuth } from "../../contexts/AuthContext";

interface LoginValues {
    email: string;
    password: string;
}

const initialValues: LoginValues = {
    email: "",
    password: "",
};

const validationSchema = Yup.object().shape({
    email: Yup.string()
    .email("E-mail inválido")
    .required("E-mail é obrigatório"),
    password: Yup.string()
    .min(6, "A senha deve ter pelo menos 6 caracteres")
    .required("Senha é obrigatória")
});

const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const onSubmit = async (values: LoginValues) => {
        try {
            const user = await loginService(values.email, values.password);
            login(user);
            navigate("/");
            console.log(values);
        } catch (error) {
            alert("Erro ao realizar login.")
            console.log('Ocorreu um erro: ', error);
        }
    }
    return(
        <div className={styles.login}>
            
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {({errors, touched}) => (
                <Form className={styles.loginForm}>
                 <h1 className={styles.loginTitle}>Login</h1>
                    <Input
                    label="Email"
                    name="email"
                    type="email"
                    errors={errors.email}
                    touched={touched.email}
                    />

                    <Input
                    label="Senha"
                    name="password"
                    type="password"
                    errors={errors.password}
                    touched={touched.password}
                    />
                    <button
                    type="submit"
                    className={styles.loginButton}>
                        Entrar
                    </button>
                </Form>
            )}
            </Formik>
        </div>
    )
}
export default Login;