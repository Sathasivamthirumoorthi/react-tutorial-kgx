import "./Header.css"

// export default function Header(){

// }

export default function Header(props){
    return(
        <div className="header">
           <h1>Title</h1>
           <div>
                <ul className="menu">
                    <li>Contact</li>
                    <li>Some</li>
                    <li>Menu</li>
                </ul>
           </div>
        </div>
    )
}