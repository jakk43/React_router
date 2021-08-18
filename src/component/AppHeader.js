import { NavLink } from "react-router-dom";

function AppHeader() {
    return (
        <header className="d-flex justify-content-center h2 pt-3 text-center ">
            <NavLink
                className="text-decoration-none ms-3"
                to="/"
                activeClassName="bg-success text-light"
                exact
            >
                HOMEPAGE
            </NavLink>
            <p></p>
            <NavLink
                className="text-decoration-none ms-3"
                to="/about"
                activeClassName="bg-success text-light"
            >
                ABOUT
            </NavLink>
        </header>
    );
}

export default AppHeader;
