import * as yup from 'yup';

export const InputSchema=yup.object().shape({
    email: yup.string().email("Enter valid email").required("Email is required !"),
    password:yup.string().required("Password field cannot be empty !")
});