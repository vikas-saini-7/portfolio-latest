import {
  IconBrandGmail,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconMail,
  IconPhone,
  IconPhoneCall,
} from "@tabler/icons-react";
import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="py-[7%] px-2 relative shadow-md shadow-black/10"
    >
      <div className="custom-container">
        <h1 className="uppercase text-purple-600 font-bold text-xl mb-4">
          CONTACT
        </h1>
        <h2 className="font-bold text-2xl text-gray-800">
          Don't be shy! Hit me up! 👇
        </h2>
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <a
            href="tel:+917972151499"
            className="w-full md:w-1/2 border p-8 rounded-lg flex items-center gap-4"
          >
            <IconPhoneCall className="text-purple-600" size={32} />
            <h1>+91 7972151499</h1>
          </a>
          <a
            href="mailto:vikas289888@gmail.com"
            className="w-full md:w-1/2 border p-8 rounded-lg flex items-center gap-4"
          >
            <IconMail className="text-red-800" size={32} />
            <h1>vikas289888@gmail.com</h1>
          </a>
        </div>
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <a
            href="https://www.linkedin.com/in/vikas-saini"
            className="w-full md:w-1/2 border p-8 rounded-lg flex items-center gap-4"
          >
            <IconBrandLinkedin className="text-blue-900" size={32} />
            <h1>Vikas Saini</h1>
          </a>
          <a
            href="https://wa.me/917972151499"
            className="w-full md:w-1/2 border p-8 rounded-lg flex items-center gap-4"
          >
            <IconBrandWhatsapp className="text-green-600" size={32} />
            <h1>+91 7972151499</h1>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
