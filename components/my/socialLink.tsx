"use client";

import { socialLinks } from '@/data/data'
import { motion } from 'framer-motion'
import React from 'react'
import { iconComponents } from './iconList'

const SocialCard: React.FC = () => {
  return (
    <div className="flex justify-center gap-4 mt-3">
    {socialLinks.map((social, index) => (
      <motion.a
        key={index}
        href={social.url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 flex items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900/50 text-orange-600 dark:text-orange-400 hover:bg-orange-200 dark:hover:bg-orange-800 transition-all duration-300 shadow-md"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.span
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          {iconComponents[social.icon]}
        </motion.span>
      </motion.a>
    ))}
  </div>
  )
}

export default SocialCard;