import Container from "@/components/layout/Container";
import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { AiOutlineMail } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
BsFacebook;
const Contact = () => {
  return (
    <>
      <Container>
        <div className="flex w-full min-h-screen justify-center items-center">
          <div className=" flex flex-col md:flex-row md:space-x-6  space-y-6 md:space-y-0 bg-gray-200 w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg text-black">
            <div className="flex flex-col space-y-8 justify-between">
              <div>
                <h1 className="font-bold text-4xl tracking-wide">Contact Us</h1>
                <p className="pt-2 text-gray-500 text-sm">
                  To speak with a North Wave expert, provide some information
                  about your organization and we’ll contact you about your
                  needs.
                </p>
              </div>

              <div className="flex flex-col space-y-6">
                <div className="inline-flex space-x-2 items-center">
                  <BsFillTelephoneFill className="text-teal-300 text-xl" />
                  <span>+(123) 456 7890</span>
                </div>
                <div className="inline-flex space-x-2 items-center">
                  <AiOutlineMail className="text-teal-300 text-xl" />
                  <span>sales@northwave.com</span>
                </div>
                <div className="inline-flex space-x-2 items-center">
                  <HiLocationMarker className="text-teal-300 text-xl" />
                  <span>170 Brockport Dr suite 206, Toronto, ON M9W 5C8</span>
                </div>
              </div>

              <div className="flex space-x-4 text-lg">
                <a href="https://www.facebook.com" target="_blank">
                  <BsFacebook />
                </a>
                <a href="https://www.instagram.com" target="_blank">
                  <AiFillInstagram />
                </a>
                <a href="https://www.linkedin.com" target="_blank">
                  <BsTwitter />
                </a>
              </div>
            </div>
            <div>
              <div className="bg-white rounded-xl shadow-lg p-8 md:w-80">
                <form action="" className="flex flex-col space-y-4">
                  <div>
                    <label htmlFor="" className="text-sm">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Name .."
                      className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2  mt-2 outline-none focus:ring-2 focus:ring-teal-300"
                    />
                  </div>

                  <div>
                    <label htmlFor="" className="text-sm">
                      Email
                    </label>

                    <input
                      type="email"
                      placeholder="Enter Email .."
                      className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300"
                    />
                  </div>

                  <div>
                    <label htmlFor="" className="text-sm">
                      Message
                    </label>

                    <textarea
                      type="email"
                      rows="4"
                      placeholder="Enter Message .."
                      className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300"
                    />
                  </div>
                  <button className="inline-block self-end bg-cyan-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
