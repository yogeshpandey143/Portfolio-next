"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "NextJs Portfolio Website",
    description:
      "Explore my projects showcasing expertise in Java, Spring Boot, React, Next.js, and more.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/yogeshpandey143/Portfolio-next",
    previewUrl: "https://portfolio-next-rosy-six.vercel.app/",
  },
  {
    id: 2,
    title: "SR Wealth Elite Website",
    description:
      "Developed a financial dashboard using Next.js (frontend), Express.js (backend), and Firebase.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/dtstechindia/sr-wealth-elite-dashboard",
    previewUrl: "https://sr-wealth-elite-dashboard.vercel.app/",
  },
  {
    id: 3,
    title: "Accubemart E-commerce Application",
    description:
      "AcubeMart is an e-commerce platform specializing in bike parts and car accessories. Built with Next.js, Express.js, and MongoDB, it offers a seamless shopping experience with advanced search, filtering, and secure payment integration",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/dtstechindia/acubemart-frontend",
    previewUrl: "https://acubemart-frontend.vercel.app/",
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description: "Project 4 description",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "SnapTalk Social Media",
    description:
      "SnapTalk is an innovative social media platform designed to connect people and foster engaging online communities. The platform combines the power of modern web technologies to provide users with a seamless and secure social networking experience. Built using Spring Boot for the backend and React.js",
    image: "/images/projects/5.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/yogeshpandey143/snaptalk-spring-reactjs",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
