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
    <div className="flex h-screen">
      <div className="bg-gray-600
       text-white w-80 flex-shrink-0 flex flex-col justify-between">
        <div className="p-6">
          <h1 className="text-2xl font-bold">My Sidebar</h1>
          <h2><p>Reviews from Companies</p></h2>
          <p className="text-gray-500 mt-0 ">"Our company has been using this face detection app for several months now and we couldn't be happier with the results. The accuracy of the app is impressive and it has saved us a lot of time and resources in our image processing workflows. The API is well-documented and easy to use, and the customer support has been excellent. We've also been impressed with the app's ability to detect faces in low-light and high-contrast images. Overall, we highly recommend this app to any company looking for a reliable and accurate face detection solution."</p>
          <h2><p>Reviews from Companies</p></h2>
          <p className="text-gray-500 mt-0 ">"I've been using this face detection app for a few weeks now and I'm blown away by how accurate it is. It's really easy to use and I love how it can detect multiple faces in the same image. The app is also really fast, which is great for when I need to process a lot of images quickly. Overall, I'm really happy with this app and would definitely recommend it to anyone who needs accurate and fast face detection."</p>
        
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
   
  
  //   return <div className="place-content-center">
  //   <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900 ml-3.5 place-items-center mx-7 ">
  //     Price
  //   </label>
  //   <div className="relative mt-10 rounded-md shadow-sm place-items-center  justify-center mx-7">
  //     <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
  //       <span className="text-gray-500 sm:text-sm">$</span>
  //     </div>
  //     <input
  //       type="text"
  //       name="price"
  //       id="price"
  //       className="inline-flex rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
  //       placeholder="0.00"
  //     />
  //     <div className="inset-y-0 inline-flex items-center">
  //       <label htmlFor="currency" className="sr-only">
  //         Currency
  //       </label>
  //       <select
  //         id="currency"
  //         name="currency"
  //         className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
  //         <option>URL</option>
  //         <option>INSTA</option>
  //         <option>TWITTER</option>
  //       </select>
  //     </div>
  //   </div>
  //   <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6  mt-10 focus:outline-none hover:bg-indigo-600 rounded text-lg">Sign Up</button>
  // </div>


export default TryApi;