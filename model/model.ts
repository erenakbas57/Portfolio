import { color } from "framer-motion";

export interface Project {
  title: string;
  description: string;
  longDescription: string;
  image: string[];
  tags: string[];
  github: string;
  demo: string;
  lastUpdated: string;
  features: string[];
  learnings: string[];
}

export interface Experience {
  type: string;
  title: string;
  organization: string;
  period: string;
  description: string[];
  icon: string;
  skills: string[];
  border_color: string;
  text_color: string;
}

export interface Tech {
  name: string;
  icon: string;
}

export interface Skill {
  icon: string;
  title: string;
  description: string[];
  color: string;
}

export interface Social {
  name: string;
  icon: string;
  iconName: string;
  url: string;
  bg_color: string;
  text_color: string;
  hover_color: string;
}