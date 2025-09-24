"use client"

import { motion } from 'framer-motion'
import { Code2 } from 'lucide-react'

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-orange-50/50 to-yellow-100/50 dark:from-orange-950/50 dark:to-yellow-900/50">
      <div className="relative">
        {/* Animated background circles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.2
            }}
          >
            <div 
              className="h-32 w-32 rounded-full border-4 border-t-orange-500 dark:border-t-orange-400 border-transparent"
              style={{
                transform: `scale(${1 + i * 0.2})`
              }}
            />
          </motion.div>
        ))}

        {/* Center icon */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ 
            scale: [0.5, 1, 0.5],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative z-10 bg-white dark:bg-gray-900 rounded-full p-4 shadow-xl"
        >
          <Code2 className="w-8 h-8 text-orange-500 dark:text-orange-400" />
        </motion.div>
      </div>

      {/* Loading text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-1/4 text-center"
      >
        <h2 className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-2">
          Yükleniyor
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ...
          </motion.span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
            Muhteşem Bir Şey Hazırlanıyor
        </p>
      </motion.div>
    </div>
  )
}