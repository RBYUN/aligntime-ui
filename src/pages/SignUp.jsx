import Header from "../components/Header";
import AccountForm from "../components/AccountForm";

export default function SignUp() {
    const buttons = [{
        "text": "LOGIN",
        "action" : null,
        "link": null
    }]

    const inputs = [
        ["First Name", "Last Name"],
        "Email",
        "Password",
        "Confirm Password"
    ]

    return(
        <>
            <Header buttons={buttons} class="account-buttons"/>
            <AccountForm inputs={inputs} buttons={buttons}/>
        </>
    )
}