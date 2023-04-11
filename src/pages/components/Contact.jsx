import { TextareaAutosize } from "@mui/material";
import React, { useRef, useState } from "react";
import Earth from "./r3f/Earth";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [show, setShow] = useState(false);

  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .send(
        "service_sbuvwtw",
        "template_o0s55mb",
        {
          from_name: form.name,
          to_name: "Julian",
          from_email: form.email,
          to_email: "contact@jssmastery.pro",
          message: form.message,
        },
        "MzVEfNIk0BOBDWWG0"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you for the message! I will get back to you soon.");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);

          alert("Message did not send. Something went wrong.");
        }
      );
  };

  //MzVEfNIk0BOBDWWG0
  //service_sbuvwtw
  //template_o0s55mb

  return (
    <div className="flex flex-col lg:flex-row py-24 px-12">
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center">
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 100 }}
            animate={{ y: show ? 0 : 100 }}
            transition={{ delay: 0.5 }}
            className="text-4xl lg:text-6xl text-center lg:text-left font-[900] mb-8"
          >
            Get in touch!
          </motion.h1>
        </div>
        <motion.div
          whileInView={() => setShow(true)}
          className="absolute pointer-events-none opacity-0"
        >
          hello
        </motion.div>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 text-[18px] lg:text-[24px] rounded"
        >
          <div className="flex flex-col">
            <div className="overflow-hidden">
              <motion.p
                initial={{ y: 50 }}
                animate={{ y: show ? 0 : 50 }}
                transition={{ delay: 1.0 }}
                className="text-left"
              >
                Name
              </motion.p>
            </div>
            <motion.input
              initial={{ scale: 0 }}
              animate={{ scale: show ? 1 : 0 }}
              transition={{ delay: 1.1 }}
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="p-4 w-min text-neutral-950 placeholder:text-neutral-300 outline-blue-500 rounded shadow-inner"
            ></motion.input>
          </div>
          <div className="flex flex-col">
            <div className="overflow-hidden">
              <motion.p
                initial={{ y: 50 }}
                animate={{ y: show ? 0 : 50 }}
                transition={{ delay: 1.2 }}
                className="text-left"
              >
                Email
              </motion.p>
            </div>
            <motion.input
              initial={{ scale: 0 }}
              animate={{ scale: show ? 1 : 0 }}
              transition={{ delay: 1.3 }}
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="email@example.com"
              className="p-4 w-min text-neutral-950 placeholder:text-neutral-300 outline-blue-500 rounded shadow-inner"
            ></motion.input>
          </div>
          <div className="flex flex-col">
            <div className="overflow-hidden">
              <motion.p
                initial={{ y: 50 }}
                animate={{ y: show ? 0 : 50 }}
                transition={{ delay: 1.4 }}
                className="text-left"
              >
                Message
              </motion.p>
            </div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: show ? 1 : 0 }}
              transition={{ delay: 1.5 }}
              className="w-full"
            >
              <TextareaAutosize
                required
                name="message"
                type="text"
                value={form.message}
                onChange={handleChange}
                placeholder="Type your message here..."
                className="p-4 text-neutral-950 placeholder:text-neutral-300 outline-blue-500 rounded shadow-inner w-full"
                minRows={5}
              />
            </motion.div>
          </div>
          <div className="flex justify-start">
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: show ? 1 : 0 }}
              transition={{ delay: 1.6 }}
              className="px-4 py-2 bg-blue-400 text-neutral-50 hover:bg-blue-600 rounded shadow transition-all duration-300"
              type="submit"
            >
              {loading ? `Sending...` : `Send`}
            </motion.button>
          </div>
        </form>
      </div>
      <div className="lg:w-1/2 w-full">
        <Earth show={show} />
      </div>
    </div>
  );
};

export default Contact;
