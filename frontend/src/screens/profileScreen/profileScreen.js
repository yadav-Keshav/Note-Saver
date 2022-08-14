import React, { useState, useEffect } from "react";
import MainScreen from "../../components/mainScreen";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'
import './profileScreen.css';
const ProfileScreen = () => {
    const navigate = useNavigate();
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    useEffect(() => {
        if (!userInfo) {
            navigate("/");
        }
    }, [navigate, userInfo]);
    return (
        <div>
            <MainScreen title={`${userInfo.name} Profile`}>
                <div className="profileContainer">
                    <h1>{userInfo.name}</h1>
                    <h1>{userInfo.email}</h1>
                </div>
            </MainScreen>
        </div>

    );
};

export default ProfileScreen;