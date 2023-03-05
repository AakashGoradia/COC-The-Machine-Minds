import React from 'react'
import LinkedIn from "../assets/LinkedIn.svg"
import Github from "../assets/Globe.svg"
import Profile from "../assets/small_circle.svg"
import Position from "../assets/Insta.svg"
import cardImg from '../assets/land.jpg'

const AboutUs = () => {
  return (
    
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
        </div>
        
      </div>
    </div>

  </div>
  
</section>
    </>

  )
}

export default AboutUs
