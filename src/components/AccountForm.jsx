function setPasswordInput(password, index) {
    const name = password.toLowerCase().replace(" ", "");
    return (
        <input 
            className="account-input" 
            name={name} 
            id={name} 
            type="password" 
            placeholder={password} 
            key={index}
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}">
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
        } else if (input === "Password" || input === "Confirm Password" ) {
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
                    type="text" 
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