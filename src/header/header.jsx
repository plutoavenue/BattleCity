import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Redirect } from 'react-router-dom';

import './header.css';


function Header({ isLoggedIn, onLogout }) {
    return (
        <div className="navigation">
            <nav>
                <ul className="topmenu">

                    <li>
                        <Link to='/'>
                            <button className="act" >
                                Main Page
                             </button>
                        </Link>
                    </li>

                    {isLoggedIn === false &&

                        <li>
                            <Link to='/login'>
                                <button className="act" >
                                    Log in
                          </button>
                            </Link>
                        </li>
                    }
                    {isLoggedIn === false &&

                    <li><Link to='/signup'>
                        <button className="act" >
                            Sign up
                         </button>
                    </Link>
                    </li>
                    }


                    {isLoggedIn === true &&

                        <li>
                        <Link to='/'>
                            <button className="act" onClick={onLogout} >
                                    Log out
                          </button>
                            </Link>
                        </li>
                    }

                </ul>

            </nav>
        </div>

    );
}

export default Header;
