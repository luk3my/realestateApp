import React, {useState, useEffect, useContext} from 'react';


export default function FilterFormSide(props) {

    return (
        <form className={`pl-6 pr-6 h-35 grid grid-cols-${props.cols} gap-2 content-center text-${props.color}`} onSubmit={props.handleSubmit}>
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

             <div className="form-group">
                <label htmlFor="exampleFormControlSelect1">Rooms</label>
                <div className="flex justify-left">
                    <div className="form-check form-check-inline">
                        <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="1"></input>
                        <label className="form-check-label inline-block text-gray-800" for="inlineRadio10">1</label>
                    </div>
                     <div className="form-check form-check-inline">
                        <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="2"></input>
                        <label className="form-check-label inline-block text-gray-800" for="inlineRadio10">2</label>
                    </div>
                     <div className="form-check form-check-inline">
                        <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="3"></input>
                        <label className="form-check-label inline-block text-gray-800" for="inlineRadio10">3</label>
                    </div>
                     <div className="form-check form-check-inline">
                        <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="4"></input>
                        <label className="form-check-label inline-block text-gray-800" for="inlineRadio10">4</label>
                    </div>
                     <div className="form-check form-check-inline">
                        <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="5"></input>
                        <label className="form-check-label inline-block text-gray-800" for="inlineRadio10">5</label>
                    </div>
                     <div className="form-check form-check-inline">
                        <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio6" value="6"></input>
                        <label className="form-check-label inline-block text-gray-800" for="inlineRadio10">6</label>
                    </div>
                </div>
                <div id="type_error"></div>
            </div>

             {/* <div className="form-group">
                <label htmlFor="exampleFormControlSelect1">Area</label>
                <select className="form-control select" id="price" onChange={props.handlePriceChange}>
                    <option value="" selected>All</option>
                    <option value="<">&lt; 500k</option>
                    <option value=">">&gt; 500k</option>
                </select>
                <div id="type_error"></div>
            </div> */}

            <span>
                <button style={props.links} type="submit" className="hover:bg-gray-100 hover:text-black font-semibold py-1 px-2 border border-400 mr-2 mb-1">Search</button>
            </span>
            <span>
            { (props.windowWidth > 650 && props.cols == 3) ? (
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