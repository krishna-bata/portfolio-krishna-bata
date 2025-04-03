import React, { useState } from "react";
import Title from "../components/Title";
import { bio } from "../assets/data";
import { useDispatch, useSelector } from "react-redux";
import { selectMessage, userSendMessageAsync } from "../redux/userSlice";
import { toast } from "react-toastify";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  const responseMessage = useSelector(selectMessage)

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, email, message };
    dispatch(userSendMessageAsync(data))
    toast.success("Message send successfully");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="container mx-auto w-full mt-16 px-8 lg:px-0">
      <div className="text-center">
        <Title title="Get In Touch" />
      </div>
      <div className="mt-16 flex flex-col gap-8 w-full lg:w-1/2 mx-auto">
        <div className="grid grid-cols-3 gap-4 lg:gap-8">
          <a
            href={`mailto:${bio.email}`}
            target="_blank"
            className="flex text-xl shadow-xl border border-gray-200 p-8 rounded-xl justify-center items-center font-bold hover:-translate-y-2 hover:text-white hover:bg-primary-color transition-all duration-300"
          >
            <i className="fa-solid fa-envelope"></i>
          </a>
          <a
            href={`tel:+91${bio.phone}`}
            target="_blank"
            className="flex text-xl shadow-xl border border-gray-200 p-8 rounded-xl justify-center items-center font-bold hover:-translate-y-2 hover:text-white hover:bg-primary-color transition-all duration-300"
          >
            <i className="fa-solid fa-phone"></i>
          </a>
          <a
            href={bio.linkedin}
            target="_blank"
            className="flex text-xl shadow-xl border border-gray-200 p-8 rounded-xl justify-center items-center font-bold hover:-translate-y-2 hover:text-white hover:bg-primary-color transition-all duration-300"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
        <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-8">
          <div>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              name="name"
              className="w-full p-4 rounded-lg border border-gray-300  outline-none"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              name="email"
              className="w-full p-4 rounded-lg border border-gray-300  outline-none"
              placeholder="Your Email"
              required
            />
          </div>
          <div>
            <textarea
              rows="6"
              name="message"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              className="w-full p-4 rounded-lg border border-gray-300  outline-none"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-primary-color text-white px-6 py-3 rounded-lg hover:opacity-80 transition w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
