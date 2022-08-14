import React from "react";
const Footer = () => {
  return (
    <footer
      style={{
        width: "100%",
        position: "relative",
        bottom: 0,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div>
        <div>
          <p className="text-center py-3">Copyright &copy; Note Saveing</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;