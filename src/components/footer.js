import React from 'react';

const style = {
    backgroundColor: "#DEDEDE",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "50px",
    position: "fixed",
    left: "0",
    top: "0",
    height: "150px",
    width: "100%",
}

const phantom = {
  display: 'block',
  padding: '20px',
  height: '150px',
  width: '100%',
}

function Footer({ children }) {
    return (
        <div>
            <div style={ phantom } />
            <div style={ style }>
                { children }
            </div>
        </div>
    )
}

export default Footer