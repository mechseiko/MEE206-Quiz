import React from 'react';

const Copyright = () => {
    const style ={
        textAlign: "center",
        color: "orange",
        fontSize: "15px"
    }
    return (
        <div style={{marginTop: "20px"}}>
            <h3 style={style}>Developed with 💖 by MECHSEIKO</h3>
            <h3 style={style}> &copy; MEE206 Quiz {new Date().getFullYear()}</h3>
        </div>
    );
}

export default Copyright;