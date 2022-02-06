import React, {useState, useEffect} from 'react';

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

                 <form className="pl-6 pr-6 h-35 grid grid-cols-1 gap-4 content-center">
                            <h3 className="mb-1 mt-5 text-white">Advanced Filters</h3>
                            <h6 className="mb-1 text-grey">(Work in progress)</h6>
                            <div className="form-group">
                                <label className="text-white" htmlFor="exampleFormControlSelect1">Property Type</label>
                                <select className="form-control select" id="type">
                                    <option value="" selected>All</option>
                                     {props.types.length > 0 ? (
                                        props.types.map(type => (    
                                            <option key={type.id} value={type.id}>{type.name}</option>
                                     ))
                                ) : (
                                     <option value="" disabled selected>There are no options to show</option>
                                )} 
                                </select>
                                <div id="type_error"></div>
                            </div>
                            <div className="form-group">
                                <label className="text-white" htmlFor="exampleFormControlSelect1">Suburb</label>
                                <select className="form-control select" id="suburb">
                                    <option value="" selected>All</option>
                                   {props.suburbs.length > 0 ? (
                                        props.suburbs.map(suburb => (    
                                            <option key={suburb.id} value={suburb.id}>{suburb.name}</option>
                                     ))
                                ) : (
                                     <option value="" disabled selected>There are no options to show</option>
                                )} 
                                </select>
                                <div id="type_error"></div>
                            </div>
                            <div className="form-group">
                                <label className="text-white" htmlFor="exampleFormControlSelect1">Price</label>
                                <select className="form-control select" id="price">
                                    <option value="" selected>All</option>
                                    <option value="<">&lt; 500k</option>
                                    <option value=">">&gt; 500k</option>
                                </select>
                                <div id="type_error"></div>
                            </div>
                            <span>
                                <button style={links} /**type="submit"**/ className="hover:bg-gray-100 font-semibold py-1 px-2 border border-400 mr-2 mb-1" disabled>Search</button>
                            </span>
                            <span></span>
                            <span></span>
                    </form>

            </div>
        </div>
  );
}