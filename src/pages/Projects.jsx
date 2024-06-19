import React, { useState } from "react";
import ReactPaginate from "react-paginate";

import "./project.css";

import pro1Video from "../Assets/projects/pro1.mp4";
import pro2Video from "../Assets/projects/pro2.mp4";
import pro3Video from "../Assets/projects/pro3.mp4";
import pro4Video from "../Assets/projects/pro4.mp4";
import pro5Video from "../Assets/projects/pro5.mp4";
import pro6Video from "../Assets/projects/pro6.mp4";
import pro7Video from "../Assets/projects/pro7.mp4";
import pro8Video from "../Assets/projects/pro8.mp4";
import pro9Video from "../Assets/projects/pro9.mp4";
import pro10Video from "../Assets/projects/pro10.mp4";

const Projects = () => {
  const staticProjects = [
    // Add more static projects
  ];

  const dynamicProjects = [
    {
      title: "E-commerce Website",
      video: pro10Video,
      description: "Developed a responsive e-commerce website using MVC architecture with Express.js and Node.js for the backend, and EJS, HTML, CSS, JS, and Bootstrap for the frontend. Integrated with MongoDB, it features home, shop, cart, wishlist, search/filter options, PDF downloads, order placement with COD and Razorpay payments, wallet, multi-address management, OTP verification, and is hosted on GoDaddy and AWS EC2. in www.greengrove.today",
    },
    {
      title: "MERN Todo App",
      video: pro8Video,
      description: "Developed a comprehensive to-do app using the MERN stack, featuring React.js, CSS, and Bootstrap for the frontend, and Node.js with Express.js for the backend, connected to a MongoDB database. This app supports full CRUD operations, allowing users to create, read, update, and delete tasks. It offers a responsive and intuitive interface for managing tasks efficiently, utilizing state management and real-time updates for an optimal user experience.",
    },
    {
      title: "Admin Dashboard",
      video: pro6Video,
      description: "Built an admin dashboard using MVC architecture with Express.js and Node.js for the backend, and EJS, HTML, CSS, JS, and Bootstrap for a responsive frontend. Integrated with MongoDB, it features sales report downloads, category/product management, user/product blocking, and detailed sales analytics.additionally coupon management Banner Mannagement  and its hosted on GoDaddy and AWS EC2.in www.greengrove.today/admin",
    },
    {
      title: " Recipe Searching App",
      video: pro1Video,
      description: "Discover new culinary delights with our React.js-powered recipe searching app using Edamam APIs and react js (useEffect Hook , Axios)",
    },
    {
      title: "Blog Website",
      video: pro2Video,
      description: "Explore our vegetable shop blog website, crafted with HTML, CSS,JS and Bootstrap  for a responsive and visually appealing experience.",
    },
    {
      title: "React JS Todo App",
      video: pro3Video,
      description: "Manage your tasks efficiently with our React.js to-do app, featuring full CRUD operations and option to mark as completed powered by useState and useEffect hooks.",
    },
   
    {
      title: "Weather App",
      video: pro7Video,
      description: "Developed a dynamic weather app using React.js,integrating APIs for real-time weather data. .",
    },
    {
      title: "Uber clone",
      video: pro4Video,
      description: "Experience a sleek Uber clone, designed with HTML and CSS.(Static website)",
    },
    
    {
      title: "Netflix Clone",
      video: pro9Video,
      description: "Created a Netflix clone using React.js and the TMDB API to stream movies and TV shows. .",
    },
    {
      title: " Portfolio Website",
      video: pro5Video,
      description: "Designed and developed a responsive portfolio website with Bootstrap, HTML, and CSS, featuring five distinct pages: Home, About, Resume, Personal Details, and Contact.",
    },
    

    // Add more dynamic projects
  ];

  const allProjects = [...dynamicProjects, ...staticProjects];
  const projectsPerPage = 6; // Adjust this number based on how many projects you want per page
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const displayProjects = allProjects
    .slice(currentPage * projectsPerPage, (currentPage + 1) * projectsPerPage)
    .map((project, index) => (
      <div key={`${project.title}-${index}`} className="col-md-4 mb-4">
        <div className="project-card">
          {project.video ? (
            <video controls className="img-fluid">
              <source src={project.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              src={project.image}
              alt={project.title}
              className="img-fluid"
            />
          )}
          <h4 className="project-title">{project.title}</h4>
          <p className="project-description">{project.description}</p>
        </div>
      </div>
    ));

  const pageCount = Math.ceil(allProjects.length / projectsPerPage);

  return (
    <div className="projects">
      <div className="container">
        <h2 className="text-center mb-3">Projects</h2>
        <div className="row">{displayProjects}</div>
        <ReactPaginate
          previousLabel={currentPage > 0 ? "previous" : ""}
          nextLabel={currentPage < pageCount - 1 ? "next" : ""}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      </div>
    </div>
  );
};

export default Projects;
