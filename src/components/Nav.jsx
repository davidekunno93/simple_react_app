import { Link } from "react-router-dom"

export function Nav () {
    return (
        <div className="black">
            <Link className="link" to="/">Home</Link>
            <Link className="link margy" to="/page2">2nd Page</Link>
            <Link className="link" to="/page3">3rd Page</Link>
        </div>
    )
}
