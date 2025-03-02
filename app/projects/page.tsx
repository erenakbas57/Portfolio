"use client";

import { useState } from "react";
import ProjectCard from "@/components/my/projectCard";
import ProjectDialog from "@/components/my/projectDialog";
import { Project } from "@/model/model";
import { projects } from "@/data/data";


export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);



  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <div>
          <h1
            className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-6"
          >
            PROJELER
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </div>

      <ProjectDialog
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
