"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useForm, ValidationError } from '@formspree/react';
import doneIcon from '../../../public/Animation - 1718117474061.json';
import Lottie from "lottie-react";

const ContactPage = () => {
  const text = "Say Hello";

  const form = useRef();
  const [state, handleSubmit] = useForm("xzbnneyb");
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setMessage('');
      setEmail('');
      setShowMessage(true);
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  const handleChangemessage = (e) => {
    setMessage(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };


  return (
    <motion.div
      className="h-screen"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col items-center lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl py-5">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </div>
        {/* FORM CONTAINER */}
        <form
          onSubmit={handleSubmit}
          ref={form}
          className=" lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center px-10 py-20"
        >
          <span>Dear DuCodex,</span>
          <textarea
            id="message"
            name="message"
            rows={6}
            className="bg-transparent border-y-2 p-3 border-y-black outline-none resize-none"
            placeholder="Write Here ..."
            value={message}
            required
            onChange={handleChangemessage}
          />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
          <span>My mail address is:</span>
          <input
            id="email"
            type="email" 
            name="email"
            required
            className="bg-transparent border-b-2 p-3 border-b-black outline-none"
            placeholder="Your Email"
            value={email}
            onChange={handleEmail}
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />
          <button className="bg-purple-200 rounded font-semibold text-gray-600 p-4" type="submit" disabled={state.submitting}>
            {state.submitting ? "Submitting...":"Send"}
          </button>
          {showMessage && (
            <p className='flex succpar' style={{fontSize:"18px", marginTop:"1.7rem"}}>
              <Lottie loop={false} style={{height:"25px", marginRight:"5px"}} animationData={doneIcon} />
              Your message has been sent successfully
            </p>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
