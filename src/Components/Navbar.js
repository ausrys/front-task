
import logo from './Coingate-logo.png'
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div className="left-part">
                <a href="">
                <img href = "/" alt='logo' src = {logo} width = "157" height = "33"/>
                </a>
                <a href=""> <span> Products </span></a>
                <a href=""><span> Resources </span></a>
                <a href=""><span> Buy Instantly </span></a>
            </div>
            <div className="right-part">
            </div>
        </nav>
     );
}
 
export default Navbar;