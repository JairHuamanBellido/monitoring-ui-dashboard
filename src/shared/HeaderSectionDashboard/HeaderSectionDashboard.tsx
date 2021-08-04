import "./index.scss";

interface IProps{
    title: string;
    description:string;
}

export default function HeaderSectionDashboard(props: IProps){

    return(
        <div className="header-section-container">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    )
}