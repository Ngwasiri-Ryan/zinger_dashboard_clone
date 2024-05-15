"use client";
import React, { useState } from 'react'
import styles from '../styles/projects.css'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { IoAddCircleOutline } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";

function Projects() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectName, setProjectName] = useState('');
  const [projectServer, setProjectServer] = useState('');
  const [projectDate, setProjectDate] = useState('');
  const [projects, setProjects] = useState([]);

  const handleDeleteProject = (index) => {
    const updatedProjects = projects.filter((_, i) => i !== index);
    setProjects(updatedProjects);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  //add project
  const handleAddProject = (e) => {
    e.preventDefault();
    setProjects([...projects, { name: projectName, server: projectServer, date: projectDate }]);
    handleCloseModal();
  };

  return (
    <div>
    <div  className={`projects_container ${isModalOpen ? 'modal-open' : ''}`}>
    <div className='project_heading'>
       <h1>Projects</h1>
       <div className='add_project' >
       <IoAddCircleOutline  className='icon' onClick={handleOpenModal} />
       <span>Add project</span>
       </div>
    </div>


<div className='project-holder'>
{projects.map((project, index) => (
    <div key={index} className='projects'>
      <div>
        <div className='project_name'>{project.name}</div>
        <div className='project_server'>{project.server}</div>
        <div className='project_date'>{project.date}</div>
      </div>
      <div className='icons'>
      <MdDelete className='icon' onClick={() => handleDeleteProject(index)} />
      </div>
    </div>
  ))}
</div>

    {isModalOpen && (
      <div className='modal'>
        <div className='modal-content'>
         <div className='project_heading'>
         <h2>Add Project</h2>
         <IoIosClose className='icon'  onClick={handleCloseModal} />
         </div>
          <form>
           <div className='input-box'>
           <label htmlFor="projectName"> Name:</label>
           <input type="text" id="projectName" value={projectName} onChange={(e) => setProjectName(e.target.value)} />
           </div>

           <div className='input-box'>
            <label htmlFor="projectServer">Server:</label>
            <input type="text" id="projectServer" value={projectServer} onChange={(e) => setProjectServer(e.target.value)} />
            </div>

            <div className='input-box'>
            <label htmlFor="projectDate"> Date:</label>
            <input type="date" id="projectDate" value={projectDate} onChange={(e) => setProjectDate(e.target.value)} />
            </div>

             <center>
            <button type="submit" onClick={handleAddProject}>Add Project</button>
            </center>
          </form>
        </div>
      </div>
    )} 

    </div>
    </div>
  )
}

export default Projects