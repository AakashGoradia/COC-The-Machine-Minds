import React, { useState } from "react";

const TryApi=()=> {
  const [url, setUrl] = useState("");
  const [dropdownValue, setDropdownValue] = useState("option1");

  function handleUrlChange(event) {
    setUrl(event.target.value);
  }

  function handleDropdownChange(event) {
    setDropdownValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // TODO: handle form submission
  }
  return (
    <>
    <div className="flex h-screen font-dm">
      <div className="bg-gray-600
       text-white w-80 flex-shrink-0 flex flex-col justify-between">
        <div className="p-6">
          <h1 className="text-xl font-bold">Reviews from Companies </h1>
          <h2><p>Google</p></h2>
          
          <p className="text-gray-500 mt-0 ">"Our company has been using this face detection app for several months now and we couldn't be happier with the results. "</p>
          <h2><p>Amazon</p></h2>
          <p className="text-gray-500 mt-0 ">"The accuracy of the app is impressive and it has saved us a lot of time and resources in our image processing workflows."</p>
          <h2><p>Facebook</p></h2>
          <p className="text-gray-500 mt-0 ">"The API is well-documented and easy to use, and the customer support has been excellent. "</p>
          <h1 className="text-xl font-bold mt-5 ">Reviews from Customers </h1>
          <h2><p>Ram Singh</p></h2>
          <p className="text-gray-500 mt-0 ">"I've been using this face detection app for a few weeks now and I'm blown away by how accurate it is. "</p>
          <h2><p>Shyam Singh</p></h2>
          <p className="text-gray-500 mt-0 ">"It's really easy to use and I love how it can detect multiple faces in the same image. "</p>
          <h2><p>Ram Singh</p></h2>
          <p className="text-gray-500 mt-0 ">"The app is also really fast, which is great for when I need to process a lot of images quickly. "</p>
        
        </div>
        <div className="p-6">
          
        </div>
      </div>
      <div className="snap-centre ml-10 justify-center align-middle">
       <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center max-w-lg w-full">
        <label htmlFor="url" className="mb-4 w-full mt-7 mx-7 align-center">
          Enter a URL:
        </label>
        <input
          type="text"
          id="url"
          name="url"
          value={url}
          onChange={handleUrlChange}
          placeholder="https://www.example.com"
          className="w-full mb-8 p-4 rounded-lg border-2 border-gray-300 items-center mt-2.5"
        />
        <label htmlFor="dropdown" className="mb-4 w-full items-center">
          Select an option:
        </label>
        <select
          id="dropdown"
          name="dropdown"
          value={dropdownValue}
          onChange={handleDropdownChange}
          className="p-4 rounded-lg border-2 border-gray-300"
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <button
          type="submit"
          className="mt-8 py-4 px-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
        >
          Submit
        </button>
      </form>
      </div>
    </div>
    </>
  );
}
   
  
  

export default TryApi;