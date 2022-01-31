import React, {useState, useEffect} from 'react';

export default function popoutMenu(props) {

const popoutStyle = {
        position: 'fixed',
        top: '0',
        zIndex: '80',
        backgroundColor: '#527d9c',
        height: '100vh',
        width: props.show ? '30%' : '0%',
        transition: "all .4s",
    }

    const contentStyle = {
        display: props.show ? 'block' : 'none',
    }

  return (
        <div style={popoutStyle}>
            <div style={contentStyle}>
                <span className="w-1/3"><button onClick={props.handleMenuVisChange} className="btn btn-primary">Close</button></span>
            </div>
        </div>
  );
}