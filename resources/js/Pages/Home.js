import React, {useState, useEffect} from 'react'
import { Link, Head } from '@inertiajs/inertia-react';


export default function Home(props) {
  
    const [listings, setListings] = useState({...props.Listings});

    useEffect(() => {
      setListings(props.Listings);
    }, [props.Listings])

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

                <div className="grid grid-cols-2 gap-4">
                 {listings.length > 0 ? (
                      listings.map(listing => (    
                        <div key={listing.id} className="bg-white rounded-md p-1">
                            <h3>{listing.title}</h3>
                        </div>
                   ))
                    ) : (
                        <div className="col-span-4 lg:text-center lg:pt-14 mb-10">
                           There are no tasks to show
                        </div>
                )}      
                </div>

            </div>

          
    )
}
