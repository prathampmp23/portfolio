import React, { useMemo } from "react";
import Navbar from "../blocks/Components/Navbar";
import Footer from "../blocks/Components/Footer";
import LightRays from "../blocks/Backgrounds/LightRays/LightRays";

export default function Project() {
  const projects = [
    {
      title: "ApnaVideo - Real-time video communication platform",
      description:
        "Developed ApnaVideo, a real-time video chat platform using WebRTC and Socket.IO with integrated messaging. Implemented JWT + Firebase Authentication for secure user sessions and access control. Built a responsive React.js frontend and a Node.js backend for signaling, session, and chat management. Ensured smooth peer-to-peer video calls using WebRTC, enabling direct media streaming without server relay.",
      image: "/images/ApnaVideo.png",
      repo: "https://github.com/prathampmp23/ApnaVideo",
      website: "https://apnavideofrontend-uwki.onrender.com/",
      techStack: [
        { name: "React.js", img: "/images/React.svg" },
        { name: "Node.js", img: "/images/Nodejs.svg" },
        { name: "Socket.IO", img: "/images/SocketIO.png" },
        { name: "WebRTC" },
        { name: "JWT", img: "/images/JWT.png" },
        { name: "Firebase", img: "/images/Firebase.png" },
      ],
      highlights: [
        "Real-time video chat & messaging",
        "Peer-to-peer video calls",
        "JWT + Firebase Authentication",
        "Responsive UI",
      ],
    },

    {
      title: "Wanderlust – A Full-Stack Room Rental Web Application",
      description:
        "Built Wanderlust, a full-stack room rental app with property listing, browsing, and review features using the MERN stack. Integrated Mapbox for geolocation, Cloudinary for image uploads, and implemented JWT + Firebase authentication with Joi validation. Designed a responsive frontend, structured backend with MVC (Node.js/Express), and deployed on Render.",
      image: "/images/WanderLust.png",
      repo: "https://github.com/prathampmp23/WanderLust",
      website: "https://wanderlust-s0an.onrender.com/",
      techStack: [
        { name: "React.js", img: "/images/React.svg" },
        { name: "Node.js", img: "/images/Nodejs.svg" },
        { name: "MongoDB", img: "/images/Mongo.svg" },
        { name: "ExpressJs", img: "/images/ExpressJs.png" },
        { name: "Mapbox", img: "/images/Mapbox.png" },
        { name: "Cloudinary", img: "/images/Cloudinary.png" },
        { name: "JWT", img: "/images/JWT.png" },
        { name: "Firebase", img: "/images/Firebase.png" },
      ],
      highlights: [
        "Room rental & reviews",
        "Geolocation & image upload",
        "JWT + Firebase authentication",
        "MVC backend",
      ],
    },
    {
      title: "GitForge – Git Command Simulation with AWS Integration",
      description:
        "Built a GitHub-like platform simulating Git operations (init, add, commit, push, etc.) with real-time file tracking and user-specific repositories. Integrated JWT authentication, AWS S3 for file storage, and EC2 for backend Git logic and file management. Developed a responsive React frontend with user dashboards, deployed via AWS Amplify.",
      image: "/images/GitForge.png",
      repo: "https://github.com/prathampmp23/GitForge-Backend",
      website: "https://main.d18lytpzktwkzj.amplifyapp.com/",
      techStack: [
        { name: "React.js", img: "/images/React.svg" },
        { name: "Node.js", img: "/images/Nodejs.svg" },
        { name: "AWS S3", img: "/images/AWS_S3.png" },
        { name: "JWT", img: "/images/JWT.png" },
        { name: "EC2", img: "/images/EC2.png" },
        { name: "Amplify", img: "/images/AWS.png" },
      ],
      highlights: [
        "Git command simulation",
        "AWS S3 file storage",
        "JWT authentication",
        "User dashboards",
      ],
    },
  ];
  // Memoized LightRays to prevent re-renders and glitches
  const lightRaysBackground = useMemo(() => {
    return (
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
          key="project-lightrays"
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          seed={12345} // Consistent seed to prevent glitchy reloads
        />
      </div>
    );
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#070210]">
      <Navbar />
      {lightRaysBackground}
      <section className="relative z-10 px-5 sm:px-6 md:px-20 mt-5 py-16 text-white">
        <h3 className="text-3xl mt-10 font-bold text-white mb-8 md:mb-10 text-center">
          Featured Projects
        </h3>

        <div className="flex flex-col gap-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border-cyan-950 border-1 rounded-2xl shadow-2xl p-0 flex flex-col md:flex-row items-stretch w-full max-w-4xl mx-auto bg-gradient-to-b from-[#181c24] to-[#0f1014]"
            >
              {/* Image Aside */}
              <div className="relative md:w-2/5 w-full flex-shrink-0 flex items-center justify-center bg-black/10  md:rounded-l-2xl md:rounded-tr-none">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto p-4 max-h-[400px] object-contain rounded-t-2xl md:rounded-none shadow-lg"
                />
                {/* Overlay links on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/60 rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none">
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-4 px-5 py-2 bg-white/10 text-white rounded-lg border border-white/20 hover:bg-white/20 text-base font-medium backdrop-blur"
                  >
                    View project <span className="ml-1">&rarr;</span>
                  </a>
                </div>
              </div>
              {/* Content Side */}
              <div className="flex-1 flex flex-col justify-between px-6 py-6">
                <div className="flex flex-row items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>
                <p className="text-gray-300 text-base mb-2">
                  {project.description}
                </p>
                {/* Tech Stack */}
                <div className="flex gap-2 flex-wrap mt-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech.name}
                      className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#203a43] text-sm text-white font-medium shadow"
                    >
                      {tech.img && (
                        <img
                          src={tech.img}
                          alt={tech.name}
                          className="w-5 h-5 object-contain"
                        />
                      )}
                      {tech.name}
                    </span>
                  ))}
                </div>
                {/* Core Functionality Highlights */}
                <div className="flex gap-2 flex-wrap mt-3">
                  {project.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full bg-[#0233487e] text-xs text-teal-300 font-semibold border border-cyan-900 shadow"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-10">
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-400 hover:bg-[#0233487e] border-1 border-cyan-950 p-2 rounded-xl text-sm font-medium"
                  >
                    GitHub Repo
                  </a>
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:bg-[#0233487e] border-1 border-cyan-950 p-2 rounded-xl text-sm font-medium"
                  >
                    Live Website
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
