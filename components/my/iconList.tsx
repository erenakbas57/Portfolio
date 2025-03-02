"use client";
import {
  Code2,
  Database,
  Cloud,
  Linkedin,
  Mail,
  Github as Git,
  Briefcase,
  GraduationCap,
  ExternalLink,
  Users,
  Calendar,
  GitBranch,
  Star,
  Menu,
  X,
  Terminal,
  User,
  Sparkles
} from "lucide-react";
import { JSX } from "react";

import { 
  FaLaptopCode, FaReact, FaCss3Alt, FaHtml5, 
  FaPython as Py, FaJava as Java, FaPhp as Php, FaLaravel as Laravel, FaVuejs as Vue, FaAngular as Angular,
  FaSwift as Swift, FaRust as Rust, FaDocker as Docker,  FaGitAlt as GitAlt, FaLinux as Linux,
  FaWindows as Windows, FaApple as Apple, FaAndroid as Android, FaAws as AWS, FaGoogle as Google, FaCloudflare as Cloudflare,
  FaGithub as Github, FaGitlab as Gitlab, FaBitbucket as Bitbucket, FaCuttlefish as C,
} from "react-icons/fa";

import { SiTypescript, SiJavascript, SiCplusplus, SiGo, SiKotlin, SiTensorflow as Tensorflow, SiDjango as Django, SiFlask as Flask,
  SiSpring as Spring, SiExpress as Express, SiNestjs as Nestjs, SiTailwindcss as Tailwind, SiBootstrap as Bootstrap,
  SiRedux as Redux, SiGraphql as Graphql, SiMongodb as MongoDB, SiMysql as MySQL, SiPostgresql as PostgreSQL, SiSqlite as SQLite,
  SiFirebase as Firebase, SiSupabase as Supabase, SiPrisma as Prisma, SiJest as Jest, SiMocha as Mocha, SiVite as Vite,
  SiWebpack as Webpack, SiBabel as Babel, SiElectron as Electron, SiSvelte as Svelte, SiNuxtdotjs as Nuxt, SiNextdotjs as Next,
  SiRemix as Remix, SiWebassembly as WebAssembly, SiElixir as Elixir, SiHaskell as Haskell, SiPytorch as Pytorch, SiNumpy as Numpy,
  SiPandas as Pandas, SiOpenai as OpenAI
} from "react-icons/si";

export const iconComponents: { [key: string]: JSX.Element } = {
  menu: <Menu className="h-6 w-6" />,
  close: <X className="h-6 w-6" />,
  terminal: <Terminal className="h-10 w-10  " />,
  laptop: <FaLaptopCode className="h-10 w-10" />,
  user: <User className="h-10 w-10" />,
  briefcase: <Briefcase className="h-10 w-10" />,
  users: <Users className="h-6 w-6" />,
  calendar: <Calendar className="h-6 w-6" />,
  star: <Star className="h-6 w-6" />,
  github: <Git className="h-6 w-6" />,
  linkedin: <Linkedin className="h-6 w-6" />,
  mail: <Mail className="h-6 w-6" />,
  externalLink: <ExternalLink className="h-6 w-6" />,
  graduationCap: <GraduationCap className="h-10 w-10" />,
  code: <Code2 className="h-10 w-10" />,
  database: <Database className="h-6 w-6" />,
  cloud: <Cloud className="h-6 w-6" />,
  gitBranch: <GitBranch className="h-6 w-6" />,
  design : <Sparkles className="h-6 w-6" />,
  
  // Programlama Dilleri
  python: <Py className="text-yellow-500" />,
  java: <Java className="text-red-500" />,
  javascript: <SiJavascript className="text-yellow-300" />,
  typescript: <SiTypescript className="text-blue-500" />,
  php: <Php className="text-purple-500" />,
  c: <C className="text-blue-700" />,
  cpp: <SiCplusplus className="text-blue-600" />,
  go: <SiGo className="text-blue-400" />,
  kotlin: <SiKotlin className="text-purple-400" />,
  swift: <Swift className="text-orange-500" />,
  rust: <Rust className="text-orange-600" />,
  elixir: <Elixir className="text-purple-700" />,
  haskell: <Haskell className="text-blue-700" />,
  css: <FaCss3Alt className="text-blue-500" />,
  html: <FaHtml5 className="text-orange-500" />,

  // Frameworkler & Kütüphaneler
  react: <FaReact className="text-blue-500" />,
  nextjs: <Next className="text-gray-700" />,
  vue: <Vue className="text-green-500" />,
  nuxt: <Nuxt className="text-green-500" />,
  angular: <Angular className="text-red-600" />,
  svelte: <Svelte className="text-orange-500" />,
  remix: <Remix className="text-black" />,
  django: <Django className="text-green-500" />,
  flask: <Flask className="text-gray-500" />,
  spring: <Spring className="text-green-600" />,
  express: <Express className="text-gray-700" />,
  nestjs: <Nestjs className="text-red-500" />,
  graphql: <Graphql className="text-pink-500" />,
  tailwind: <Tailwind className="text-blue-500" />,
  bootstrap: <Bootstrap className="text-purple-600" />,
  electron: <Electron className="text-blue-500" />,

  // Veritabanları
  mongodb: <MongoDB className="text-green-500" />,
  mysql: <MySQL className="text-blue-500" />,
  postgresql: <PostgreSQL className="text-blue-700" />,
  sqlite: <SQLite className="text-gray-500" />,
  firebase: <Firebase className="text-yellow-500" />,
  supabase: <Supabase className="text-green-500" />,
  prisma: <Prisma className="text-blue-500" />,

  // DevOps ve Bulut Teknolojileri
  docker: <Docker className="text-blue-500" />,
  aws: <AWS className="text-orange-500" />,
  googlecloud: <Google className="text-blue-500" />,
  cloudflare: <Cloudflare className="text-orange-500" />,

  // Diğer Teknolojiler
  tensorflow: <Tensorflow className="text-orange-400" />,
  pytorch: <Pytorch className="text-red-500" />,
  numpy: <Numpy className="text-blue-500" />,
  pandas: <Pandas className="text-gray-500" />,
  openai: <OpenAI className="text-blue-400" />,
};

