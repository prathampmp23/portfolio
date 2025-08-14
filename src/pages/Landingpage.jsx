import BlurText from "../blocks/TextAnimations/BlurText/BlurText";
import LightRays from "../blocks/Backgrounds/LightRays/LightRays";
import MagicBento from "../blocks/Components/MagicBento/MagicBento";
import Carousel from "../blocks/Components/Carousel/Carousel";
import Navbar from "../blocks/Components/Navbar";
import Footer from "../blocks/Components/Footer";
import ScrollStack, {
  ScrollStackItem,
} from "../blocks/Components/ScrollStack/ScrollStack";
import React, { useState, useEffect } from "react";

function Landingpage() {
  // Dummy project images
  const projectImages = [
    "/images/ApnaVideo.png",
    "/images/GitForge.png",
    "/images/WanderLust.png",
  ];
  
  // Core technologies data for MagicBento
  const techStackData = [
    {
      color: "#060010",
      title: "Real-time Video Chat",
      description: "Connect instantly with WebRTC & Socket.IO",
      label: "ApnaVideo",
      image: "/images/React.svg",
    },
    {
      color: "#060010",
      title: "Authentication",
      description: "JWT & Firebase for secure access",
      label: "Security",
      image: "/images/Firebase.png",
    },
    {
      color: "#060010",
      title: "Cloud Integration",
      description: "AWS S3, EC2, Amplify for scalable storage & deployment",
      label: "GitForge",
      image: "/images/Github.png",
    },
    {
      color: "#060010",
      title: "Collaboration",
      description: "Simulate Git commands & teamwork",
      label: "Version Control",
      image: "/images/git.png",
    },
    {
      color: "#060010",
      title: "Room Rental Platform",
      description: "Browse, list, and review with MERN stack",
      label: "Wanderlust",
      image: "/images/Mongo.svg",
    },
    {
      color: "#060010",
      title: "Geolocation & Media",
      description: "Mapbox for location, Cloudinary for images",
      label: "Integration",
      image: "/images/Nodejs.svg",
    },
  ];

  // Project data for carousel
  const projectsData = [
    {
      title: "ApnaVideo",
      description: "Video streaming platform with user authentication",
      id: 1,
      image: "/images/ApnaVideo.png",
    },
    {
      title: "GitForge",
      description: "Git repository management system",
      id: 2,
      image: "/images/GitForge.png",
    },
    {
      title: "WanderLust",
      description: "Travel planning and booking application",
      id: 3,
      image: "/images/WanderLust.png",
    },
  ];

  // Project carousel items - combined version showing all project images in one carousel
  const projectCarouselItems = [
    {
      title: "ApnaVideo",
      description: "Video streaming platform with user authentication",
      id: 1,
      image: "/images/ApnaVideo.png",
    },
    {
      title: "GitForge",
      description: "Git repository management system",
      id: 2,
      image: "/images/GitForge.png",
    },
    {
      title: "WanderLust",
      description: "Travel planning and booking application",
      id: 3,
      image: "/images/WanderLust.png",
    },
  ];

  // EmailJS/Formspree integration placeholder
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [windowWidth, setWindowWidth] = useState(500);

  useEffect(() => {
    // Handle window resize for responsive carousel
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set initial width
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate responsive dimensions
  const carouselWidth = Math.min(500, windowWidth - 40);
  const imageHeight = Math.min(250, carouselWidth * 0.6);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Integrate with EmailJS or Formspree here
    // Example: await emailjs.send(...)
    // setStatus("Message sent! You'll both receive a confirmation email.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <div className="relative w-full min-h-[600px] md:min-h-[750px] overflow-hidden bg-[#070210]">
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
          className="custom-rays"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
            pointerEvents: "none",
          }}
        />
        <div className="absolute mt-10 md:px-50 px-10 top-0 left-0 w-full h-full flex flex-col items-center justify-center z-10">
          <BlurText
            text="Transforming ideas into Reality"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-5xl md:text-8xl font-bold glow text-white justify-center"
          />
          <button className="mt-6 px-4 py-1.5 border border-gray-600 rounded-full bg-black/30 backdrop-blur text-sm font-medium flex items-center gap-2 text-white hover:border-white">
            <span>⚡</span> Code That Creates Change
          </button>
          <p className="mt-6 text-lg md:text-2xl glow text-white max-w-3xl">
            I'm Pratham, a full stack developer passionate about building
            impactful solutions with MERN, Java, and cloud technologies. I love
            solving problems and collaborating on innovative projects.
          </p>
          <div className="flex gap-4 mt-10 justify-center">
            <button className="px-6 py-3 rounded-full bg-gray-200 text-black font-semibold hover:bg-white transition">
              Get Started
            </button>
            <button className="px-6 py-3 rounded-full border border-gray-600 text-gray-300 hover:border-white transition">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Magic Bento Section */}
      <section className="flex flex-col items-center mt-6 md:mt-16 px-4">
        <h2 className="text-3xl font-bold text-white mb-4 md:mb-6 text-center">
          My Skills & Technologies
        </h2>
        <MagicBento
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={300}
          particleCount={12}
          glowColor="132, 0, 255"
          cardData={techStackData}
        />
      </section>

      {/* Projects Gallery Section */}
      <section className="max-w-5xl mx-auto mt-8 md:mt-16 px-4">
        {/* All Projects in One Carousel */}
        <div className="mt-6 md:mt-10">
          <h3 className="text-2xl font-bold text-white mb-4 md:mb-6 text-center">
            Featured Projects
          </h3>
          <div className="flex justify-center w-full overflow-hidden">
            <div className="w-full max-w-[500px]">
              <Carousel
                items={projectCarouselItems}
                baseWidth={carouselWidth}
                imageHeight={imageHeight}
                autoplay={true}
                autoplayDelay={3000}
                pauseOnHover={true}
                loop={true}
                round={false}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="max-w-xl mx-auto mt-8 md:mt-16 mb-12 md:mb-16 px-4">
        <h2 className="text-3xl font-bold text-white mb-4 md:mb-6 text-center">Connect with Me</h2>
        <form
          className="rounded-2xl shadow-lg p-4 md:p-6 flex flex-col gap-3 md:gap-4"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="px-4 py-2 rounded  text-white border border-gray-700 focus:outline-none"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="px-4 py-2 rounded  text-white border border-gray-700 focus:outline-none"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            className="px-4 py-2 rounded text-white border border-gray-700 focus:outline-none"
            rows={3}
          />
          <button
            type="submit"
            className="mt-1 px-6 py-2 rounded-2xl bg-teal-400 text-black font-semibold hover:bg-teal-500 transition"
          >
            Send
          </button>
          {status && <p className="text-green-400 mt-1">{status}</p>}
        </form>
        {/* <p className="text-gray-400 mt-4 text-sm">
          When you send a message, both you and I will receive an email
          confirmation about the connection.
        </p> */}
      </section>

      <Footer />
    </div>
  );
}

export default Landingpage;
