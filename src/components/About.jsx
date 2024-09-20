import React from "react";

const About = () => {
  return (
    <div id="about" className="relative py-[7%] px-2 shadow-md shadow-black/10">
      <div className="custom-container flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2 md:pr-16 relative">
          <img
            className="rounded-3xl w-full max-h-[240px] md:max-h-[260px] object-cover"
            src="/images/laptop.jpg"
            alt=""
          />
          <div className="absolute -right-3 -bottom-10 bg-white h-44 w-44 rounded-full flex items-center justify-center overflow-hidden">
            <img
              style={{ animationDuration: "10s" }}
              className="animate-spin"
              src="images/rotating-text.svg"
              alt=""
            />
            <img
              className="absolute w-20"
              src="images/working-emoji.png"
              alt=""
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-2">
          <h1 className="uppercase text-purple-600 font-bold text-xl">
            About Me
          </h1>
          <h2 className="font-bold text-2xl text-gray-800">
            Full Stack Web Developer <br /> based in Pune, Maharashtra, India 📍
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            Hey, my name is Vikas, and I'm a Full Stack Developer. My passion is
            to create and develop clean UI/UX for users, while also building
            scalable backend solutions.
          </p>
          <p className="text-lg text-gray-600 mt-4">
            My main stack currently includes React/Next.js in combination with
            Tailwind CSS, TypeScript, and for the backend, I'm proficient in
            MERN, PostgreSQL, Prisma, and AWS. My skillset also extends to Redux
            Toolkit, ensuring state management is seamless across projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
