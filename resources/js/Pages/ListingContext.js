import React from 'react'

const ListingContext = React.createContext(true)

export const  ListingProvider =  ListingContext.Provider
export const  ListingConsumer =  ListingContext.Consumer

export default  ListingContext