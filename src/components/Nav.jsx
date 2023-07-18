import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { DataContext } from "../context/DataProvider"


export function Nav () {
    const {cart, setCart} = useContext(DataContext);
    return (
        <div className="bg-black navbar pad8">
            <Link className="link" to="/">Home</Link>
            <Link className="link margy" to="/products">Products</Link>
            <Link className="link" to="/cart">Cart</Link>
            {cart.size > 0 ? 
            <Link className="right mx-1 white">{cart.size}</Link> : <Link className="right mx-1 white">&nbsp;&nbsp;</Link>
            }
            <Link className="right" to="/cart"><FontAwesomeIcon icon={faCartShopping} style={{color: "white",}} /></Link>
            <Link className="right mx-2"></Link>
            <Link className="right mx-2">Username</Link>
        </div>
    )
}
export default Nav