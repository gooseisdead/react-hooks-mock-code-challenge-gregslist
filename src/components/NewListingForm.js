import React, { useState } from "react";

function NewListingForm({ localHandleNewListing }) {

  const [description, setDescription] = useState("")
  const [image, setImage] = useState("")
  const [location, setLocation] = useState("")

  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:6001/listings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        description: description,
        image: image,
        location: location,
      }),
    })
    .then((r) => r.json())
    .then((newListing) => localHandleNewListing(newListing))
  }

    return (
        <header>
      <form onSubmit={handleSubmit} className="new-listing-form">
        <input
          name="description"
          placeholder="Describe your item..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input 
          name="image"
          placeholder="Image URL...r"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          placeholder="Your Location"
          name="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input type="submit" value="List your item." />
      </form>
      </header>
    );
}

export default NewListingForm;
