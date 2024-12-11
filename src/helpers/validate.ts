import { ILoginErrors, ILoginProps, IRegisterErrors, IRegisterProps } from "../interfaces/Types";

export function validateLoginForm(values: ILoginProps): ILoginErrors {
    const errors: ILoginErrors = {};
  
    
    if (!values.email) {
        errors.email = "The email field is required";
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email)) {
        errors.email = "Invalid email address";
    }
  
    
    if (!values.password) {
        errors.password = "The password field is required";
    } else if (values.password.length < 6) {
        errors.password = "The password must be at least 6 characters long";
    }
  
    return errors;
}

export const validateRegisterForm = (values: IRegisterProps): IRegisterErrors => {
    const errors: IRegisterErrors = {};

    
    if (!values.name.trim()) {
        errors.name = "The name field is required";
    } else if (values.name.length > 24) {
        errors.name = "The name must not exceed 24 characters";
    }

    
    if (!values.email) {
        errors.email = "The email field is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Invalid email address";
    }


    if (!values.password) {
        errors.password = "The password field is required";
    } else if (values.password.length < 6) {
        errors.password = "The password must be at least 6 characters long";
    } else if (values.password.length > 24) {
        errors.password = "The password must not exceed 24 characters";
    } else if (!/(?=.*[A-Z])(?=.*\d)/.test(values.password)) {
        errors.password = "The password must contain at least one uppercase letter and one number";
    }


    if (!values.address.trim()) {
        errors.address = "The address field is required";
    } else if (values.address.length > 24) {
        errors.address = "The address must not exceed 24 characters";
    }


    if (!values.phone) {
        errors.phone = "The phone number field is required";
    } else if (!/^\d{10}$/.test(values.phone)) {
        errors.phone = "The phone number must be 10 digits long";
    }

    return errors;
};