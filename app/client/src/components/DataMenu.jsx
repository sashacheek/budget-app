import { Link } from "react-router-dom";

function DataMenu() {
    return (
        <div className="two-buttons sticky-menu">
        <Link className="button-style button-small" to="/edit">list</Link>
        <Link className="button-style button-small" to="/data">graphs</Link>
        <Link to="/" className="button-style button-small third-button">&larr;</Link>
    </div>
    )
}

export default DataMenu;