import React from "react";
import { Link, NavLink} from "react-router-dom" 

class Navbar extends React.Component {
           
    render(){

        return(
          <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-danger">
                <Link className="navbar-brand text-white" to="/"><i>XY.Z</i></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ">
                        <NavLink className="nav-item nav-link active text-white" to="/">Home <span className="sr-only">(current)</span></NavLink>
                        <NavLink className="nav-item nav-link text-white" to="/attendance">Attendance</NavLink>
                        <NavLink className="nav-item nav-link text-white" to="/register">Register</NavLink>
                    </div>
                </div>
            </nav>
          </div>
        )
    }

}
export default Navbar