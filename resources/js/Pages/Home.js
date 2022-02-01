import React, {useState, useEffect, useRef} from 'react'
import { Link, Head } from '@inertiajs/inertia-react';
import axios from 'axios';
import Pagination from 'react-js-pagination';
import Tile from './Tile';
import PopoutMenu from './PopoutMenu';

export default function Home(props) {
    const [listings, setListings] = useState({...props.Listings});
    const [types, setTypes] = useState({...props.Types});
    const [suburbs, setSuburbs] = useState({...props.Suburbs});
    const [typeVal, setType] = useState('');
    const [suburbVal, setSuburb] = useState('');
    const [priceVal, setPrice] = useState('');
    const [showMenu, setMenuVis] = useState(false);

    const handleTypeChange=(e)=> setType(e.target.value);
    const handleSuburbChange=(e)=> setSuburb(e.target.value);
    const handlePriceChange=(e)=> setPrice(e.target.value);
    const handleMenuVisChange=(e)=> { 
        setMenuVis(!showMenu);
    }

    const resetList=(e)=> {
        e.stopPropagation();    
        setType('');
        setSuburb('');
        setPrice('');
        console.log(typeVal)
        // Hooks won't update in time to use getData (takes 2 clicks) - this is a hack 
        axios.post(`listingsIndex?page=${'1'}`, {
            type: '',
            suburb: '',
            price: ''
        })
        .then(response => {
            setListings(response.data);
        })
        const select = document.querySelectorAll(".select");
        Array.prototype.slice.call(select).forEach(item =>{
            item.firstChild.selected = true;
        })
    }
  
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post(`listingsIndex?page=${'1'}`, {
            type: typeVal,
            suburb: suburbVal,
            price: priceVal
        })
        .then(response => {
            setListings(response.data);
        })
        .catch((error) => {
            alert(error)
        });
    }

    // Casts to array
    useEffect(() => {
        setTypes(props.Types);
    }, [props.Types]);

    useEffect(() => {
        setSuburbs(props.Suburbs);
    }, [props.Suburbs]);

    const getData=(pageNumber)=>{
        axios.post(`listingsIndex?page=${pageNumber}`, {
            type: typeVal,
            suburb: suburbVal,
            price: priceVal
        }).then(response => {
            setListings(response.data);
        });
    }

    const headerStyle = {
        width: 'auto',
        height: '700px',
        backgroundImage: `url(../../images/header.jpg)`,
        backgroundSize: 'cover',
    };

    const logoStyle = {
        width: 'auto',
        height: '120px',
        backgroundImage: `url(../../images/unrealestate.png)`,
        backgroundSize: 'auto',
        backgroundRepeat: 'no-repeat'
    };

    const boxStyle = {
        position: 'relative',
        marginLeft: 'auto',
        marginRight: 'auto',
        top: '120px',
        zIndex: '40',
        backgroundColor: 'rgba(0,0,0,.6)',
        padding: '5px',
        color: '#FFFFFF',
        width: '80%',
        height: '250px',
        padding: '15px'
    };

    const addStyle = {
        width:'auto',
        height:'100vh',
        position: '-webkit-sticky', /* Safari */
        position: 'sticky',
        top: '0',
        right: '0',
        zIndex: '20' 
    }

    const greyout = {
        height: '100vh',
        width: '100%',
        background: 'rgba(0, 0, 0, 0.5)',
        position: 'fixed',
        top: '0',
        zIndex: '60',

    }

    const pag = {
        marginTop: '20px'
    }

    const links = {
        color: '#B8B8B8',
        borderColor: '#B8B8B8'
    }

    const caps = str => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const numCommas = x => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
            <div>
                <div className="absolute top-0 right-0 px-6 py-4 sm:block">
                    {props.auth.user ? (
                        <Link style={links} href={route('dashboard')} className="hover:bg-gray-100 hover:text-black-800 font-semibold py-1 px-2 border border-gray-400 shadow">
                            Dashboard
                        </Link>
                    ) : (
                        <div>
                            <Link style={links} className="hover:bg-gray-100 hover:text-black-800 font-semibold py-1 px-2 border border-gray-400 shadow mr-2" href={route('login')}>
                                Log in
                            </Link>
                            <Link style={links} href={route('register')} className="hover:bg-gray-100 text-black-800 font-semibold py-1 px-2 border border-gray-400 shadow">
                                Register
                            </Link>
                        </div>
                    )}
                </div>
                <header style={headerStyle} className="w-full h-11">
                    <div id="logo" style={logoStyle}></div>
                    <div style={boxStyle}>
                        <span className="text-2xl ml-6">Search properties for sale</span>
                        <span className="float-right cursor-pointer" onClick={resetList}>
                               <svg class="h-6 w-6 fill-white"
                                    width="24" height="24" 
                                    viewBox="0 0 24 24" 
                                    stroke-width="2" 
                                    stroke="currentColor" 
                                    fill="none" 
                                    stroke-linecap="round" 
                                    stroke-linejoin="round"
                                >  
                                <path stroke="none" d="M0 0h24v24H0z"/>  
                                <circle cx="5" cy="18" r="2" />  
                                <circle cx="19" cy="6" r="2" />  
                                <path d="M19 8v5a5 5 0 0 1 -5 5h-3l3 -3m0 6l-3 -3" />  
                                <path d="M5 16v-5a5 5 0 0 1 5 -5h3l-3 -3m0 6l3 -3" />
                                </svg>
                        </span><br/><br/>

                        <form className="pl-6 pr-6 h-35 grid grid-cols-3 gap-4 content-center" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlSelect1">Property Type</label>
                                <select className="form-control select" id="type" onChange={handleTypeChange}>
                                    <option value="" selected>All</option>
                                     {types.length > 0 ? (
                                        types.map(type => (    
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
                                <select className="form-control select" id="suburb" onChange={handleSuburbChange}>
                                    <option value="" selected>All</option>
                                   {suburbs.length > 0 ? (
                                        suburbs.map(suburb => (    
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
                                <select className="form-control select" id="price" onChange={handlePriceChange}>
                                    <option value="" selected>All</option>
                                    <option value="<">&lt; 500k</option>
                                    <option value=">">&gt; 500k</option>
                                </select>
                                <div id="type_error"></div>
                            </div>
                            <span>
                                <button style={links} type="submit" className="hover:bg-gray-100 hover:text-black font-semibold py-1 px-2 border border-400 mr-2 mb-1">Search</button>
                            </span>
                            <span>
                                <button style={links} onClick={handleMenuVisChange} className="hover:bg-gray-100 py-1 px-2 border border-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                    </svg>
                                </button>
                            </span>
                            <span></span>
                        </form>

                    </div>
                </header>
                <div className="relative flex items-top justify-center pl-10 pt-10 bg-gray-100 dark:bg-gray-900 w-full">
                    <div className="gap-6">
                    {listings.data.length > 0 ? (
                        listings.data.map(listing => (    
                            <Tile  title={listing.title}
                                    img_path={listing.img_path} 
                                    area={listing.area} 
                                    price={numCommas(listing.price)}
                                    rooms={listing.rooms}
                                    suburb={caps(listing.suburb)}
                                    type={caps(listing.type)}
                                    description={caps(listing.description)}
                                    blurb={caps(listing.blurb)}
                                    listed_at={listing.listed_at}>
                            </Tile>
                    ))
                        ) : (
                            <div className="col-span-4 lg:text-center lg:pt-14 mb-10">
                            There are no Listings to show...
                            </div>
                    )}     
                    <div style={pag}>
                        <Pagination      
                            activePage={listings.current_page}
                            itemsCountPerPage={listings.per_page}
                            totalItemsCount={listings.total}
                            pageRangeDisplayed={listings.per_page}
                            onChange={getData}  
                            itemClass="page-item"
                            itemClass="page-link"
                            firstPageText="First"
                            lastPageText="Last"
                        />
                    </div>  
                    </div>
                    { listings.data.length > 0 &&
                    <div style={addStyle} className="pr-6">
                        <img src="url(../../images/fakeAdd.jpg" className="shadow-sm"/>
                    </div>   
                    }
                </div>  

                <PopoutMenu show={showMenu} 
                            handleMenuVisChange={handleMenuVisChange.bind(this)}
                            types={types}
                            suburbs={suburbs}
                />

                { showMenu ? <div style={greyout}></div> : null }

            </div>  
        )
}
