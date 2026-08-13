import React from "react";
import Navbar from "../blocks/Components/Navbar";
import Footer from "../blocks/Components/Footer";
import LightRays from "../blocks/Backgrounds/LightRays/LightRays";
import TiltedCard from "../blocks/Components/TiltedCard/TiltedCard";

export default function About() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#070210] text-white scroll-smooth">
      <Navbar />

      {/* Fixed Light Rays Background */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
        />
      </div>

      {/* Page Content */}
      <div className="relative z-10 flex flex-col lg:flex-row max-w-6xl mx-auto my-10 px-4 md:px-8 pt-20 gap-8">
        {/* Sidebar */}
        <aside className="lg:w-1/4 w-full bg-transparent sticky top-20 z-20 self-start">
          <div className="flex flex-col items-center pt-6 pb-6">
            {/* <img
              src="/images/Photo.jpg"
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-[#203a43] mb-4"
              /> */}
            <TiltedCard
              className="w-32 h-32 rounded-full object-cover border-4 border-[#203a43] mb-4"
              imageSrc="/images/Photo.jpg"
              altText="Pratham Potdar - Developer Album Cover"
              captionText="Software Developer"
              containerHeight="200px"
              containerWidth="200px"
              imageHeight="200px"
              imageWidth="200px"
              rotateAmplitude={12}
              scaleOnHover={1.3}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <p className="tilted-card-demo-text">Pratham Potdar</p>
              }
            />
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[#ff6a6a] text-xl">&#x1F5FA;</span>
              <span className="text-base text-gray-200">
                {/* Nagpur, Maharashtra */}
                Bangalore, Karnataka
              </span>
            </div>
            <div className="flex gap-2 mb-4 flex-wrap justify-center">
              <span className="px-3 py-1 rounded-full bg-[#203a43] text-sm">
                English
              </span>
              <span className="px-3 py-1 rounded-full bg-[#203a43] text-sm">
                Hindi
              </span>
            </div>
          </div>
          <nav className="flex lg:flex-col flex-wrap gap-4  md:ms-10 justify-center text-gray-300 text-lg font-normal">
            <a href="#intro" className="hover:text-white">
              Introduction
            </a>
            <a href="#work" className="hover:text-white">
              Work Experience
            </a>
            <a href="#studies" className="hover:text-white">
              Studies
            </a>
            <a href="#skills" className="hover:text-white">
              Technical Skills
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col gap-12 pb-20 px-5 sm:px-5 md:px-0">
          {/* Intro */}
          <section id="intro" className="mb-8 scroll-mt-30">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <h1 className="text-4xl sm:text-5xl font-bold">Pratham Potdar</h1>
              <span className="text-xl sm:text-2xl font-light">
                Full Stack Web Developer
              </span>
            </div>
            <div className="flex gap-4 mt-4 flex-wrap">
              <a
                href="https://github.com/prathampmp23"
                className="flex items-center gap-2 px-3 py-1 rounded border-1 border-gray-600 hover:bg-[#0233487e]"
              >
                <img
                  src="/images/Github.png"
                  alt="GitHubLogo"
                  className="w-6 h-6 object-contain"
                />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/pratham-potdar-49744b236"
                className="flex items-center gap-2 px-3 py-1 rounded border-1 border-gray-600 hover:bg-[#0233487e]"
              >
                <img
                  src="/images/linkedin.png"
                  alt="linkedinLogo"
                  className="w-6 h-6 object-contain"
                />
                LinkedIn
              </a>
              <a
                href="https://leetcode.com/u/PrathamPotdar"
                className="flex items-center gap-2 px-3 py-1 rounded border-1 border-gray-600 hover:bg-[#0233487e]"
              >
                <img
                  src="/images/leetcode.png"
                  alt="LeetcodeLogo"
                  className="w-6 h-6 object-contain"
                />
                Leetcode
              </a>
              <a
                href="mailto:prathampotdar.contact@gmail.com"
                className="flex items-center gap-2 px-3 py-1 rounded border-1 border-gray-600 hover:bg-[#0233487e]"
              >
                <img
                  src="/images/gmail.png"
                  alt="GmailLogo"
                  className="w-6 h-6 object-contain"
                />
                Email
              </a>
            </div>
            <p className="mt-6 text-lg text-gray-200 max-w-2xl">
              I’m Pratham Potdar, a Computer Science and Engineering student
              passionate about building impactful solutions. With a strong
              foundation in DSA and hands-on experience in Java, SpringBoot and
              MERN stack I thrive on solving problems, learning new
              technologies, and turning ideas into reality. <br />
              Eager to contribute to innovative projects and grow as a
              professional in the tech industry.
            </p>
          </section>

          {/* Work Experience */}
          <section id="work" className="mb-8 scroll-mt-30">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Work Experience
            </h2>
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                <div>
                  <div className="flex items-center gap-2 py-2 rounded-lg shadow-md transition-all duration-300">
                    <img
                      src="/images/cognizant.png"
                      className="w-10 h-10 object-contain rounded-2xl"
                    />
                    <span className="text-white text-2xl font-semibold">
                      Cognizant
                    </span>
                  </div>
                  <div className="text-teal-400 font-medium">
                    Programmer Analyst Trainee (Full-Time)
                  </div>
                </div>
                <div className="text-lg text-gray-400">August 2026</div>
              </div>
              <ul className="list-disc ml-6 mt-2 text-gray-200">
                <li>
                  Involved in developing microservices using Java and Spring
                  Boot, with API testing, debugging, and database operations.
                </li>
                {/* <li>
                  Testing and validating APIs using Postman, participating in
                  debugging, issue resolution, and performance improvements.
                </li> */}
              </ul>
            </div>
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                <div>
                  <div className="flex items-center gap-2 py-2 rounded-lg shadow-md transition-all duration-300">
                    <img
                      src="/images/cognizant.png"
                      className="w-10 h-10 object-contain rounded-2xl"
                    />
                    <span className="text-white text-2xl font-semibold">
                      Cognizant
                    </span>
                  </div>
                  <div className="text-teal-400 font-medium">
                    GenC Intern (Internship)
                  </div>
                </div>
                <div className="text-lg text-gray-400">March - May 2026</div>
              </div>
              <ul className="list-disc ml-6 mt-2 text-gray-200">
                <li>
                  Contributing to microservices-based enterprise applications
                  using Java, Spring Boot, JDBC, Hibernate, REST APIs, SQL.
                </li>
                <li>
                  Involved in developing microservices using Java and Spring
                  Boot, with API testing, debugging, and database operations.
                </li>
                <li>
                  Testing and validating APIs using Postman, participating in
                  debugging, issue resolution, and performance improvements.
                </li>
              </ul>
            </div>
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                <div>
                  <div className="text-2xl font-semibold"> </div>
                  <div className="flex items-center gap-2 py-2 rounded-lg shadow-md transition-all duration-300">
                    <img
                      src="/images/ICEICO.png"
                      className="w-10 h-10 object-contain rounded-2xl"
                    />
                    <span className="text-white text-2xl font-semibold">
                      ICEICO Technologies
                    </span>
                  </div>
                  <div className="text-teal-400 font-medium">
                    Web Developer Trainee (Internship)
                  </div>
                </div>
                <div className="text-lg text-gray-400">Jan 2024</div>
              </div>
              <ul className="list-disc ml-6 mt-2 text-gray-200">
                <li>
                  Developed responsive, cross-browser layouts using HTML5, CSS3
                  (Flexbox), and Bootstrap to enhance mobile user experience.
                </li>
                <li>
                  Built dynamic interfaces with JavaScript (ES6+), reducing form
                  input errors through DOM manipulation and validation.
                </li>
                <li>
                  Created reusable CSS and JS components, streamlining
                  development and reducing code duplication.
                </li>
              </ul>
            </div>
          </section>

          {/* Studies */}
          <section id="studies" className="mb-8 scroll-mt-30">
            <h2 className="text-3xl font-bold mb-4">Studies</h2>
            <div className="text-lg text-gray-200">
              Bachelor of Technology in Computer Science and Engineering (2022 -
              2026)
              <br />
              Rashtrasant Tukadoji Maharaj Nagpur University (RTMNU), Nagpur
            </div>
          </section>

          {/* Skills */}
          <section id="skills" className="mb-8 scroll-mt-30">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Technical Skills
            </h2>
            <div className="flex gap-4 flex-wrap">
              {[
                { name: "HTML", img: "/images/Html.svg" },
                { name: "CSS", img: "/images/CSS.svg" },
                { name: "JavaScript", img: "/images/Js.png" },
                { name: "MongoDB", img: "/images/Mongo.svg" },
                { name: "React", img: "/images/React.svg" },
                { name: "Node.js", img: "/images/Nodejs.svg" },
                { name: "ExpressJs", img: "/images/ExpressJsLogo.png" },
                { name: "Java", img: "/images/Java.svg" },
                { name: "SpringBoot", img: "/images/springboot.png" },
                { name: "MySQL", img: "/images/MySql.svg" },
                // { name: "Next.js", img: "/images/Nextjs.svg" },
                { name: "Tailwind CSS", img: "/images/Tailwind.png" },
                { name: "Git", img: "/images/git.png" },
                { name: "GitHub", img: "/images/Github.png" },
                { name: "VScode", img: "/images/VScode.png" },
                { name: "Redux ToolKit", img: "/images/ReduxToolkit.png" },
                { name: "Docker", img: "/images/Docker.png" },
                { name: "CI/CD", img: "/images/CICD.png" },
              ].map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 border-1 border-cyan-950 hover:bg-[#0233487e] px-4 py-2 rounded-lg shadow-md transition-all duration-300"
                >
                  <img
                    src={skill.img}
                    alt={skill.name}
                    className="w-6 h-6 object-contain"
                  />
                  <span className="text-white font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
}
