import React from 'react';
import rect from "../assets/Rectangle 25.svg"
import vector from "../assets/Arrow.svg"

const SubscriptionPage=()=> {
  return (
    <div className='bg-gradient-to-b from-[#cee3fc] to-[#edf5fe] font-dm'>
            <p className='text-[#C71A03] text-[40px] font-["Montserrat"] font-bold text-center'>Subscription Plans</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 lg:gap-3 justify-items-center mt-10'>
                <div className="py-10 w-72 ">
                    <div className="rounded-lg overflow-hidden shadow-lg shadow-gray-600 max-w-sm bg-white lg:h-148">
                        <img src={rect} alt="" className='w-full px-2' />
                        <div className="px-6 py-4">
                            <div className=''>
                                <strong>Basic</strong>
                            </div>
                            <p>
                                <ul style={{ listStyleType: 'decimal' }}>
                                  <li>
                                    Price: $10/month
                                  </li>
                                  <li>
                                    Human presence detection for up to 100 images per month
                                  </li>
                                  <li>
                                    24/7 email support
                                  </li>
                                </ul>
                            </p>
                            <div className='pt-3 pb-3 flex'>
                                <span className='text-[#2566FF] p-2'>
                                    <a href='#'>Know More</a>
                                </span>
                                <img src={vector} className="" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-10 w-72 ">
                    <div className="rounded-lg overflow-hidden shadow-lg shadow-gray-600 max-w-sm  bg-white lg:h-140">
                        <img src={rect} alt="" className='w-full px-2' />
                        <div className="px-6 py-4">
                            <div>
                            <strong>Pro</strong>
                            </div>
                            <p>
                            <ul style={{ listStyleType: 'decimal' }}>
                                  <li>
                                    Price: $25/month
                                  </li>
                                  <li>
                                    Human presence detection for up to 500 images per month
                                  </li>
                                  <li>
                                    Priority email support
                                  </li>
                                  <li>
                                    API usage analytics
                                  </li>
                                </ul>
                            </p>
                            <div className='pt-3 pb-3 flex'>
                                <span className='text-[#2566FF] p-2'>
                                    <a href='#'>Know More</a>
                                </span>
                                <img src={vector} className="" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-10 w-72 ">
                    <div className="rounded-lg overflow-hidden shadow-lg shadow-gray-600 max-w-sm  bg-white">
                        <img src={rect} alt="" className='w-full px-2' />
                        <div className="px-6 py-4">
                            <div>
                                <strong>Ace</strong>
                            </div>
                            <p>
                            <ul style={{ listStyleType: 'decimal' }}>
                                  <li>
                                    Price: $50/month
                                  </li>
                                  <li>
                                    Includes access to perks from previous levels + 500 images/month
                                  </li>
                                  <li>
                                    Access to documentation and sample code
                                  </li>
{/*                                   
                                  <li>
                                    Custom integration support
                                  </li> */}
                                </ul>
                                
                            </p>
                            <div className='pt-3 pb-3 flex'>
                                <span className='text-[#2566FF] p-2'>
                                    <a href='#'>Know More</a>
                                </span>
                                <img src={vector} className="" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-10 w-72 ">
                    <div className="rounded-lg overflow-hidden shadow-lg shadow-gray-600 max-w-sm bg-white">
                        <img src={rect} alt="" className='w-full px-2' />
                        <div className="px-6 py-4">
                            <div>
                                <strong>
                                  Enterprise
                                </strong>
                            </div>
                            <p >
                            <ul style={{ listStyleType: 'decimal' }}>
                                  <li>
                                    Price:Custom Pricing based on usage and requirements.
                                  </li>
                                  <li>
                                  Includes access to perks from previous levels
                                  </li>
                                  <li>
                                    Dedicated account manager.
                                  </li>
                                  <li>
                                    Priority Email and Phone support
                                  </li>
                                 
                                </ul>
                            </p>
                            <div className='pt-3 pb-3 flex'>
                                <span className='text-[#2566FF] p-2'>
                                    <a href='#'>Know More</a>
                                </span>
                                <img src={vector} className="" alt="" />
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            <div className='mt-5 pb-5'>
                <p className='text-[24px] text-[#7C7C7C] text-center '>
                    Authoritatively underwhelm excellent methodologies via premium expertise competitive<br /> than open-source imperatives disseminate.
                </p>
            </div>


      </div>
  );
}

export default SubscriptionPage;

