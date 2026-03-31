import { NavLink } from "react-router-dom";

function Navigation() {

    return (
        <nav className="main-nav">
            <ul>
                <li><NavLink to='/islands'>Islands</NavLink></li>
                <li><NavLink to='archtecture'>Archtecture</NavLink></li>
                <li><NavLink to='coding'>Coding</NavLink></li>
                <li><NavLink to='coffe'>Coffe</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navigation;