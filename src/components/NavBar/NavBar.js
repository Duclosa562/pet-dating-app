import { MenuItems } from "./MenuItems";
import "./NavBar.css";

function NavBar() {
    return (
        <div className="NavBar">
            <h1 className="NavBarTitle">Pet Dating App</h1>
            <div className="menu-icon">
                {/* <h3>Icon Could go here</h3> */}
            </div>
            <ul className="NavMenu">
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className={item.cName} href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    )
                })}
               
                
            </ul>
            
        </div>
    )
}

export default NavBar