"use client";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { motion } from 'framer-motion'

import { Button } from "../ui/button";
import { Project } from "@/model/model";
import { iconComponents } from "./iconList";

type ProjectDialogProps = {
  project: Project | null;
  onClose: () => void;
};

const ProjectDialog: React.FC<ProjectDialogProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-orange-600 dark:text-orange-400 flex items-center gap-2">
            {project.title}
          </DialogTitle>
        </DialogHeader>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-6"
        >
          <div className="relative h-64 rounded-lg overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              {iconComponents.calendar}
              <span>Updated {project.lastUpdated}</span>
            </div>
          </div>

          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-400 whitespace-pre-line">
              {project.longDescription}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-orange-600 dark:text-orange-400">Key Features</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.features.map((feature, index) => (
                <li
                  key={feature}
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
                >
                  {iconComponents.code}
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-4">
            <Button asChild>
              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                {iconComponents.github}
                Projeye Git
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a 
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                {iconComponents.externalLink}
                Demo Linki
              </a>
            </Button>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDialog;
