import React, { useEffect } from 'react'
import './landingPage.css'
import { useNavigate } from 'react-router-dom';
import { a } from 'react-router-dom'
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


                        <a onClick={()=>navigate("/login")}>
                            <button className="landingbutton">
                                Login
                            </button>
                        </a>



                        <a onClick={()=>navigate("/register")}>
                            <button
                                variant="outline-primary"
                                size="lg"
                                className="landingbutton"
                            >
                                Signup
                            </button>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage