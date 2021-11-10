import './eande.css';

const Eande=(props)=>{
    return (
        <div className="eandecontainer">
            <div className="eandeheading">{props.head}</div>
            <div className="eandeinfo">{props.info}
                
            </div>
            <div className="eandedata">
                {props.data.map( dataitems => {
                    return <li>{dataitems}</li>;
                })}
            </div>
        </div>
    );
}

export default Eande;