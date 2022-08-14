import React from "react";
const ErrorMessage = ({ variant = "info", children }) => {
    return (
        <div>
            <p>{children}</p>
        </div>
    );
};

export default ErrorMessage;