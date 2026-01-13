"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Menu, X, User, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "#about",
    submenu: [
      { label: "Our Story", href: "#story" },
      { label: "Team", href: "#team" },
      { label: "Careers", href: "#careers" },
    ],
  },
  {
    label: "Universities",
    href: "#universities",
    submenu: [
      { label: "Browse All", href: "#browse" },
      { label: "Rankings", href: "#rankings" },
      { label: "Programs", href: "#programs" },
    ],
  },
  {
    label: "Countries",
    href: "#countries",
    submenu: [
      { label: "Explore", href: "#explore" },
      { label: "Guides", href: "#guides" },
      { label: "Visas", href: "#visas" },
    ],
  },
  {
    label: "Services",
    href: "#services",
    submenu: [
      { label: "Counseling", href: "#counseling" },
      { label: "Application", href: "#application" },
      { label: "Support", href: "#support" },
    ],
  },
  {
    label: "Success",
    href: "#success",
    submenu: [
      { label: "Stories", href: "#stories" },
      { label: "Stats", href: "#stats" },
      { label: "Events", href: "#events" },
    ],
  },
  {
    label: "Contact",
    href: "#contact",
  },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label)
  }

  return (
    <nav className="sticky top-0 z-50 w-full bg-background border-b border-border">
      {/* Top bar */}
      <div className="hidden md:flex items-center justify-between px-4 py-2 bg-secondary text-secondary-foreground text-sm">
        <div className="flex items-center gap-6">
          <span>📞 Contact Your Nearest Centre</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="#" className="hover:underline">
            Our Centres
          </Link>
          <Button variant="outline" size="sm" className="bg-yellow-400 text-black border-0 hover:bg-yellow-500">
            Free Demo
          </Button>
          <Link href="/login" className="flex items-center gap-1 hover:underline">
            <span className="w-2 h-2 rounded-full bg-red-500"></span>
            Student Login
          </Link>
        </div>
      </div>

      {/* Main navbar */}
      <div className="flex items-center justify-between px-4 md:px-8 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-primary flex-shrink-0">
          Global Way
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <div key={item.label} className="relative group">
              <button className="flex items-center gap-1 hover:text-primary transition-colors">
                <span>{item.label}</span>
                {item.submenu && <ChevronDown size={16} className="group-hover:rotate-180 transition-transform" />}
              </button>

              {/* Desktop Dropdown */}
              {item.submenu && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 mt-0 w-48 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                >
                  {item.submenu.map((subitem) => (
                    <Link
                      key={subitem.label}
                      href={subitem.href}
                      className="block px-4 py-3 hover:bg-primary/10 hover:text-primary first:rounded-t-lg last:rounded-b-lg transition-colors"
                    >
                      {subitem.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Right side - Desktop */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="relative">
            <button
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-border hover:bg-muted transition-colors"
            >
              <User size={18} />
              <span>Account</span>
              <ChevronDown size={16} className={`transition-transform ${isUserMenuOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {isUserMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg"
                >
                  <Link href="/dashboard" className="block px-4 py-3 hover:bg-primary/10 hover:text-primary">
                    Dashboard
                  </Link>
                  <Link href="/profile" className="block px-4 py-3 hover:bg-primary/10 hover:text-primary">
                    Profile
                  </Link>
                  <button className="w-full text-left px-4 py-3 hover:bg-destructive/10 hover:text-destructive flex items-center gap-2">
                    <LogOut size={16} />
                    Logout
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-border bg-card"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <div key={item.label}>
                  <button
                    onClick={() => item.submenu && toggleDropdown(item.label)}
                    className="w-full flex items-center justify-between px-4 py-3 hover:bg-muted rounded-lg transition-colors font-medium"
                  >
                    <span>{item.label}</span>
                    {item.submenu && (
                      <motion.div
                        animate={{ rotate: openDropdown === item.label ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown size={18} />
                      </motion.div>
                    )}
                  </button>

                  {/* Mobile Submenu */}
                  <AnimatePresence>
                    {item.submenu && openDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.label}
                            href={subitem.href}
                            className="block px-8 py-2 hover:bg-primary/10 hover:text-primary transition-colors"
                          >
                            {subitem.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <div className="border-t border-border pt-4 mt-4 space-y-2">
                <Link
                  href="/dashboard"
                  className="block px-4 py-3 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"
                >
                  Dashboard
                </Link>
                <Link
                  href="/login"
                  className="block px-4 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Login
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
