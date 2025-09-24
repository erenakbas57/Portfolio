// components/Career.tsx

import { motion } from 'framer-motion';
import ExperienceCard from '@/components/my/experienceCard';
import {experiences} from '@/data/data';


export default function Career() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div >
        <h1 
          className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-6"
        >
          KARİYER
        </h1>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-orange-200 dark:bg-orange-800" />

          <div className="space-y-8">
            {experiences.map((experience) => (
              <div
                key={experience.title}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-orange-500 dark:bg-orange-400 z-10" />
                
                <ExperienceCard  experience={experience} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
