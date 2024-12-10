import { ILoginErrors, ILoginProps, IRegisterErrors, IRegisterProps } from "../interfaces/Types";

export function validateLoginForm(values: ILoginProps): ILoginErrors {
    const errors: ILoginErrors = {};
  
    // email
    if (!values.email) {
        errors.email = "The email field is required";
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email)) {
        errors.email = "Invalid email address";
    }
  
    // password
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
    }
  
    if (!values.address.trim()) {
        errors.address = "The address field is required";
    }
  
    if (!values.phone) {
        errors.phone = "The phone number field is required";
    } else if (!/^\d{10}$/.test(values.phone)) {
        errors.phone = "The phone number must be 10 digits long";
    }
  
    return errors;
};