"use client";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { iconComponents } from "./iconList";
import { Project } from "@/model/model";
import Image from "next/image";
import { useState } from "react";

type ProjectCardProps = {
  project: Project;
  onClick: () => void;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="h-full cursor-pointer" onClick={onClick}>
      <Card className="h-full flex flex-col overflow-hidden group">
        <div className="relative h-80 overflow-hidden">
          <Image
            src={project.image[0]}
            width={500}
            height={600}
            alt={project.title}
            priority
            className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <CardHeader>
          <CardTitle className="text-orange-600 dark:text-orange-400 group-hover:text-orange-500 transition-colors">
            {project.title}
          </CardTitle>
          <span className="text-md text-gray-500 font-medium hover:text-orange-900">
            [Detaylar İçin Tıklayınız]
          </span>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-orange-100 dark:bg-orange-900/50 text-orange-600 dark:text-orange-400 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
        <CardFooter className="mt-auto">
          <div className="flex gap-2">
            {project.github && (
              <Button variant="outline" size="sm" asChild>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  onClick={(e) => e.stopPropagation()}
                >
                  {iconComponents.github}
                  Projeye Git
                </a>
              </Button>
            )}

            {project.demo && (
              <Button variant="outline" size="sm" asChild>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  onClick={(e) => e.stopPropagation()}
                >
                  {iconComponents.externalLink}
                  Site Linki
                </a>
              </Button>
            )}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProjectCard;
