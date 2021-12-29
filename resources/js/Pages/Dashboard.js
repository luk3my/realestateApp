import React, { useState } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';

export default function Dashboard(props) {

    const handleSubmit=(e)=>{
        e.preventDefault();
        const fData = new FormData();
        fData.append('image', img);
        fData.append('type', type);
        fData.append('suburb', suburb);
        fData.append('title', title);
        fData.append('street_address', stAdr);
        fData.append('area', area);
        fData.append('rooms', rooms);
        fData.append('price', price);
        fData.append('blurb', blurb);
        fData.append('description', desc);
        axios.post(`listings`, fData).then(response => {
            alert('New Listing Added');
        });
    }

    const [type, setType] = useState('1');
    const [suburb, setSuburb] = useState('1');
    const [title, setTitle] = useState('');
    const [stAdr, setStAdr] = useState('');
    const [area, setArea] = useState('');
    const [rooms, setRooms] = useState('1');
    const [price, setPrice] = useState('');
    const [blurb, setBlurb] = useState('');
    const [desc, setDesc] = useState('');
    const [img, setImg] = useState('');

    const handleTypeChange=(e)=> setType(e.target.value);
    const handleSuburbChange=(e)=> setSuburb(e.target.value);
    const handleTitleChange=(e)=> setTitle(e.target.value);
    const handleStAdrChange=(e)=> setStAdr(e.target.value);
    const handleAreaChange=(e)=> setArea(e.target.value);
    const handleRoomsChange=(e)=> setRooms(e.target.value);
    const handlePriceChange=(e)=> setPrice(e.target.value);
    const handleBlurbChange=(e)=> setBlurb(e.target.value);
    const handleDescChange=(e)=> setDesc(e.target.value);
    const handleImgPathChange=(e)=> setImg(e.target.files[0]);

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
                    

                    <form className="p-6" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect1">Property Type</label>
                            <select className="form-control" id="type" value={type} onChange={handleTypeChange}>
                                <option value="1">House</option>
                                <option value="2">Townhouse</option>
                                <option value="3">Appartment</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="suburb">Suburb</label>
                            <select className="form-control" id="suburb" value={suburb} onChange={handleSuburbChange}>
                                <option value="1">Test</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input type="input" className="form-control" id="title" placeholder="Listing title" value={title} onChange={handleTitleChange} />
                        </div>
                         <div className="form-group">
                            <label htmlFor="street_address">Address</label>
                            <input type="input" className="form-control" id="street_address" placeholder="Street address"  value={stAdr} onChange={handleStAdrChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="price">Price</label>
                            <input type="input" className="form-control" id="price" placeholder="price" value={price} onChange={handlePriceChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="price">Area</label>
                            <input type="input" className="form-control" id="area" placeholder="area m2" value={area} onChange={handleAreaChange}/>
                        </div>
                          <div className="form-group">
                            <label htmlFor="exampleFormControlSelect1">No. of Bedrooms</label>
                            <select className="form-control" id="rooms" value={rooms} onChange={handleRoomsChange}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea rows="3" className="form-control" id="description" placeholder="description" value={desc} onChange={handleDescChange}></textarea>
                        </div>
                          <div className="form-group">
                            <label htmlFor="blurb">Blurb</label>
                            <textarea rows="3" className="form-control" id="blurb" placeholder="Sales blurb" value={blurb} onChange={handleBlurbChange}></textarea>
                        </div>
                        <input id="image" name="input-b2" type="file" className="file mb-10" data-show-preview="true" value={imgPath} onChange={handleImgPathChange}/>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
