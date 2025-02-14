"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)
    // Reset form after submission
    setFormData({ name: "", email: "", subject: "", message: "" })
    alert("Thank you for your message. We'll get back to you soon!")
  }

  return (
    <main className="min-h-screen bg-white dark:bg-[#0A0118] text-gray-900 dark:text-white overflow-hidden">
      <div className="relative">
        {/* Background gradient effects */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent opacity-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1 }}
        />
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-[128px]" />

        {/* Content */}
        <div className="relative max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">Contact Us</h1>
            <p className="mt-6 text-xl text-gray-500 dark:text-gray-400 max-w-3xl">
              Have a question or feedback? We'd love to hear from you. Get in touch with the FunQuotes team.
            </p>
          </motion.div>

          <motion.div
            className="mt-12 grid gap-8 md:grid-cols-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div>
              <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We're here to help and answer any question you might have. We look forward to hearing from you.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-emerald-500 mr-2" />
                  <span>support@funquotes.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-emerald-500 mr-2" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-emerald-500 mr-2" />
                  <span>123 Quote Street, Inspiration City, IN 12345</span>
                </div>
              </div>
            </div>
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
                </div>
                <Button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 text-white">
                  Send Message <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </motion.div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-4">Connect With Us</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Follow us on social media for daily inspiration and updates.
            </p>
            <div className="flex justify-center space-x-4">{/* Add your social media icons/links here */}</div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}

