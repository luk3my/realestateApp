import React, {useState, useEffect, useRef} from 'react'
import { Link, Head } from '@inertiajs/inertia-react';
import axios from 'axios';
import Pagination from 'react-js-pagination';
import Tile from './Tile';
import PopoutMenu from './PopoutMenu';
import FilterForm from './FilterForm';

export default function Home(props) {

    // Window size hooks
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);
    const handleWindowResize = () => {
        setWindowWidth(window.innerWidth);
        setWindowHeight(window.innerHeight);
    };
    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    });


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

    const propertyType = windowWidth > 650 ? 'Property Type' : 'Type';
    const boxTitle = windowWidth > 650 ? 'Search properties for sale' : 'Search';
    const cols = windowWidth > 650 ? 3 : 1;

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
        height: windowWidth > 1500 ? '120px' : '80px',
        backgroundImage: windowWidth > 1500 ? `url(../../images/unrealestate.png)` : `url(../../images/unrealestateSmall.png)`,
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
        height: windowWidth > 650 ? '250px' : '435px',
        padding: '15px'
    };

    const addStyle = {
        width:'420px',
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
        borderColor: '#B8B8B8',
    }

    const linksCont = {
        position: 'absolute',
        top: windowWidth > 650 ? '0px' : '60px',
        right: windowWidth > 650 ? '0px' : '',
        left:  windowWidth > 650 ? '' : '-10px',
    }

    const container = {
        paddingLeft: windowWidth > 1500 ? '30px' : '80px'
    }

    const caps = str => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const numCommas = x => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
            <div>
                <div style={linksCont} className="px-6 py-4 sm:block">
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
                        <span className="text-2xl ml-6">{boxTitle}</span>
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

                        <FilterForm
                            handleSubmit={handleSubmit.bind(this)}
                            propertyType={propertyType}
                            handleTypeChange={handleTypeChange.bind(this)}
                            types={types}
                            handleSuburbChange={handleSuburbChange.bind(this)}
                            suburbs={suburbs}
                            handlePriceChange={handlePriceChange.bind(this)}
                            windowWidth={windowWidth}
                            links={links}
                            handleMenuVisChange={handleMenuVisChange.bind(this)}
                            cols={cols}
                            color={'white'}
                        />

                    </div>
                </header>
                <div style={container} className="relative flex items-top justify-center pt-10 bg-gray-100 dark:bg-gray-900 w-full">
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
                                    listed_at={listing.listed_at}
                                    windowWidth={windowWidth}>
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
                    { listings.data.length > 0 && windowWidth > 1550 ? (
                            <div style={addStyle} className="pr-6">
                                <img src="url(../../images/fakeAdd.jpg" className="shadow-sm"/>
                            </div>
                        ) : null }
                </div>  

                <PopoutMenu show={showMenu} 
                            handleMenuVisChange={handleMenuVisChange.bind(this)}
                            handleSubmit={handleSubmit.bind(this)}
                            propertyType={propertyType}
                            handleTypeChange={handleTypeChange.bind(this)}
                            types={types}
                            handleSuburbChange={handleSuburbChange.bind(this)}
                            suburbs={suburbs}
                            handlePriceChange={handlePriceChange.bind(this)}
                            windowWidth={windowWidth}
                            links={links}
                            handleMenuVisChange={handleMenuVisChange.bind(this)}
                            cols={1}
                            color={'white'}
                />

                { showMenu ? <div style={greyout}></div> : null }

            </div>  
        )
}
