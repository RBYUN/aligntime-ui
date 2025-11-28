import { Link } from "react-router";
export default function UserBox(props) {
    
    const buttons = props.buttons.map((button) => 
        <Link to={button.link}>
            <button onClick={button.action} className={props.class}>
                {button.text}
            </button>
        </Link>
    );

    return(
        <div className="user-box">
            {buttons}
        </div>
    );
}