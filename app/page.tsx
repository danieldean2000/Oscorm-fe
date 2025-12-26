"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/header";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const features = [
    {
      title: "Next.js 15",
      description: "Latest version with App Router, Server Components, and optimized performance",
      icon: "⚡",
    },
    {
      title: "TypeScript",
      description: "Type-safe development with full IntelliSense support",
      icon: "📘",
    },
    {
      title: "Tailwind CSS",
      description: "Utility-first CSS framework for rapid UI development",
      icon: "🎨",
    },
    {
      title: "Framer Motion",
      description: "Production-ready animations with simple, powerful API",
      icon: "✨",
    },
    {
      title: "shadcn/ui",
      description: "Beautiful, accessible components built with Radix UI",
      icon: "🎯",
    },
    {
      title: "Ready to Build",
      description: "Everything configured and ready for production",
      icon: "🚀",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <Header />
      <motion.main
        className="container mx-auto px-4 py-16 pt-32"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.div
            className="inline-block mb-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-6xl">🎉</span>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            Welcome to Your
            <br />
            Next.js Project
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
            Your modern web development stack is ready. Built with the latest technologies
            for the best developer experience.
          </p>
          <motion.div
            className="flex gap-4 justify-center flex-wrap"
            variants={itemVariants}
          >
            <Button size="lg" className="text-lg px-8">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              View Docs
            </Button>
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-2 hover:border-blue-200 dark:hover:border-blue-800">
                <CardHeader>
                  <motion.div
                    className="text-4xl mb-2"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack Section */}
        <motion.div
          className="mt-20 text-center"
          variants={itemVariants}
        >
          <h2 className="text-3xl font-bold mb-8 text-slate-800 dark:text-slate-200">
            Powered By
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "shadcn/ui"].map(
              (tech) => (
                <motion.span
                  key={tech}
                  className="px-6 py-3 bg-white dark:bg-slate-800 rounded-full shadow-md text-slate-700 dark:text-slate-300 font-medium"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tech}
                </motion.span>
              )
            )}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          className="mt-20 text-center text-slate-600 dark:text-slate-400"
          variants={itemVariants}
        >
          <p className="text-sm">
            Edit <code className="bg-slate-200 dark:bg-slate-800 px-2 py-1 rounded">src/app/page.tsx</code> to get started
          </p>
        </motion.footer>
      </motion.main>
    </div>
  );
}
