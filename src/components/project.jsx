import './project.css';

const Project = (props) => {
    return (
        <div className="projectcont">
            <div>
                <img className="projectimage" src={props.image}></img>
            </div>
            <div className="projectcaption">{props.caption}</div>
        </div>
    );
}

export default Project;