import React, { useEffect } from 'react'
import './landingPage.css'
import { useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';

const LandingPage = () => {
    const userLogin = useSelector((state) => state.userLogin);
    const { loading, error, userInfo } = userLogin;
    const navigate = useNavigate();
    useEffect(() => {
        if (userInfo) {
          navigate("/mynotes");
        }
      }, [navigate, userInfo]);



    return (
        <div className="main">
            <div className='container'>
                    <div className="intro-text">
                        <div>
                            <h1 className="title">Welcome to Note Saver</h1>
                            <p className="subtitle">One Safe place for all your notes.</p>
                        </div>
                        <div className="buttonContainer">


                        <Link to="/login">
                            <button size="lg" className="landingbutton">
                                Login
                            </button>
                        </Link>



                                <Link to="/register">
                                <button
                                    variant="outline-primary"
                                    size="lg"
                                    className="landingbutton"
                                >
                                    Signup
                                </button>
                                </Link>

                        </div>
                    </div>
            </div>
        </div>
    )
}

export default LandingPage