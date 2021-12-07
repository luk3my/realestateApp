import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';

export default function Dashboard(props) {

    const submit=(e)=>{
        e.preventDefault();
        axios.post(`listings`).then(response => {
            //modal
            alert('New Listing Added');
        });
    }


    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Welcome {props.auth.user.name} !</h2>}
        >
            <Head title="Dashboard" />

            <div className="grid grid-cols-1 mt-6 min-w-600">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <h3>Add a new property listing</h3>
                        </div>
                    

                    <form className="p-6">
                        <div className="form-group">
                            <label for="exampleFormControlSelect1">Property Type</label>
                            <select className="form-control" id="type">
                                <option value="1">House</option>
                                <option value="2">Townhouse</option>
                                <option value="3">Appartment</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label for="suburb">Suburb</label>
                            <select className="form-control" id="suburb">
                                <option value="1">Test</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label for="title">Title</label>
                            <input type="input" className="form-control" id="title" placeholder="Listing title" />
                        </div>
                         <div className="form-group">
                            <label for="street_address">Address</label>
                            <input type="input" className="form-control" id="street_address" placeholder="Street address" />
                        </div>
                          <div className="form-group">
                            <label for="price">Price</label>
                            <input type="input" className="form-control" id="price" placeholder="price" />
                        </div>
                          <div className="form-group">
                            <label for="exampleFormControlSelect1">No. of Bedrooms</label>
                            <select className="form-control" id="rooms">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label for="description">Description</label>
                            <textarea rows="3" className="form-control" id="description" placeholder="description"></textarea>
                        </div>
                          <div className="form-group">
                            <label for="blurb">Blurb</label>
                            <textarea rows="3" className="form-control" id="blurb" placeholder="Sales blurb"></textarea>
                        </div>
                        <input id="image" name="input-b2" type="file" className="file mb-10" data-show-preview="true" />
                        <button onClick={submit} className="btn btn-primary">Submit</button>
                    </form>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
