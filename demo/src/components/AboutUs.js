import React from 'react'
import LinkedIn from "../assets/LinkedIn.svg"
import Github from "../assets/Globe.svg"
import Profile from "../assets/small_circle.svg"
import Position from "../assets/Insta.svg"
import cardImg from '../assets/land.jpg'

const AboutUs = () => {
  return (
    // <div className='bg-gradient-to-b from-[#CCE2FC] to-[#FFFFFF]'>
    //   <div className='bg-white sm:mx-44'>

    //     <div className='text-center mb-10 text-3xl sm:text-4xl text-black font-bold font-dm'>
    //       Meet the Team
    //     </div>

    //     <div className='mt-10'>
    //       <div className='text-2xl sm:text-3xl text-[#263B72] font-bold ml-3 sm:ml-24'>
    //         Sr. Mentor
    //       </div>

    //       <div className=' flex flex-col-reverse sm:grid sm:grid-cols-12 sm:gap-4 mt-4 mx-3 mb-8'>

    //         <div className=' mt-3 sm:col-start-3 sm:col-span-1 flex  '>
    //           <img className=" w-10 h-10" src={LinkedIn} alt="" />
    //           <img className=" w-10 h-10" src={Github} alt="" />
    //         </div>

    //         <div className='sm:col-span-5'>
    //           <div className=' text-[#263B72] font-bold text-xl text-center sm:text-right '>Name</div>
    //           <p className='font-bold text-lg text-center sm:text-right mb-4  '>Interesets</p>
    //           <p className='ml-10 mr-10 sm:m-0'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui incidunt similique, dolorem pariatur distinctio magnam consectetur omnis. Repellendus dolorem aliquid minima eos saepe est labore tempora voluptates sunt, veniam architecto?</p>
    //         </div>

    //         <div className='sm:col-span-3 '>
    //           <img src={Profile} alt="" className='mx-auto sm:w-40 sm:ml-0 py-0' />
    //           <img src={Position} alt="" className='mx-auto sm:w-40 sm:ml-0 ' />
    //         </div>

    //       </div>

    //       <div className='felx flex-cols sm:grid sm:grid-cols-12 sm:gap-4 mt-4 mx-3 mb-4'>

    //         <div className=' sm:col-start-3 sm:col-span-2  '>
    //           <img src={Profile} alt="" className='mx-auto sm:w-40  sm:ml-0' />
    //           <img src={Position} alt="" className='mx-auto sm:w-40 sm:ml-0 ' />
    //         </div>

    //         <div className='col-span-5'>
    //           <div className=' text-[#263B72] font-bold text-xl text-center sm:text-left '>Name</div>
    //           <p className='font-bold text-lg text-center sm:text-left mb-4'>Interesets</p>
    //           <p className='ml-10 mr-10 sm:m-0'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui incidunt similique, dolorem pariatur distinctio magnam consectetur omnis. Repellendus dolorem aliquid minima eos saepe est labore tempora voluptates sunt, veniam architecto?</p>
    //         </div>

    //         <div className='me-0 mt-3 sm:col-span-1 flex'>
    //           <img className=" w-10 h-10" src={LinkedIn} alt="" />
    //           <img className=" w-10 h-10" src={Github} alt="" />
    //         </div>

    //       </div>
    //     </div>

    //     <div className='mt-10'>
    //       <div className='text-2xl sm:text-3xl text-[#263B72] font-bold ml-3 sm:ml-24'>
    //         Jr. Mentor
    //       </div>

    //       <div className=' flex flex-col-reverse sm:grid sm:grid-cols-12 sm:gap-4 mt-4 mx-3 mb-8'>

    //         <div className=' mt-3 sm:col-start-3 sm:col-span-1 flex  '>
    //           <img className=" w-10 h-10" src={LinkedIn} alt="" />
    //           <img className=" w-10 h-10" src={Github} alt="" />
    //         </div>

    //         <div className='sm:col-span-5'>
    //           <div className=' text-[#263B72] font-bold text-xl text-center sm:text-right '>Name</div>
    //           <p className='font-bold text-lg text-center sm:text-right mb-4'>Interesets</p>
    //           <p className='ml-10 mr-10 sm:m-0'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui incidunt similique, dolorem pariatur distinctio magnam consectetur omnis. Repellendus dolorem aliquid minima eos saepe est labore tempora voluptates sunt, veniam architecto?</p>
    //         </div>

    //         <div className='sm:col-span-3'>
    //           <img src={Profile} alt="" className='mx-auto sm:w-40 sm:ml-0 py-0' />
    //           <img src={Position} alt="" className='mx-auto sm:w-40 sm:ml-0 ' />
    //         </div>

    //       </div>

    //       <div className='felx flex-cols sm:grid sm:grid-cols-12 sm:gap-4 mt-4 mx-3 mb-4'>

    //         <div className=' sm:col-start-3 sm:col-span-2  '>
    //           <img src={Profile} alt="" className='mx-auto sm:w-40  sm:ml-0' />
    //           <img src={Position} alt="" className='mx-auto sm:w-40 sm:ml-0 ' />
    //         </div>

    //         <div className='col-span-5'>
    //           <div className=' text-[#263B72] font-bold text-xl text-center sm:text-left '>Name</div>
    //           <p className='font-bold text-lg text-center sm:text-left mb-4'>Interesets</p>
    //           <p className='ml-10 mr-10 sm:m-0'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui incidunt similique, dolorem pariatur distinctio magnam consectetur omnis. Repellendus dolorem aliquid minima eos saepe est labore tempora voluptates sunt, veniam architecto?</p>
    //         </div>

    //         <div className='me-0 mt-3 sm:col-span-1 flex'>
    //           <img className=" w-10 h-10" src={LinkedIn} alt="" />
    //           <img className=" w-10 h-10" src={Github} alt="" />
    //         </div>

    //       </div>
    //     </div>

    //     <div className='mt-10'>
    //       <div className='text-2xl sm:text-3xl text-[#263B72] font-bold ml-3 sm:ml-24'>
    //         Faculty Mentor
    //       </div>

    //       <div className=' flex flex-col-reverse sm:grid sm:grid-cols-12 sm:gap-4 mt-4 mx-3 mb-8'>

    //         <div className=' mt-3 sm:col-start-3 sm:col-span-1 flex  '>
    //           <img className=" w-10 h-10" src={LinkedIn} alt="" />
    //           <img className=" w-10 h-10" src={Github} alt="" />
    //         </div>

    //         <div className='sm:col-span-5'>
    //           <div className=' text-[#263B72] font-bold text-xl text-center sm:text-right '>Name</div>
    //           <p className='font-bold text-lg text-center sm:text-right mb-4'>Interesets</p>
    //           <p className='ml-10 mr-10 sm:m-0'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui incidunt similique, dolorem pariatur distinctio magnam consectetur omnis. Repellendus dolorem aliquid minima eos saepe est labore tempora voluptates sunt, veniam architecto?</p>
    //         </div>

    //         <div className='sm:col-span-3'>
    //           <img src={Profile} alt="" className='mx-auto sm:w-40 sm:ml-0 py-0' />
    //           <img src={Position} alt="" className='mx-auto sm:w-40 sm:ml-0 ' />
    //         </div>

    //       </div>

    //       <div className='felx flex-cols sm:grid sm:grid-cols-12 sm:gap-4 mt-4 mx-3 pb-6'>

    //         <div className=' sm:col-start-3 sm:col-span-2  '>
    //           <img src={Profile} alt="" className='mx-auto sm:w-40  sm:ml-0' />
    //           <img src={Position} alt="" className='mx-auto sm:w-40 sm:ml-0 ' />
    //         </div>

    //         <div className='col-span-5'>
    //           <div className=' text-[#263B72] font-bold text-xl text-center sm:text-left '>Name</div>
    //           <p className='font-bold text-lg text-center sm:text-left mb-4'>Interesets</p>
    //           <p className='ml-10 mr-10 sm:m-0'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui incidunt similique, dolorem pariatur distinctio magnam consectetur omnis. Repellendus dolorem aliquid minima eos saepe est labore tempora voluptates sunt, veniam architecto?</p>
    //         </div>

    //         <div className='me-0 mt-3 sm:col-span-1 flex'>
    //           <img className=" w-10 h-10" src={LinkedIn} alt="" />
    //           <img className=" w-10 h-10" src={Github} alt="" />
    //         </div>

    //       </div>
    //     </div>

    //   </div>
    // </div>
    <>
    <section class="text-gray-700 body-font border-t border-gray-200">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900 font-dm">Our Team</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base font-dm">We are very grateful to be a part of the project. We beleive in helping our clients and making their lives easier with the latest technologies adopted by the industry. We hope you use our services.</p>
    </div>
    <div className="px:auto lg:px-12 inline-flex">
      <div className="w-48 h-64 border-[1px] border-gray-800 rounded-lg overflow-hidden shadow-md max-w-sm">
        <img className="w-full" src={cardImg} alt="Project Image"/>
        <div className="p-3 bg-[#CAE1FC]">
          <div className="font-medium text-sm mb-2">Project_title</div>
          <p className="text-xs">
            first few lines of the abstract of the project and some content related to the project.
          </p>
          <div className="px-2 pt-3 pb-2">
             <button className="w-10 h-6 rounded-md bg-[#37489B]"> <div className="text-center my-auto text-white text-xs font-medium">Visit</div> </button>
          </div>
        </div>
        
      </div>
    </div>
    <div className="px:auto lg:px-12 inline-flex">
      <div className="w-48 h-64 border-[1px] border-gray-800 rounded-lg overflow-hidden shadow-md max-w-sm">
        <img className="w-full" src={cardImg} alt="Project Image"/>
        <div className="p-3 bg-[#CAE1FC]">
          <div className="font-medium text-sm mb-2">Project_title</div>
          <p className="text-xs">
            first few lines of the abstract of the project and some content related to the project.
          </p>
          <div className="px-2 pt-3 pb-2">
             <button className="w-10 h-6 rounded-md bg-[#37489B]"> <div className="text-center my-auto text-white text-xs font-medium">Visit</div> </button>
          </div>
        </div>
        
      </div>
    </div>
    <div className="px:auto lg:px-12 inline-flex">
      <div className="w-48 h-64 border-[1px] border-gray-800 rounded-lg overflow-hidden shadow-md max-w-sm">
        <img className="w-full" src={cardImg} alt="Project Image"/>
        <div className="p-3 bg-[#CAE1FC]">
          <div className="font-medium text-sm mb-2">Project_title</div>
          <p className="text-xs">
            first few lines of the abstract of the project and some content related to the project.
          </p>
          <div className="px-2 pt-3 pb-2">
             <button className="w-10 h-6 rounded-md bg-[#37489B]"> <div className="text-center my-auto text-white text-xs font-medium">Visit</div> </button>
          </div>
        </div>
        
      </div>
    </div>
    <div className="px:auto lg:px-12 inline-flex">
      <div className="w-48 h-64 border-[1px] border-gray-800 rounded-lg overflow-hidden shadow-md max-w-sm">
        <img className="w-full" src={cardImg} alt="Project Image"/>
        <div className="p-3 bg-[#CAE1FC]">
          <div className="font-medium text-sm mb-2">Project_title</div>
          <p className="text-xs">
            first few lines of the abstract of the project and some content related to the project.
          </p>
          <div className="px-2 pt-3 pb-2">
             <button className="w-10 h-6 rounded-md bg-[#37489B]"> <div className="text-center my-auto text-white text-xs font-medium">Visit</div> </button>
          </div>
        </div>
        
      </div>
    </div>
    {/* <div class="flex flex-wrap -m-2">
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80/edf2f7/a5afbd"/>
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">Holden Caulfield</h2>
            <p class="text-gray-500">UI Designer</p>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/84x84/edf2f7/a5afbd"/>
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">Henry Letham</h2>
            <p class="text-gray-500">CTO</p>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/88x88/edf2f7/a5afbd"/>
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">Oskar Blinde</h2>
            <p class="text-gray-500">Founder</p>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/90x90/edf2f7/a5afbd"/>
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">John Doe</h2>
            <p class="text-gray-500">DevOps</p>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/94x94/edf2f7/a5afbd"/>
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">Martin Eden</h2>
            <p class="text-gray-500">Software Engineer</p>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98/edf2f7/a5afbd"/>
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">Boris Kitua</h2>
            <p class="text-gray-500">UX Researcher</p>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/100x90/edf2f7/a5afbd"/>
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">Atticus Finch</h2>
            <p class="text-gray-500">QA Engineer</p>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/104x94/edf2f7/a5afbd"/>
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">Alper Kamu</h2>
            <p class="text-gray-500">System</p>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/108x98/edf2f7/a5afbd"/>
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">Rodrigo Monchi</h2>
            <p class="text-gray-500">Product Manager</p>
          </div>
        </div>
      </div>
    </div> */}
  </div>
  
</section>
    </>

  )
}

export default AboutUs
