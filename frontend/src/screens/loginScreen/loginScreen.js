import React, { useEffect, useState } from 'react';
import MainScreen from '../../components/mainScreen';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import './loginScreen.css'
import Loading from '../../components/loading';
import ErrorMessage from '../../components/error';
import { useDispatch, useSelector } from 'react-redux';
import { login } from "../../redux/actions/userActions";

function LoginScreen() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin);
    const { loading, error, userInfo } = userLogin;

    useEffect(() => {
        if (userInfo) {
            navigate("/mynotes");
        }
    }, [navigate, userInfo]);

    const submitHandler = async (e) => {
        e.preventDefault();
        dispatch(login(email, password));
    }




    return (
        <MainScreen title="LOGIN">
            <div className="loginContainer">
                <div>
                    {error && <ErrorMessage >Invalid email or password</ErrorMessage>}
                    {loading && <Loading />}
                </div>
                <div id="formBasicEmail" >
                    <label>Email address</label>
                    <input
                        type="email"
                        value={email}
                        placeholder="Enter email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div id="formBasicPassword">
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button onClick={submitHandler} style={{ marginTop: "20px" }} >
                    Submit
                </button>
                <div>
                        New Customer ? <Link style={{color:'blue'}} className='link' to="/register">Register Here</Link>
                </div>
            </div>
        </MainScreen>
    )
}

export default LoginScreen