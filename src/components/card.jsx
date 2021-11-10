import './card.css'

const Card =(props)=>{
    return (
        <div className="card">
            <div className="cardicon">
                <img src={props.image}></img>
            </div>
            <div className="cardcontent">
                <div className="cardheading">{props.heading}</div>
                <div className="carddata">{props.data}</div>
            </div>
        </div>
    );
}

export default Card;