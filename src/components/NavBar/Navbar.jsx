import { Link } from "react-router-dom"
import "./Navbar.css"
import CartWidget from "../CartWidget/CartWidget"
import CategoryMenu from "../CategoryMenu/CategoryMenu"

const Navbar = () => {
    return (
        <>
        <div className="navbar">
            <div className="LogoAndLinks">
                <h1><Link to={"/"}  className="brand">RoyalBox</Link></h1>
                <Link to= "/" className="link">Home</Link>
                <Link to= "/about" className="link">About</Link>
            </div>
            <div className="CartAndButton">
                <CategoryMenu/>
                <CartWidget/>
            </div>
        </div>
        </>
    )
}

export default Navbar
