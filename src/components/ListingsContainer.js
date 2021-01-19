import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ api }) {

  const renderListings = api.map((listing) => <ListingCard key={listing.description} description={listing.description} image={listing.image} location={listing.location} /> )

  return (
    <main>
      <ul className="cards">
        {renderListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
