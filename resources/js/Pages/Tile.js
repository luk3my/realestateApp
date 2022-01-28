import React, {useState, useEffect} from 'react'
import Modal from './Modal';

export default function Tile(listing) {
  const [showModal, setShowModal] = useState(false);

  const tile = {
        minWidth: '75%',
        marginBottom: '20px',
  }

  return (
    <>
      <div key={listing.id} onClick={() => setShowModal(true)} className="bg-white rounded-sm p-4 shadow-md w-5/6 cursor-pointer" style={tile}>
        <img src={`url(${listing.img_path})`} alt="Property Image" className="rounded-sm object-cover h-3/6 w-400px"/>
        <span className="font-extrabold text-xl mb-2">{listing.title}</span><br/>
        <span className="font-bold text-l mb-2">{listing.type} | {listing.suburb}</span><br />
        <span className="mr-14">Offers Above: <span className="font-semibold">${listing.price}</span></span>
        <span className="mr-14">Rooms: {listing.rooms}</span>
        <span className="">Size: {listing.area} sqm</span>
      </div>
      {showModal ? (
        <>
          <Modal showModal={setShowModal} listing={listing}></Modal>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}