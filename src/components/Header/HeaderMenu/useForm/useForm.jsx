import React, {useState} from 'react';

const useForm = (initialValues, callback) => {
    {/*const [values, setValues] = useState(initialValues);*/}
    const [values, setValues] = useState({});
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);

        if(event) event.preventDefault();

        callback();
    };

    const handleChange = (event) => {
        event.persist();

        setValues(values => ({ ...values, [event.target.name]: event.target.value}));
        {/*console.log(event.target.value);*/}
        console.log(values);

    };

    return {
        handleChange,
        handleSubmit,
        values,
        validated,
    }
};

export default useForm;