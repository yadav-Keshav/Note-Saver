import React from 'react'
import "./mainScreen.css"

const MainScreen = ({ title, children }) => {
    return (
        <div className="mainback">
            <div className="page">
                {title && (
                    <>
                        <h3 className="heading">{title}</h3>
                        <hr />
                    </>
                )}
                {children}
            </div>
        </div>
    )
}
export default MainScreen;