import React from "react";
import { Link } from "react-router";
export default function AccountInput(props) {

    const inputBoxes = props.inputs.map((input) => 
        <input className={`${props.page}-input`} id={input.name} name={input.name} 
        type={input.type} placeholder={input.placeholder}/>
        );

    const buttons = props.buttons.map((button) =>
        <Link to={button.link}>
            <button onClick={button.action} className="login-input-options">{button.text}</button>
        </Link>
        );
    
    let pageClass;
    let pageTitle;
    switch (props.page) {
        case "signUp":
            pageClass = "login signUp";
            break;
        default:
            pageClass = "login";
            pageTitle = "Log in";
    }

    return(
        <div className={`${props.page}-background`}>
            <div className="center-container">
                <form className={`center-container flex ${pageClass}`}>
                    {pageClass == "login" ?
                        <Link to="/" className="text-link">
                            <p>LET'S<br/>MEET</p>
                        </Link> : null}
                    <div className="flex-column">
                        {inputBoxes}
                        <div className="flex">
                            {buttons}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}