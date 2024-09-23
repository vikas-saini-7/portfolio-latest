import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    emailjs
      .send(
        "service_sts8q5y",
        "template_m1llp4z",
        formData,
        "ZCq1_UEoj5XQAfeT-"
      )
      .then(
        (result) => {
          alert("Email sent successfully!");
        },
        (error) => {
          alert("Failed to send email. Try again later.");
        }
      );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div id="contact" className="py-[5%]">
      <div className="custom-project-container">
        <div className="bg-[#EEF5F8] border rounded-lg py-12 flex flex-col md:flex-row gap-8 p-8 container mx-auto shadow-lg">
          <div className="flex-1">
            <img
              src="images/contact.webp"
              alt="Contact us"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
            <form className="space-y-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="name">Name</label>
                <input
                  name="name"
                  className="px-3 py-2 border"
                  id="name"
                  placeholder="Enter your name"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="email">Email</label>
                <input
                  name="email"
                  className="px-3 py-2 border"
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  placeholder="Enter your message"
                  className="min-h-[100px] px-3 py-2 border"
                  required
                  name="message"
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                onClick={handleSubmit}
                className="w-full bg-gray-800 hover:bg-black text-white px-4 py-2 rounded mt-6 block"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
