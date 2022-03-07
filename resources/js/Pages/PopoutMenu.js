import React, {useState, useEffect, useContext} from 'react';
import FilterFormSide from './FilterFormSide';
import ListingContext from './ListingContext';
import { ListingProvider } from './ListingContext'

export default function popoutMenu() {
    
    const cxt = useContext(ListingContext);

    const popoutStyle = {
        position: 'fixed',
        top: '0',
        zIndex: '80',
        backgroundColor: '#527d9c',
        height: '100vh',
        width: cxt.show ? '30%' : '0%',
        transition: "all .5s",
    }

    const contentStyle = {
        display: cxt.show ? 'block' : 'none',
    }

    const chevronStyle = {
        cursor: 'pointer',
        float: 'right',
        height: 'calc(100vh - 30px)'

    }
    const links = {
        color: '#B8B8B8',
        borderColor: '#B8B8B8'
    }

  return (
        <div style={popoutStyle}>
            <div style={contentStyle}>
                <svg style={chevronStyle} onClick={cxt.handleMenuVisChange} xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                </svg>

                <h3 className="text-white mt-3 mb-10 ml-4">Advanced Filters</h3>

                <ListingProvider value={cxt}>
                    <FilterFormSide/>
                </ListingProvider>

            </div>
        </div>
  );
}