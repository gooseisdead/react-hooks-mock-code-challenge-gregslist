import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import NewListingForm from "./NewListingForm";


function App() {

  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((r) => r.json())
      .then((listingsArray) => {
        setListings(listingsArray)
      });
    }, [])

    function handleNewListing(newListing) {
      const updatedArray = [...listings, newListing]
      setListings(updatedArray)
    }
  

    function handleDeleteClick(id) {
      fetch(`http://localhost:6001/listings/${id}`, {
        method: "DELETE",
      })
        .then((r) => r.json())
        .then(() => {
          const updatedListings = listings.filter((listing) => listing.id !== id);
          setListings(updatedListings);
        });
    }

  return (
    <div className="app">
      <Header />
      <NewListingForm localHandleNewListing={handleNewListing} />
      <ListingsContainer api={listings} handleDeleteClick={handleDeleteClick} />
    </div>
  );
}

export default App;
