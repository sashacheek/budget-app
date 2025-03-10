import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartPie, faListUl } from "@fortawesome/free-solid-svg-icons";

function DataMenu() {
    return (
        <div className="two-buttons sticky-menu">
        <Link className="button-style button-small" to="/edit"><FontAwesomeIcon icon={faListUl}></FontAwesomeIcon> list</Link>
        <Link className="button-style button-small" to="/data"><FontAwesomeIcon icon={faChartPie}></FontAwesomeIcon> graph</Link>
        <Link to="/" className="button-style button-small third-button">&larr;</Link>
    </div>
    )
}

export default DataMenu;