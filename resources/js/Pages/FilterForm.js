import React, {useState, useEffect} from 'react';


export default function FilterForm(props) {


    return (
        <form className="pl-6 pr-6 h-35 grid grid-cols-3 gap-4 content-center" onSubmit={props.handleSubmit}>
            <div className="form-group">
                <label htmlFor="exampleFormControlSelect1">{props.propertyType}</label>
                    <select className="form-control select" id="type" onChange={props.handleTypeChange}>
                        <option value="" selected>All</option>
                            {props.types.length > 0 ? (
                                props.types.map(type => (    
                                            <option value={type.id}>{type.name}</option>
                                     ))
                                ) : (
                                     <option value="" disabled selected>There are no options to show</option>
                                )} 
                                </select>
                                <div id="type_error"></div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlSelect1">Suburb</label>
                                <select className="form-control select" id="suburb" onChange={props.handleSuburbChange}>
                                    <option value="" selected>All</option>
                                   {props.suburbs.length > 0 ? (
                                        props.suburbs.map(suburb => (    
                                            <option value={suburb.id}>{suburb.name}</option>
                                     ))
                                ) : (
                                     <option value="" disabled selected>There are no options to show</option>
                                )} 
                                </select>
                                <div id="type_error"></div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlSelect1">Price</label>
                                <select className="form-control select" id="price" onChange={props.handlePriceChange}>
                                    <option value="" selected>All</option>
                                    <option value="<">&lt; 500k</option>
                                    <option value=">">&gt; 500k</option>
                                </select>
                                <div id="type_error"></div>
                            </div>
                            <span>
                                <button style={props.links} type="submit" className="hover:bg-gray-100 hover:text-black font-semibold py-1 px-2 border border-400 mr-2 mb-1">Search</button>
                            </span>
                            <span>
                                { props.windowWidth > 650 ? (
                                    <button style={props.links} onClick={props.handleMenuVisChange} className="hover:bg-gray-100 py-1 px-2 border border-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                        </svg>
                                    </button>
                                    ) : null
                                }
                            </span>
                            <span></span>
            </form>
        );
}