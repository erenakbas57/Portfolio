"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";

import { Button } from "../ui/button";
import { Project } from "@/model/model";
import { iconComponents } from "./iconList";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

type ProjectDialogProps = {
  project: Project | null;
  onClose: () => void;
};

const ProjectDialog: React.FC<ProjectDialogProps> = ({ project, onClose }) => {
  if (!project) return null;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === project.image.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.image.length - 1 : prev - 1
    );
  };

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
          <div className=" bg-gray-100 flex items-center justify-center p-1">
            <div className="relative h-64 w-full max-w-2xl rounded-lg overflow-hidden group">
              <img
                src={project.image[currentImageIndex]}
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                className="object-cover w-full h-full transition-transform duration-500"
              />

              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-orange-400/50 hover:bg-orange-600/70 text-white p-2 rounded-full transition-opacity opacity-0 group-hover:opacity-100"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-orange-400/50 hover:bg-orange-600/70 text-white p-2 rounded-full transition-opacity opacity-0 group-hover:opacity-100"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>

              {/* Image Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {project.image.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentImageIndex === index
                        ? "bg-white w-4"
                        : "bg-white/50"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              {iconComponents.calendar}
              <span>Tarih: {project.lastUpdated}</span>
            </div>
          </div>

          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-400 whitespace-pre-line">
              {project.longDescription}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-orange-600 dark:text-orange-400">
              Özellikler
            </h3>
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
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-orange-600 dark:text-orange-400">
              Kazanımlar
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.learnings.map((learning, index) => (
                <li
                  key={learning}
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
                >
                  {iconComponents.code}
                  {learning}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-4">
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
            {   project.demo && (
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
            )}
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDialog;
