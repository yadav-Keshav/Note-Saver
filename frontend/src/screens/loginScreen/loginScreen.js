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

            {error && <ErrorMessage >Invalid email or password</ErrorMessage>}
            {loading && <Loading />}
            <div className="loginContainer">
                <div controlId="formBasicEmail" >
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
                <div className="py-3 form_items">
                    <h3>
                        New Customer ? <Link className='link' to="/register">Register Here</Link>
                    </h3>
                </div>
            </div>
        </MainScreen>
    )
}

export default LoginScreen