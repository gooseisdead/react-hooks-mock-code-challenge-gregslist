import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((r) => r.json())
      .then((listingsArray) => {
        setListings(listingsArray)
      });
    }, [])

    function handleDeleteClick(id) {
      fetch(`http://localhost:6001/listings/${id}`, {
        method: "DELETE",
      })
        .then((r) => r.json())
        .then(() => {
          const updatedListings = listings.filter((q) => q.id !== id);
          setListings(updatedListings);
        });
    }

  return (
    <div className="app">
      <Header />
      <ListingsContainer api={listings} handleDeleteClick={handleDeleteClick} />
    </div>
  );
}

export default App;
