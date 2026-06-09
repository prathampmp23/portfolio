// TechCurve.tsx
import "./TechCurveCSS.css";

export default function TechCurve() {
  // techStack.ts
  const techStack = [
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
  ];

  return (
    <section className="tech-curve-wrapper">
      <div className="tech-curve-fade" />

      <div className="tech-curve-track">
        {[...techStack, ...techStack].map((tech, index) => (
          <div className="tech-curve-item" key={index}>
            <img
              src={tech.img}
              alt={tech.name}
              loading="lazy"
              className="tech-curve-img"
            /> &nbsp;
            {/* Tech Name */}
            <span className="tech-curve-label">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
