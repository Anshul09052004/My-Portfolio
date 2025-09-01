import React, { useState, useRef } from 'react';
import { MdOutlineMail } from "react-icons/md";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

function Contact() {
  const form = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorField, setErrorField] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setErrorField("name");
      setErrorMessage("Please Enter Name");
      return;
    }
    if (!email.trim()) {
      setErrorField("email");
      setErrorMessage("Please Enter Email");
      return;
    }
    if (!message.trim()) {
      setErrorField("message");
      setErrorMessage("Please Enter Message");
      return;
    }

    emailjs.sendForm(
      'service_did1k1n',
      'template_2fkbfdg',
      form.current,
      { publicKey: 'qJnZ3fUbQWYord8MK' }
    ).then(
      () => {
        toast.success("Message sent successfully!");
        setName('');
        setEmail('');
        setMessage('');
      },
      (error) => {
        console.log('FAILED...', error.text);
        toast.error("Failed to send message. Please try again.");
      }
    );
  };

  return (
    <section id="contact" className="py-16 px-6 md:px-20 text-white bg-gradient-to-b from-gray-900 via-gray-800 to-black">
      <motion.div
        className="text-white font-bold"
        initial={{ opacity: 0, y: 100 }}           // start position (hidden)
        whileInView={{ opacity: 1, y: 0 }}        // scroll hoke view me aaye to animate
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}                 // ek hi baar chale
      >
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-3">📞 Contact Me</h2>
          <div className="mx-auto w-36 h-1.5 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Contact Info */}
          <div className="md:w-1/2 text-lg space-y-6">
            <h3 className="text-3xl font-semibold mb-4">Get in Touch</h3>
            <p className="text-gray-300 leading-relaxed">
              Have a project in mind? Want to collaborate? Or just say hi?
              I’d love to hear from you.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-md shadow-md hover:scale-105 transition duration-300">
                <MdOutlineMail className="text-amber-400 text-2xl" />
                <a href="mailto:anshulprajapat982@gmail.com" className="underline hover:text-amber-300 transition">
                  anshulprajapat982@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-md shadow-md hover:scale-105 transition duration-300">
                <FaGithub className="text-amber-400 text-2xl" />
                <a href="https://github.com/Anshul09052004" target="_blank" rel="noreferrer" className="underline hover:text-amber-300 transition">
                  github.com/Anshul09052004
                </a>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-md shadow-md hover:scale-105 transition duration-300">
                <FaLinkedinIn className="text-amber-400 text-2xl" />
                <a href="https://www.linkedin.com/in/anshul-prajapat/" target="_blank" rel="noreferrer" className="underline hover:text-amber-300 transition">
                  linkedin.com/in/anshul-prajapat
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:w-1/2">
            <form ref={form} onSubmit={sendEmail} className="p-6 md:p-8 rounded-2xl bg-white/10 backdrop-blur-md shadow-lg space-y-5">

              {/* Name */}
              <div>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (e.target.value.trim() !== "") {
                      setErrorField(null);
                      setErrorMessage("");
                    }
                  }}
                  className={`w-full p-3 bg-gray-900/70 border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-400 
                  ${errorField === "name" ? "border-2 border-red-500 animate-pulse" : "border-gray-600"}`}
                />
                {errorField === "name" && <p className="text-[#FF7276] text-sm mt-1">{errorMessage}</p>}
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (e.target.value.trim() !== "") {
                      setErrorField(null);
                      setErrorMessage("");
                    }
                  }}
                  className={`w-full p-3 bg-gray-900/70 border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-400 
                  ${errorField === "email" ? "border-2 border-red-500 animate-pulse" : "border-gray-600"}`}
                />
                {errorField === "email" && <p className="text-[#FF7276] text-sm mt-1">{errorMessage}</p>}
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    if (e.target.value.trim() !== "") {
                      setErrorField(null);
                      setErrorMessage("");
                    }
                  }}
                  className={`w-full p-3 h-32 bg-gray-900/70 border rounded-lg text-white resize-none focus:outline-none focus:ring-2 focus:ring-amber-400 
                  ${errorField === "message" ? "border-2 border-red-500 animate-pulse" : "border-gray-600"}`}
                ></textarea>
                {errorField === "message" && <p className="text-[#FF7276] text-sm mt-1">{errorMessage}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-yellow-500 hover:to-amber-400 text-black px-6 py-3 rounded-lg font-semibold cursor-pointer transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <hr className="mt-16 border-gray-700 rounded-full" />
      </motion.div>

    </section>
  );
}

export default Contact;
