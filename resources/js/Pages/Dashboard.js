import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';

export default function Dashboard(props) {
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Welcome {props.auth.user.name} !</h2>}
        >
            <Head title="Dashboard" />

            <div className="grid grid-cols-1 mt-6 min-w-800">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <h3>Add a new property listing</h3>
                        </div>
                    

                    <form className="p-6">
                        <div class="form-group">
                            <label for="exampleFormControlSelect1">Property Type</label>
                            <select class="form-control" id="type">
                                <option>House</option>
                                <option>Townhouse</option>
                                <option>Appartment</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlSelect1">Suburb</label>
                            <select class="form-control" id="type">
                                <option>Test</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Title</label>
                            <input type="input" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
