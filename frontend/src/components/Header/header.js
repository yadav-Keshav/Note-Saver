import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/userActions";
import { useEffect } from "react";
import './header.css';
const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    useEffect(() => {
        if (!userInfo) {
            navigate("/");
        }
    }, [userInfo]);

    const logoutHandler = () => {
        dispatch(logout());
    };

    return (
        <div className="navbar">
            <div className="brand">
                <Link className="link" to="/"> Notes Saver</Link>
            </div>
            <div className="navbarRight">
                <div>
                    {userInfo ? (
                        <>
                            <Link className="link" to="/mynotes">My Notes</Link>
                        </>
                    ) : (
                        <>
                            <Link className="link" to="/login">Login</Link>
                        </>
                    )}
                </div>

                <div>
                    {userInfo ? (
                        <>
                            <div className="link" class="dropdown">
                                <button class="dropbtn">My Profile</button>
                                <div class="dropdown-content">
                                    <Link className="link" href="/update">Update</Link>
                                    <Link className="link" onClick={logoutHandler}>Logout</Link>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <Link className="link" to="/register">Register</Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;