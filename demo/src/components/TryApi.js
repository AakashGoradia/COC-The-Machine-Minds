import React, { useState } from "react";
import Try from '../assets/try.jpg'

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
       <section class="text-gray-700 body-font border-t border-gray-200">
        
       <h2 className="font-dm font-bold text-3xl text-center lg:mt-8">Detect Your Image Here</h2>
       
  <div class="container lg:px-5 lg:py-8 mx-auto flex flex-wrap">

    <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">

      <img alt="feature" class="object-cover object-center h-full w-full" src={Try}/>
    </div>
    <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
      <div class="flex flex-col mb-10 lg:items-start items-center lg:ml-12">



        <div class="flex-grow">
          <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-[#008080] text-white mb-5">

<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
</svg>
</div>
         <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Enter Your URL:</h2> 
<input type="email" id="helper-text" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="URL"/>
<p id="helper-text-explanation" class="mt-2 text-sm text-gray-500 dark:text-gray-400">We’ll never share your details. Read our <a href="#" class="font-medium text-[#008080] hover:underline dark:[#008080]">Privacy Policy</a>.</p>
        </div>
      </div>
      <button class="text-center inline-flex text-black bg-white py-2 px-6 focus:outline-none hover:bg-[#ff7f50] rounded text-lg font-dm border-black border-2 font-medium">View the Results
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
      </button>

      {/* <div class="flex flex-col mb-10 lg:items-start items-center">
        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
            <circle cx="6" cy="6" r="3"></circle>
            <circle cx="6" cy="18" r="3"></circle>
            <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
          </svg>
        </div>
        {/* <div class="flex-grow">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Enter Profile URL</h2>
          
<form>
    <div class="flex">
        <label for="search-dropdown" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
        <button id="dropdown-button" data-dropdown-toggle="dropdown" class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 dark:border-gray-700 dark:text-white rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800" type="button">All categories <svg aria-hidden="true" class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
        <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
            <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Shopping</a>
            </li>
            <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Images</a>
            </li>
            <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">News</a>
            </li>
            <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Finance</a>
            </li>
            </ul>
        </div>
        {/* <div class="relative w-full">
            <input type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-100 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search" required/>
            <button type="submit" class="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
        </div> */}
    {/* </div> */}
{/* </form> */}

        {/* </div> */} 
      {/* </div> */}
      {/* <div class="flex flex-col mb-10 lg:items-start items-center">
        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        {/* <div class="flex-grow">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Neptune</h2>
          <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
          <a href="/" class="mt-3 text-indigo-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div> */}
      {/* </div> */} 
    </div>
  </div>
</section>
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