"use client"

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ThemeToggle } from './theme-toggle'
import { iconComponents } from '@/components/my/iconList'
import { Menu, X } from 'lucide-react'

const Navigation = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  
  const links = [
    { href: '/', label: 'HAKKIMDA', icon: "user" },
    { href: '/skills', label: 'YETENEKLER', icon: "code" },
    { href: '/projects', label: 'PROJELER', icon: "laptop" },
    { href: '/career', label: 'KARİYER', icon: "briefcase" },
  ]

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg border-b border-orange-200/20 dark:border-orange-800/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <Link href="/" prefetch={true} className="flex items-center space-x-2">
              {iconComponents.terminal}
              <span className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                EREN AKBAŞ
              </span>
            </Link>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex space-x-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center space-x-1
                    ${pathname === link.href 
                      ? 'text-orange-600 dark:text-orange-400' 
                      : 'text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400'
                    }`}
                >
                  {iconComponents[link.icon]}
                  <span>{link.label}</span>
                  {pathname === link.href && (
                    <motion.span
                      layoutId="underline"
                      className="absolute left-0 right-0 bottom-0 h-0.5 bg-orange-600 dark:bg-orange-400"
                    />
                  )}
                </Link>
              ))}
            </div>
            <ThemeToggle />
          </div>

          {/* Mobile Navigation Button */}
          <div className="flex md:hidden items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-10 w-10" />
              ) : (
                <Menu className="h-10 w-10" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <div
              className="md:hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-colors
                      ${pathname === link.href
                        ? 'bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-orange-900/10 hover:text-orange-600 dark:hover:text-orange-400'
                      }`}
                  >
                    {iconComponents[link.icon]}
                    <span>{link.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navigation;