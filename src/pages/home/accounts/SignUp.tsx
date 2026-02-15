import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { object, string } from "yup";

import Header from "../../../components/Header.tsx";
import { sections } from "../data/index.ts";

import type { Button } from "../../../types/index.ts";
import PasswordPolicy from "../../../components/PasswordPolicy.tsx";

export default function SignUp() {

    const [showPolicy, setShowPolicy] = useState(false);
    const [currentPass, setCurrentPass] = useState("");
    const [isGoodLen, setIsGoodLen] = useState(false);
    const [hasUpperCase, setHasUpperCase] = useState(false);
    const [hasLowerCase, setHasLowerCase] = useState(false);
    const [hasDigit, setHasDigit] = useState(false);
    const [hasSpecialChar, setHasSpecialChar] = useState(false);
    const digitRegex: RegExp = /\d/;
    const specialCharsRegex : RegExp = /[@$!%*?&]/;

    function setPasswordInput(event: React.ChangeEvent<HTMLInputElement>): void {
        const { value } = event.currentTarget;
        setCurrentPass(value);
        setIsGoodLen(value.length >= 8);
        setHasUpperCase(value !== value.toLowerCase());
        setHasLowerCase(value !== value.toUpperCase());
        setHasDigit(digitRegex.test(value));
        setHasSpecialChar(specialCharsRegex.test(value));
}
       
    
    type FormValues = {
        firstName: string,
        lastName: string,
        email: string,
        password: string,
        confirmPassword: string,
    }

    const { register, watch, handleSubmit, formState: { isSubmitting, errors } } = useForm<FormValues>();

    console.log(errors)

    if (isSubmitting && errors) {
        if (errors?.firstName?.type === "required" || 
            errors?.lastName?.type === "required" || 
            errors?.email?.type === "required" || 
            errors?.password?.type === "required" || 
            errors?.confirmPassword?.type === "required") {
                toast.error("All fields need to be filled out");
        }
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
            <form className="account-form" onSubmit={handleSubmit((data) => {
                console.log(data);
            })}>
                <h1>Create a New Account</h1>
                <div className="flex">
                    <input {...register("firstName", { 
                        required: true, 
                        pattern: /^[A-Za-z]+$/,
                        minLength: 2,
                        maxLength: 25
                    })}
                        className={inputClassMultiple}
                        placeholder="First Name"
                        key="firstName"
                    />
                    <input {...register("lastName", { 
                        required: true, 
                        pattern: /^[A-Za-z]+$/,
                        minLength: 2,
                        maxLength: 25
                    })}
                        className={inputClassMultiple}
                        placeholder="Last Name"
                        key="lastName"
                    />
                </div>
                <input {...register("email", { 
                    required: true,
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    maxLength: 255
                })}
                    className={inputClass}
                    placeholder="Email"
                />
                <input {...register("password", { 
                    required: true,
                    pattern: /^[A-Za-z0-9!@$%*?]+$/
                })}
                    className={inputClass}
                    type="password"
                    placeholder="Password"
                    onChange={setPasswordInput}
                    value={currentPass}
                    onFocus={() => setShowPolicy(true)}
                    onBlur={() => setShowPolicy(false)}
                />
                <PasswordPolicy 
                    showPolicy={showPolicy} 
                    isGoodLen={isGoodLen}
                    hasUpperCase={hasUpperCase}
                    hasLowerCase={hasLowerCase}
                    hasDigit={hasDigit}
                    hasSpecialChar={hasSpecialChar}/>
                <input {...register("confirmPassword", { 
                    required: true,
                    validate: (val: string) => {
                        if (watch('password') != val) {
                            return "Your passwords do not match"
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