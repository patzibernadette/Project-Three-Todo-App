import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-light bg-light px-3">

            <Link className="navbar-brand text-gray" to="/todos">
                HER Workout Todo App
            </Link>

            <div>
                <Link className="btn btn-light mx-2" to="/todos">
                    Workout Todo
                </Link>

                <Link className="btn btn-light" to="/contact">
                    Contact Info
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;