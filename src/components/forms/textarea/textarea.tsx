import React from 'react';

import {Field, ErrorMessage } from 'formik';

import styles from './textarea.module.css'

interface InputProps {
    label: string;
    name: string;
    as: string;
    errors?: string;
    touched?: boolean;
}

const TextArea: React.FC<InputProps> = ({label, name, as = 'textarea', errors, touched}) => {
    return(
        <fieldset>
            <label htmlFor={name}>{label}</label>
            <Field 
            as={as}
            id={name}
            name={name}
            className={`${styles.description} ${touched && errors && styles.error}`}/>
            <ErrorMessage name={name} component="div" className={styles.errorMsg}/>
        </fieldset>
    )
}

export default TextArea;