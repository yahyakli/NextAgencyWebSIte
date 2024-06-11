"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm, ValidationError } from '@formspree/react';

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "Say Hello";

  const form = useRef();
  const [state, handleSubmit] = useForm("xzbnneyb");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
        }
      );
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
            className="bg-transparent border-b-2 p-3 border-b-black outline-none"
            placeholder="Your Email"
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />
          <button className="bg-purple-200 rounded font-semibold text-gray-600 p-4" type="submit" disabled={state.submitting}>
            Send
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
