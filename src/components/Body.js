import "./Body.css"

export default function Body(props){
    return(
        <div className="body">
            
            Name : <h1>{props.name}</h1>
            <br/>
            Description : <p>{props.description}</p>
    
        </div>
    )
}