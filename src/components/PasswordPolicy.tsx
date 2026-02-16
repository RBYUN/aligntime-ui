import type { JSX } from "react";

type PasswordPolicyProp = {
    passwordValue: string
};

function classPass(condition: boolean): string {
    if (condition) {
        return "password-policy-pass";
    }
    return "";
}

export default function PasswordPolicy({ passwordValue }: PasswordPolicyProp): JSX.Element | null {
    return (
        <div className="password-policy-box">
            <ul>
                <li className={classPass(passwordValue.length > 8)}>More than 8 Characters</li>
                <li className={classPass(/[A-Z]/.test(passwordValue) && /[a-z]/.test(passwordValue))}>Uppercase and Lowercase Letters</li>
                <li className={classPass(/[0-9]/.test(passwordValue))}>One Number Required</li>
                <li className={classPass(/[!@$%*?]/.test(passwordValue))}>Needs One of @, $, !, %, *, ?, &</li>
            </ul>
        </div> 
    );
}