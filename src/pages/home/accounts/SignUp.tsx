import { useState } from "react";
import { toast } from "react-toastify";
import { useForm, type FieldErrors } from "react-hook-form";

import Header from "../../../components/Header.tsx";
import { sections } from "../data/index.ts";

import type { Button } from "../../../types/index.ts";
import PasswordPolicy from "../../../components/PasswordPolicy.tsx";

export default function SignUp() {

    const [showPolicy, setShowPolicy] = useState(false);

    const ERRORMESSAGES = {
        REQUIRED: "All Fields Are Required",
        NAME_LENGTH: "First and Last Names must be between 2 and 25 letters",
        NAME_PATTERN: "First and Last Names must only contain alphabetical letters",
        EMAIL_LENGTH: "Emails cannot be longer than 255 letters",
        EMAIL_PATTERN: "Please enter a valid email address",
        PASSWORD_PATTERN: "Password is Invalid",
        CONFIRMPASSWORD_PATTERN: "Passwords do not match"
    }
       
    
    type FormValues = {
        firstName: string,
        lastName: string,
        email: string,
        password: string,
        confirmPassword: string,
    }

    const { register, watch, handleSubmit } = useForm<FormValues>();

    function onError(errors: FieldErrors<{ firstName: string; lastName: string; email: string; password: string; confirmPassword: string; }>) {
        toast.error(Object.values(errors)[0].message as string);
    }

    const buttons: Button[] = [{
        text: "LOGIN",
        link: "../login",
        id: "login"
    }]

    const inputClassMultiple: string = "account-input-multiple";
    const inputClass: string = "account-input";

    return(
        <>
            <Header buttons={buttons} sections={sections}/>
            <form 
                className="account-form" 
                onSubmit={
                    handleSubmit(
                        (data) => { 
                            console.log(data); 
                            }, 
                        (errors) => {
                            onError(errors);
                            console.log(errors)
                        })}>

                <h1>Create a New Account</h1>
                <div className="flex">
                    <input {...register("firstName", { 
                        required: ERRORMESSAGES.REQUIRED, 
                        pattern: {
                            value: /^[A-Za-z]+$/,
                            message: ERRORMESSAGES.NAME_PATTERN
                        },
                        minLength: {
                            value: 2,
                            message: ERRORMESSAGES.NAME_LENGTH
                        },
                        maxLength: {
                            value: 25,
                            message: ERRORMESSAGES.NAME_LENGTH
                        }})}
                        className={inputClassMultiple}
                        placeholder="First Name"
                        key="firstName"
                    />
                    <input {...register("lastName", { 
                        required: ERRORMESSAGES.REQUIRED, 
                        pattern: {
                            value: /^[A-Za-z]+$/,
                            message: ERRORMESSAGES.NAME_PATTERN
                        },
                        minLength: {
                            value: 2,
                            message: ERRORMESSAGES.NAME_LENGTH
                        },
                        maxLength: {
                            value: 25,
                            message: ERRORMESSAGES.NAME_LENGTH
                        }})}
                        className={inputClassMultiple}
                        placeholder="Last Name"
                        key="lastName"
                    />
                </div>
                <input {...register("email", { 
                    required: ERRORMESSAGES.REQUIRED,
                    pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: ERRORMESSAGES.EMAIL_PATTERN
                    },
                    maxLength: {
                        value: 255,
                        message: ERRORMESSAGES.EMAIL_LENGTH
                    }})}
                    className={inputClass}
                    placeholder="Email"
                />
                <input {...register("password", { 
                    required: ERRORMESSAGES.REQUIRED,
                    pattern: {
                        value: /^[A-Za-z0-9!@$%*?]{9,}$/,
                        message: ERRORMESSAGES.PASSWORD_PATTERN
                    }})}
                    className={inputClass}
                    type="password"
                    placeholder="Password"
                    onFocus={() => setShowPolicy(true)}
                    onBlur={() => setShowPolicy(false)}
                />
                { showPolicy ? <PasswordPolicy passwordValue={watch('password')}/> : null }
                <input {...register("confirmPassword", { 
                    required: ERRORMESSAGES.REQUIRED,
                    validate: (val: string) => {
                        if (watch('password') != val) {
                            return ERRORMESSAGES.CONFIRMPASSWORD_PATTERN;
                        }
                    }
                })}
                    className={inputClass}
                    type="password"
                    placeholder="Confirm Password"
                />
                <button>Sign Up</button>
            </form>
        </>
    )
}