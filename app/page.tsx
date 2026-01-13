"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Globe, Users, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
}

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-32 px-4 md:px-8 bg-gradient-to-br from-background via-background to-primary/5">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <h1 className="text-4xl md:text-6xl font-bold text-balance text-foreground mb-4">
              Your Gateway to Global <span className="text-primary">Education</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
              Connect with top universities worldwide and find the perfect program for your educational journey
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/dashboard">
              <Button size="lg" className="w-full sm:w-auto">
                Explore Dashboard <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
              Book Free Demo
            </Button>
          </motion.div>

          {/* Stats Section */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              { icon: Globe, label: "Countries", value: "150+" },
              { icon: Users, label: "Universities", value: "5000+" },
              { icon: Zap, label: "Students Placed", value: "10K+" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg"
                whileHover={{ y: -4 }}
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                <p className="text-3xl font-bold text-primary">{stat.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32 px-4 md:px-8">
        <motion.div
          className="max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Global Way?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Counseling",
                description: "Get personalized guidance from education experts with years of experience",
                icon: "🎓",
              },
              {
                title: "Global Network",
                description: "Access to thousands of universities and educational institutions worldwide",
                icon: "🌍",
              },
              {
                title: "Success Stories",
                description: "Join thousands of successful students who achieved their dream education",
                icon: "⭐",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="p-8 rounded-lg bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all"
                whileHover={{ y: -4 }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-primary text-primary-foreground">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg mb-8 opacity-90">
            Join thousands of students who are already exploring their educational opportunities with Global Way
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link href="/login">
              <Button size="lg" variant="secondary" className="hover:bg-secondary/90">
                Get Started Now
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  )
}
