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

  return (
    <div className="app">
      <Header />
      <ListingsContainer api={listings} />
    </div>
  );
}

export default App;
