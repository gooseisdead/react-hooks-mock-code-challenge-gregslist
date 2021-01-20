import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ api, handleDeleteClick }) {

  const renderListings = api.map((listing) => <ListingCard 
                                  key={listing.description}
                                  description={listing.description}
                                  image={listing.image || "https://via.placeholder.com/300x300"}
                                  location={listing.location}
                                  id={listing.id}
                                  onDelete={handleDeleteClick}
                                  /> )

  return (
    <main>
      <ul className="cards">
        {renderListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
