import React, { useState, useEffect, useMemo } from "react";
import "../App.css";
import BlurText from "../blocks/TextAnimations/BlurText/BlurText";
import LightRays from "../blocks/Backgrounds/LightRays/LightRays";
import MagicBento from "../blocks/Components/MagicBento/MagicBento";
import Carousel from "../blocks/Components/Carousel/Carousel";
import ShinyText from "../blocks/TextAnimations/ShinyText/ShinyText";
import Navbar from "../blocks/Components/Navbar";
import Footer from "../blocks/Components/Footer";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

function Landingpage() {
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
      title: "Geolocation & Media",
      description: "Mapbox for location, Cloudinary for images",
      label: "Integration",
      image: "/images/Nodejs.svg",
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
      title: "Cloud Integration",
      description: "AWS S3, EC2, Amplify for scalable storage & deployment",
      label: "GitForge",
      image: "/images/Github.png",
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
  // Use a smaller base width for mobile to ensure proper display
  const carouselWidth =
    windowWidth < 640
      ? Math.min(300, windowWidth - 60)
      : Math.min(500, windowWidth - 80);
  const imageHeight =
    windowWidth < 640
      ? carouselWidth * 0.55
      : Math.min(280, carouselWidth * 0.7);

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateIdAdmin = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_ADMIN;
    const templateIdUser = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_USER;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Send email to you
    emailjs
      .send(
        serviceId,
        templateIdAdmin,
        {
          fullname: formData.fullname,
          email: formData.email,
          message: formData.message,
        },
        publicKey
      )
      .then(
        () => {
          setStatus("Message sent successfully to Pratham!");
          setFormData({ fullname: "", email: "", message: "" });
          setLoading(false);
        },
        (error) => {
          setStatus("Failed to send message: " + error.text);
          setLoading(false);
        }
      );

    // Send auto-reply to sender
    emailjs.send(
      serviceId,
      templateIdUser,
      {
        fullname: formData.fullname,
        email: formData.email,
        message: formData.message,
      },
      publicKey
    );
  };

  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <div className="relative w-full min-h-[100vh] sm:min-h-[800px] overflow-hidden">
        {/* Memoized LightRays with persistent seed to prevent glitchy reloads */}
        <LightRays
          key="static-lightrays" // Static key prevents recreation
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
        {/* Empty dependency array ensures it's only created once */}
        <div className="absolute md:mt-10 md:px-50 px-6 top-0 left-0 w-full h-full flex flex-col items-center justify-center z-10">
          <BlurText
            text="Transforming ideas into Reality"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-6xl sm:text-6xl md:text-8xl font-bold glow text-white justify-center text-center"
          />
          <button className="mt-8 px-5 py-2 border border-gray-600 rounded-full bg-black/30 backdrop-blur text-sm font-medium flex items-center gap-2 text-white hover:border-white">
            <span>⚡</span> Code That Creates Change
          </button>
          {/* Changed from p to div to fix HTML nesting error */}
          <div className="mt-10 mb-4 text-lg md:text-2xl glow text-white max-w-3xl px-4 text-center leading-relaxed">
            <ShinyText
              text=" I'm Pratham, a Full stack developer passionate about building
            impactful solutions with MERN, Java, and cloud technologies. I love
            solving problems and collaborating on innovative projects."
              disabled={false}
              speed={3}
              className="custom-class"
            />
          </div>
          <div className="flex gap-5 mt-5  justify-center">
            <a
              href="https://drive.google.com/file/d/1l3kQH2XV5BgrlCW0dpBJPm_gDSPEj1Rp/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-full border border-gray-600 text-gray-300 hover:border-white transition inline-flex items-center cursor-pointer"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                ></path>
              </svg>
              Download CV
            </a>
          </div>
        </div>
      </div>

      {/* Magic Bento Section */}
      <section className="flex flex-col items-center  px-4">
        <motion.h2
          className="text-3xl font-bold text-white mb-8 md:mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          My Skills & Technologies
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier easing
          }}
          viewport={{ once: true, margin: "-50px" }}
        >
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
        </motion.div>
      </section>

      {/* Projects Gallery Section */}
      <section className="flex flex-col items-center w-full mx-auto mt-15 px-4">
        {/* All Projects in One Carousel */}
        <div className="mt-6 md:mt-10 w-full max-w-4xl px-0 sm:px-4">
          <h3 className="text-3xl font-bold text-white mb-8 md:mb-10 text-center">
            Featured Projects
          </h3>
          <div className="flex justify-center w-full">
            <div className="w-full max-w-[500px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[800px] px-0 sm:px-4 overflow-visible">
              <Carousel
                items={projectCarouselItems}
                baseWidth={carouselWidth}
                imageHeight={imageHeight}
                autoplay={true}
                autoplayDelay={4000}
                pauseOnHover={true}
                loop={true}
                round={false}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="flex justify-center items-center min-h-[60vh] md:min-h-[40vh] py-10 px-10 bg-gradient-to-br mt-10 mb-10">
        <div className="w-full max-w-4xl rounded-2xl shadow-xl flex flex-col md:flex-row overflow-hidden border-1 border-blue-950">
          {/* Illustration */}
          <div className="md:w-1/2 relative h-64 md:h-auto flex items-center justify-center bg-gradient-to-br p-0">
            <div className="w-full h-full flex items-center justify-center bg-white p-0">
              <img
                src="/images/paper_airplane_send.jpg"
                alt="Paper Plane"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          {/* Form Section */}
          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-white mb-2 text-center md:text-left">
              CONTACT US
            </h3>
            {/* <p className="mb-2 text-gray-700 text-center md:text-left">
              Or reach out manually to{" "}
              <a
                href="mailto:prathampotdar.contact@gmail.com"
                className="text-blue-600 font-semibold hover:underline"
              >
                prathampotdar.contact@gmail.com
              </a>
            </p> */}
            <form onSubmit={sendEmail} className="space-y-4 mt-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white/80"
                >
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 w-full p-2 border border-white/text-white/80 rounded-lg focus:outline-none focus:ring-2 focus:ring-white-400 transition"
                />
                <span className="text-xs text-white-500 mt-1 block">
                  We'll never share your email with anyone else.
                </span>
              </div>
              <div>
                <label
                  htmlFor="fullname"
                  className="block text-sm font-medium text-white/80"
                >
                  Your name
                </label>
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  required
                  minLength="3"
                  value={formData.fullname}
                  onChange={handleChange}
                  className="mt-1 w-full p-2 border border-white/text-white/80 rounded-lg focus:outline-none focus:ring-2 focus:ring-white-400 transition"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white/80"
                >
                  Your message
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  minLength="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 w-full p-2 border border-white/text-white/80 rounded-lg h-24 resize-none focus:outline-none focus:ring-2 focus:ring-white-400 transition"
                />
              </div>
              <button
                type="submit"
                className={`w-full bg-white-500 text-white py-2 rounded-lg bg-blue-600 hover:bg-blue-800 transition flex items-center justify-center gap-2 ${
                  loading ? "opacity-70 cursor-not-allowed" : ""
                }`}
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <img src="/images/paper-plane.png" alt="Send" className="w-5 h-5" />
                    Send Message
                  </span>
                )}
              </button>
              <p className="text-center text-sm mt-2 text-teal-600 font-semibold">{status}</p>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Landingpage;
