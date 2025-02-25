"use client";


import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { motion } from "framer-motion";
import { skills } from "@/data/data";
import { iconComponents } from "./iconList";


export default function CoreSkill() {

  return (
    <>
      <h2 className="text-2xl font-semibold text-orange-600 dark:text-orange-400 mb-6">
        Ana Yetenekler
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="h-full"
          >
            <Card className="h-full border-t-4 border-t-orange-500 dark:border-t-orange-400 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className={`flex items-center gap-2 ${skill.color}`}>
                  {iconComponents[skill.icon]}
                  {skill.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  {skill.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </>
  );
}
