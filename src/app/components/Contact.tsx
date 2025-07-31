'use client'
import React from 'react'

const Contact = () => {
  return (
    <section className="py-16 px-4 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <form className="max-w-md mx-auto space-y-4">
        <input
          type="text"
          placeholder="To: Muhammad Rafli Fajri"
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          placeholder="rafli.fajri@gmail.com"
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="From: Your Name"
          className="w-full p-2 border rounded"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-8 border rounded"
        ></textarea>
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </section>
  )
}

export default Contact