import React, {useState, useEffect} from 'react';
import FilterForm from './FilterForm';

export default function popoutMenu(props) {

    const popoutStyle = {
        position: 'fixed',
        top: '0',
        zIndex: '80',
        backgroundColor: '#527d9c',
        height: '100vh',
        width: props.show ? '30%' : '0%',
        transition: "all .5s",
    }

    const contentStyle = {
        display: props.show ? 'block' : 'none',
    }

    const chevronStyle = {
        cursor: 'pointer',
        float: 'right',
        height: 'calc(100vh - 20px)'
    }

    const links = {
        color: '#B8B8B8',
        borderColor: '#B8B8B8'
    }

  return (
        <div style={popoutStyle}>
            <div style={contentStyle}>
                <svg style={chevronStyle} onClick={props.handleMenuVisChange} xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                </svg>

                <h3 className="text-white mt-3 mb-10 ml-4">Advanced Filters</h3>

                <FilterForm
                    handleSubmit={props.handleSubmit}
                    propertyType={props.propertyType}
                    handleTypeChange={props.handleTypeChange}
                    types={props.types}
                    handleSuburbChange={props.handleSuburbChange}
                    suburbs={props.suburbs}
                    handlePriceChange={props.handlePriceChange}
                    windowWidth={props.windowWidth}
                    links={props.links}
                    handleMenuVisChange={props.handleMenuVisChange}
                    color={props.color}
                />

            </div>
        </div>
  );
}