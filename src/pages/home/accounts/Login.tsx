import { useSearchParams } from "react-router";
import { toast } from "react-toastify";
import { sections } from "../data/index.ts";

import Header from "../../../components/Header.tsx";
import { useEffect } from "react";
import type { Button } from "../../../types/index.ts";
import { useForm } from "react-hook-form";

export default function Login() {
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        async function getSearchParams(): Promise<void> {
            if (searchParams.get("verified")  === "true") {
                try {
                    const response = await fetch(
                        `http://localhost:3000/v1/accounts/verify?id=${searchParams.get("id")}`, {
                            method: "Post",
                            headers: {
                                "Accept": "application/json",
                                "Content-Type": "application/json"
                            }
                        });
                console.log(response)
                if (response.ok) {
                    toast("Your account has been verified");
                    setSearchParams({});
                } else {
                    toast.error("Verification failed, please try again.");
                    }
                } catch (error: unknown) {
                    toast.error("An error occurred while verifying the account.");
                    console.error("Error during verification:", error);
                }
            }
        }
        getSearchParams();
    },[])

    
    const buttons: Button[] = [
        {
            text: "SIGN UP",
            link: "../create",
            id: "signup",
        },
    ];

    const { register, handleSubmit } = useForm();

    return(
        <>
            <Header buttons={buttons} sections={sections}/>
            <form
                className="account-form"
                onSubmit={
                    handleSubmit(
                        (data) => {
                            console.log(data);
                })}>
                <h1>Welcome Back</h1>
                <input {...register("email", {
                    required: true,
                    pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Please enter a valid email address"
                    }})}
                    className="account-input"
                    placeholder="Email"
                />
                <input {...register("password", {
                    required: true
                })}
                    className="account-input"
                    placeholder="Password"
                />
                <button>LOGIN</button>
            </form>

        </>
    )
}