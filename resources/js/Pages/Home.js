import React, {useState, useEffect} from 'react'
import { Link, Head } from '@inertiajs/inertia-react';
import axios from 'axios';
import Pagination from 'react-js-pagination';

export default function Home(props) {
  
    const [listings, setListings] = useState({...props.Listings});
    const [typeVal, setType] = useState('');
    const [suburbval, setSuburb] = useState('');

    const handleTypeChange=(e)=> setType(e.target.value);
    const handleSuburbChange=(e)=> setSuburb(e.target.value);

    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post(`listingsIndex?page=${'1'}`, {
            type: typeVal,
            suburb: suburbval
        })
        .then(response => {
            setListings(response.data);
        })
        .catch((error) => {
            alert(error)
        });
    }

    useEffect(() => {
      setListings(props.Listings);
    }, [props.Listings])

    const getData=(pageNumber)=>{
        axios.post(`listingsIndex?page=${pageNumber}`, {
            type: typeVal,
            suburb: suburbval
        }).then(response => {
          setListings(response.data);
        });
    }

    const headerStyle = {
        width: 'auto',
        height: '700px',
        backgroundImage: `url(../../images/headerImg.jpg)`,
        backgroundSize: 'cover',
    };

    const boxStyle = {
        position: 'relative',
        marginLeft: 'auto',
        marginRight: 'auto',
        top: '220px',
        zIndex: '1000',
        backgroundColor: 'rgba(0,0,0,.6)',
        padding: '5px',
        color: '#FFFFFF',
        width: '80%',
        height: '250px',
        padding: '15px'
    };

    const addStyle = {
        position: 'absolute',
        top: '-1825px',
    }
    
    return (
            <div>
                <div className="fixed top-0 right-0 px-6 py-4 sm:block">
                    {props.auth.user ? (
                        <Link href={route('dashboard')} className="text-sm text-gray-700 underline">
                            Dashboard
                        </Link>
                    ) : (
                        <div>
                            <Link href={route('login')} className="text-sm text-gray-700 underline">
                                Log in
                            </Link>
                            <Link href={route('register')} className="ml-4 text-sm text-gray-700 underline">
                                Register
                            </Link>
                        </div>
                    )}
                </div>
                <header style={headerStyle} className="w-full h-11">
                    <div style={boxStyle}>
                        <span className="text-2xl ml-6">Search properties for sale</span><br/><br/>
                        <form className="pl-6 pr-6 h-35 grid grid-cols-3 gap-4 content-center" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlSelect1">Property Type</label>
                                <select className="form-control" id="type" onChange={handleTypeChange}>
                                    <option value="1">House</option>
                                    <option value="2">Townhouse</option>
                                    <option value="3">Appartment</option>
                                </select>
                                <div id="type_error"></div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlSelect1">Suburb</label>
                                <select className="form-control" id="suburb" onChange={handleSuburbChange}>
                                    <option value="1">Wellington Point</option>
                                    <option value="2">Birkdale</option>
                                    <option value="3">Cleveland</option>
                                </select>
                                <div id="type_error"></div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlSelect1">Price</label>
                                <select className="form-control" id="price">
                                    <option value="1">&lt; 500k</option>
                                    <option value="2">&gt; 500k</option>
                                </select>
                                <div id="type_error"></div>
                            </div>
                            <span className="w-1/3"><button type="submit" className="btn btn-primary">Search</button></span>
                            <span></span>
                            <span></span>
                        </form>
                    </div>
                </header>
                <div className="relative flex items-top justify-left pl-10 sm:pt-10 min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center">
                    <div className="gap-6">
                    {listings.data.length > 0 ? (
                        listings.data.map(listing => (    
                            <div key={listing.id} className="bg-white rounded-sm p-4 shadow-md">
                                <img src={listing.img_path} alt="Property Image" className="max-w-3xl rounded-sm mb-2"/>
                                <span className="font-extrabold text-lg mb-2">{listing.title}</span><br/>
                                <span className="mr-14">Rooms: {listing.rooms}</span>
                                <span className="">Size: {listing.area} sqm</span>
                            </div>
                    ))
                        ) : (
                            <div className="col-span-4 lg:text-center lg:pt-14 mb-10">
                            There are no tasks to show
                            </div>
                    )}     
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
                    <div className="relative flex items-top justify-left pl-10 bg-gray-100 dark:bg-gray-900">
                        <img src="url(../../images/fakeAdd.jpg" className="max-w-sm shadow-sm" style={addStyle}/>
                    </div>
                </div>         
            </div>  
        )
}
