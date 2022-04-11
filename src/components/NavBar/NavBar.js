import { MenuItems } from "./MenuItems";
import "./NavBar.css";

function NavBar() {
    return (
        <div className="NavBar">
            <h1 className="NavBarTitle">Pet Dating App</h1>
            <div className="NavBarIcon">
                <i class="fa-solid fa-paw"></i>
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