import UserBox from "./UserBox";

export default function Header(props) {

    return(
        <>
            <header>
                <div></div>
                <h1><em>TimeBlock</em></h1>
                <UserBox buttons={props.buttons} class={props.class}/>
            </header>
        </>
    );
}