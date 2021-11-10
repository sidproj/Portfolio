import './skill.css';

const Skill = (props) => {
    return(
        <div className="skillcontainer">
            <img src={props.image}></img>
        </div>
    );
}

export default Skill;