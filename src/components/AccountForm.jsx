import React from "react";
function setPasswordInput(password, index) {
    const name = password.toLowerCase().replace(" ", "");

    const pattern = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$"
    
    return (
        <input 
            className="account-input" 
            name={name} 
            id={name} 
            type="password" 
            placeholder={password} 
            pattern={pattern}
            key={index}
            onFocus={event => console.log(event)}>
        </input>
    )
}

function setInputFields(inputProps) {
    return( 
        inputProps.map((input, index) => {
        if (Array.isArray(input)) {
            return (
                <div className="flex">
                    {input.map((groupInput, groupIndex) => {
                        let name = groupInput.toLowerCase().replace(" ", "");
                        return (
                            <input 
                                className="account-input-multiple" 
                                name={name} 
                                id={name} 
                                type="text" 
                                placeholder={groupInput} 
                                key={groupIndex + index + 1}>
                            </input>
                        )})}
                </div>
            )
        } else if (input === "Password") {
            return (
                setPasswordInput(input, index)
            )
        } else {
            const name = input.toLowerCase().replace(" ", "");
            return (
                <input 
                    className="account-input" 
                    name={name} 
                    id={name} 
                    type={input === "Confirm Password" ? "password" : "text"} 
                    placeholder={input} 
                    key={index}>
                </input>)}}
    ));
}

export default function AccountForm(props) {
    
    const inputs = setInputFields(props.inputs);
    
    return (
        <>
            <form className="account-form">
                <h1>Create an Account</h1>
                {inputs}
                <button>CREATE</button>
            </form>
        </>
    )

}