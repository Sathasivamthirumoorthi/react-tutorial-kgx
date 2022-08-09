import "./UserList.css"

export default function UserList(props){
    return(
        <div className="userlist">

            {
                props.user.map(item =>(
                    <div>
                    <h1>{item.id}</h1>
                    <h1>{item.student}</h1>
                    <h1>{item.dep}</h1>
                    </div>
                    

                ))
            }
    
        </div>
    )
}