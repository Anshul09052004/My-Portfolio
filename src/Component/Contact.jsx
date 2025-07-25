import React, { useState, useRef } from 'react';
import { MdOutlineMail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import emailjs from '@emailjs/browser';


function Contact() {
  const form = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_did1k1n',          // ✅ Replace with your EmailJS service ID
      'template_2fkbfdg',         // ✅ Replace with your template ID
      form.current,
      {
        publicKey: 'qJnZ3fUbQWYord8MK' // ✅ Replace with your public key
      }
    ).then(
      () => {
        alert("Message sent successfully!");
        setName('');
        setEmail('');
        setMessage('');
      },
      (error) => {
        console.log('FAILED...', error.text);
        alert("Failed to send message.");
      }
    );
  };

  return (
    <section id="contact" className="py-12 px-4 md:px-20  text-white">
      <h2 className="text-3xl text-center underline decoration-8 decoration-amber-300 underline-offset-8 mb-10">
        Contact Me
      </h2>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Contact Info */}
        <div className="md:w-1/2 text-lg">
          <h3 className="text-4xl mb-6">Get in touch</h3>
          <p className="mb-6">
            Have a project in mind? Want to collaborate? Or just say hi? I’d love to hear from you.
          </p>

          <div className="space-y-4">
            <p>
              <MdOutlineMail className="inline text-amber-300 text-2xl mr-2" />
              Email: <a href="mailto:anshulprajapat982@gmail.com" className="underline">anshulprajapat982@gmail.com</a>
            </p>
            <p>
              <FaGithub className="inline text-amber-300 text-2xl mr-2" />
              GitHub: <a href="https://github.com/Anshul09052004" target="_blank" rel="noreferrer" className="underline">https://github.com/Anshul09052004</a>
            </p>
            <p>
              <FaLinkedinIn className="inline text-amber-300 text-2xl mr-2" />
              LinkedIn: <a href="https://www.linkedin.com/in/anshul-prajapat/" target="_blank" rel="noreferrer" className="underline">https://www.linkedin.com/in/anshul-prajapat/</a>
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:w-1/2">
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-3 bg-gray-800 border border-amber-300 rounded text-white focus:outline-none focus:ring-2 focus:ring-amber-300"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 bg-gray-800 border border-amber-300 rounded text-white focus:outline-none focus:ring-2 focus:ring-amber-300"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full p-3 h-32 bg-gray-800 border border-amber-300 rounded text-white resize-none focus:outline-none focus:ring-2 focus:ring-amber-300"
            ></textarea>

            <button
              type="submit"
              className="bg-amber-300 hover:bg-yellow-400 text-black px-6 py-2 rounded font-semibold cursor-pointer transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
