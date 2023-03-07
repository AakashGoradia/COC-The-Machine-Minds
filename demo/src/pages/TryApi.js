import React, { useState } from "react";
import Try from "../assets/try.jpg";
import Write from "../assets/write.jpg"
import axios from "axios";

const TryApi = () => {
  const [message, setMessage] = useState("");
  const [updated, setUpdated] = useState(message);
  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  console.log(message);
  const handleClick = async (e) => {
    e.preventDefault();
    console.log(message);
    const response = await axios.post(
      `http://localhost:5000/predict?url=${encodeURIComponent(message)}`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    const res = response.data;
    setMessage("");
    if (res?.prediction) setUpdated(res.prediction);
  };

  return (
    <>
      <section className="text-gray-700 body-font border-t border-gray-200">
        <h2 className="font-dm font-bold text-3xl text-center lg:mt-8">
          Detect Your Image Here
        </h2>

        <div className="container lg:px-5 lg:py-8 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 lg:h-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img
              alt="feature"
              className="object-cover object-center h-full w-full"
              src={Try}
            />
          </div>
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div className="flex flex-col mb-10 lg:items-start items-center lg:ml-12">
              <div className="flex-grow">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-[#008080] text-white mb-5">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Enter Your URL:
                </h2>
                <input
                  name="message"
                  type="email"
                  id="message"
                  value={message}
                  aria-describedby="helper-text-explanation"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={handleChange}
                  placeholder="URL"
                />
                <p
                  id="helper-text-explanation"
                  className="mt-2 text-sm text-gray-500 dark:text-gray-400"
                >
                  We'll never share your details. Read our{" "}
                  <a
                    href="/"
                    className="font-medium text-[#008080] hover:underline dark:[#008080]"
                  >
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>
            </div>
            <button
              className="text-center lg:ml-20 lg:w-64 inline-flex text-white bg-[#008080] py-2 px-6 focus:outline-none hover:bg-[#ff7f50] rounded text-lg font-dm border-black border-2 font-medium"
              onClick={handleClick}
            >
              View the Results
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-auto mt:8 pt:8"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
            {updated ? (
              <div className="lg:mt-20 lg:-ml-40">
                <div className="px:auto lg:px-12 inline-flex">
                  <div className="w-48 h-48 border-[1px] border-gray-800 rounded-lg overflow-hidden shadow-md max-w-sm">
                    <img className="w-fit" src={Write} alt=""/>
                    <div className="p-3 bg-[#CAE1FC]">
                      <div className="font-medium text-sm mb-2 font-dm">
                        HUMAN DETECTED
                      </div>
                      <p className="text-sm font-medium mb-2 font-dm">
                        The Gender is: {updated}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default TryApi;
