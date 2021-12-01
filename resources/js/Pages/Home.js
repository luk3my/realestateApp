import React, {useState, useEffect} from 'react'
import { Link, Head } from '@inertiajs/inertia-react';
import axios from 'axios';
import Pagination from 'react-js-pagination';

export default function Home(props) {
  
    const [listings, setListings] = useState({...props.Listings});

    useEffect(() => {
      setListings(props.Listings);
    }, [props.Listings])

    const getData=(pageNumber)=>{
        axios.get(`listings?page=${pageNumber}`).then(response => {
          setListings(response.data);
        });
    }

    return (
            <div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
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

                <div className="grid grid-cols-1 gap-6">
                 {listings.data.length > 0 ? (
                      listings.data.map(listing => (    
                        <div key={listing.id} className="bg-white rounded-md p-4">
                            <img src="./storage/images/brick.jpg" alt="brickhouse" className="max-w-md rounded-md mb-2"/>
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
 
            </div>

          
    )
}
