import React, {useState, useEffect} from 'react';
import Moment from 'react-moment';

export default function Modal(props) {

 const dateToFormat = new Date(props.listing.listed_at);

  return (
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    {props.listing.title}
                  </h3>
                </div>
                <div className="relative p-6 flex-auto">
                    <span className="my-4 text-blueGray-500 text-lg leading-relaxed font-bold"> 
                        First listed:&nbsp; 
                        <Moment format="DD/MM/YYYY" date={dateToFormat} /></span><br/>
                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed font-semibold">
                        {props.listing.description}
                    </p>
                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                        {props.listing.blurb}
                    </p>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => props.showModal(false)}>
                    Close
                  </button>
                   <button disabled
                    className="text-green-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => props.showModal(false)}>
                    Contact Agent
                  </button>
                </div>
              </div>
            </div>
          </div>
  );
}