import React, {useState, useEffect} from 'react';

export default function popoutMenu(props) {

const popoutSyle = {
        position: 'fixed',
        top: '0',
        zIndex: '40',
        backgroundColor: 'black',
        height: '100vh',
        width: props.show ? '35%' : '0%',
        transition: "all .4s",
    }

  return (
        <div style={popoutSyle}>
            <span className="w-1/3"><button className="btn btn-primary">Close</button></span>
        </div>
  );
}