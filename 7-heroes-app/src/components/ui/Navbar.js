import { useContext } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import '../../css/estilos.css';
import { types } from '../../types/types';

export const Navbar = () => {

    const { user , dispatch } = useContext(AuthContext);

    const history = useHistory();

    const functLogout = () => {
        
        
        dispatch(
            {
                type:types.logout,
                payload:{name:''}
            }
        )

        history.replace('/login');


    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/search"
                    >
                        Search
                    </NavLink>

                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 logout" >


                <ul className="navbar-nav ml-auto">

                <div ></div>

                    <a className="nav-item nav-link text-info" 
                        
                    >
                        {user.name}
                    </a>

                    <button 
                        className="nav-item nav-link btn btn-primary" 
                        onClick={functLogout}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}