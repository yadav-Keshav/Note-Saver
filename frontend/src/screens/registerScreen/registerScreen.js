import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../../components/loading";
import MainScreen from '../../components/mainScreen';
import ErrorMessage from "../../components/error";
import "./registerScreen.css";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { register } from "../../redux/actions/userActions";

function RegisterScreen() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState(null);
    const userRegister = useSelector((state) => state.userRegister)
    const { loading, error, userInfo } = userRegister;

    useEffect(() => {
        if (userInfo) {
            navigate('/mynotes');
        }
    }, [navigate, userInfo]);

    const submitHandler = async (e) => {
        e.preventDefault();

        if (password !== confirmpassword) {
            setMessage('Password do not match')
        }
        else {
            dispatch(register(name, email, password));
        }

    };

    return (
        <MainScreen title="REGISTER">
            <div className="loginContainer" >
                <div>
                    {loading && <Loading />}
                    {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
                    {error && <ErrorMessage variant="danger">Invalid email</ErrorMessage>}
                </div>
                <div id="name">
                    <label>Name</label>
                    <input
                        type="name"
                        value={name}
                        placeholder="Enter name"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div id="formBasicEmail">
                    <label>Email address</label>
                    <input
                        type="email"
                        value={email}
                        placeholder="Enter email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div controlId="formBasicPassword">
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div controlId="confirmPassword">
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        value={confirmpassword}
                        placeholder="Confirm Password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <div>
                    <button onClick={submitHandler} variant="primary" type="submit">
                        Register
                    </button>
                </div>
                <div>
                    <div className="py-3">
                        <h3>
                            Have an Account ? <Link  style={{color:'blue'}} className="link" to="/login">Login</Link>
                        </h3>
                    </div>
                </div>
            </div>
        </MainScreen>
    );
}

export default RegisterScreen;