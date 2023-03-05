import React from 'react'

const Documentation = () => {
  return (
    <div>

      <div className='grid grid-cols-9 font-dm'>
        <div className='col-span-2'>
          <section>
            <div className="bg-[#008080]
       text-white h-full flex-shrink-0 flex flex-col justify-between border-2px">
              <div className="p-6 mt-1">
                <h1 className="text-xl font-bold  text-white">Documentation</h1>
                <h2 className="p-6 mt-1  hover:bg-blue-200 hover:text-neutral-800  focus:outline-none focus:ring rounded-lg"><p>Introduction</p></h2>
                <hr />
                <h2 className="p-6 mt-1  hover:bg-blue-200 hover:text-neutral-800 focus:ring rounded-lg"><p>FacePilot API</p></h2>
                <hr />

                <h2 className="p-6 mt-1  hover:bg-blue-200 hover:text-neutral-800 focus:ring rounded-lg"><p>For who </p></h2>
                <hr />

                <h2 className="p-6 mt-1  hover:bg-blue-200 hover:text-neutral-800 focus:outline-none focus:ring rounded-lg"><p><a href='#usage'>How to use</a></p></h2>
                <hr />

                <h2 className="p-6 mt-1  hover:bg-blue-200 hover:text-neutral-800 focus:ring rounded-lg"><p>Input Requirements</p></h2>
                <hr />

                <h2 className="p-6 mt-1  hover:bg-blue-200 hover:text-neutral-800 focus:ring rounded-lg"><p>Filtering Criteria</p></h2>
                <hr />

                <h2 className="p-6 mt-1  hover:bg-blue-200 hover:text-neutral-800 focus:ring rounded-lg"><p>Gender Detection</p></h2>
                <hr />

                <h2 className="p-6 mt-1  hover:bg-blue-200 hover:text-neutral-800 focus:ring rounded-lg"><p><a href='#faq'>Accuracy</a></p></h2>
                <hr />

                <h2 className="p-6 mt-1  hover:bg-blue-200 hover:text-neutral-800  focus:ring rounded-lg"><p>Upgrades</p></h2>
                <hr />

                <h2 className="p-6 mt-1  hover:bg-blue-200 hover:text-neutral-800 focus:ring rounded-lg"><p>Future scope</p></h2>
                <hr />


              </div>
              <div className="p-6">

              </div>

            </div>

          </section>
        </div>

        <div className='col-span-6' id='main section'>
          
           <section class='m-10'>
           <h2 class="mb-2.5  mt-2.5 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                  Intoduction</h2>
           <p>Welcome to the documentation for FacePilot API! This document aims to provide a comprehensive guide to help you understand and use our API efficiently.</p>
           <h2 class="mb-2.5 mt-3.5 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
           What is FacePilot API?</h2>
           <p>FacePilot API is a powerful and user-friendly tool that allows you to check if the given url of a photo is fake or not. It says its fake if it  is a cartoon or a distorted image.</p>
           <h2 class="mb-2.5 mt-3.5 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
           Who is this documentation for?</h2>
           <p>This documentation is intended for anyone who is interested in learning about FacePilot API or wants to use it for their business operations. It is suitable for beginners as well as experienced users.</p>
           <h2 class="mb-2.5 mt-3.5 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
           How to use this documentation?</h2>
           <p>This documentation is organized into several sections, each covering a specific aspect of the software.The TryApi section contains a field where the url of an image is to put and it determines the output in the best efficient time! </p>
          
           <h2 class="mb-2.5 mt-3.5 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
           Sample Code</h2>
           <p>Provide sample code snippets in multiple programming languages to demonstrate how to interact with the API.
           </p>
           <section id='usage'>
            <div class="flex justify-center mt-6">
              <div class="block max-w-sm rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700">
                <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                  Sample code   </h5>
                <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                  
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </p>

              </div>
            </div>
          </section>
           <h2 class="mb-2.5 mt-3.5 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
           Input Requirements</h2>
           <p>The API uses the URL of an image and proceeds with it work. The model could further be improved to add the links of people's profile in social platforms like Instagram,Facebook Twitter,etc.
            Web scraping could be used to extract the image URL and feed it to the API.
           </p>
           
           </section>
           
          <section id='faq'>
            <div class="flex justify-center mt-2">
              <div class="block max-w-sm rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700">
                <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                  faq    </h5>
                <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </p>


              </div>
            </div>
          </section>
          <h2 class="mb-6 ml-10 mt-3.5 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          Filtering Criteria</h2>
           <p class='ml-10'>It does not detect the cartoon images or distorted images.The photos were filtered out on the of them being human or non human. Then it filters out whether it is a male face or a female face. </p>
           <h2 class="mb-6 ml-10 mt-3.5 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
           Gender Detection</h2>
           <p class='ml-10'>The dataset with the male:female ratio of 50:50 was used to train the model</p>
           <h2 class="mb-6 ml-10 mt-3.5 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
           Accuracy</h2>
           <p class='ml-10'>The dataset currently is trained with  XXXXXXXXX images with the accuracy of XXXXXX of detecting fake photo. The accuracy of XXXX for Males and XXXXX for Females is present.</p>     
           
           <h2 class="mb-6 ml-10 mt-3.5 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
           Upgrades</h2>
           <p class='ml-10'>The popular models do not diffrentaite a cartoon or a distorted image fom a real human photo. It also does not detect the gender and inputs a male photo where a female photo was to be inserted. </p>
           <h2 class="mb-6 ml-10 mt-3.5 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
           Future scope</h2>
           <p class='ml-10'>The model could further be improved to add the links of people's profile in social platforms like Instagram,Facebook Twitter,etc.
            Web scraping could be used to extract the image URL and feed it to the API.  </p>  </div>

      </div>

    </div>
  )
}

export default Documentation;
