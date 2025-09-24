"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Experience } from "@/model/model";
import { iconComponents } from "./iconList";

interface ExperienceCardProps {
  experience: Experience; // props arayüzü
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) =>{
  return (
    <div className="ml-16">
      <Card className={`border-l-4 border-r-2 border-y-2 ${experience.border_color}`}>
        <CardHeader>
          <CardTitle className={`flex items-center gap-2 ${experience.text_color}`}>
            {iconComponents[experience.icon]}
            {experience.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-xl text-black-700 dark:text-gray-300">
                {experience.organization}
              </span>
              <span className="text-md font-semibold  text-gray-500 dark:text-gray-400">
                {experience.period}
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              {
                experience.description.map((line) => (
                  <span >
                    {line}
                    <br />
                  </span>
                ))  
              }
            </p>
            <div className="flex flex-wrap gap-2">
              {experience.skills.map(skill => (
                <span
                  key={skill}
                  className="px-2 py-1 bg-orange-100 dark:bg-orange-900/50 text-orange-600 dark:text-orange-400 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExperienceCard;
