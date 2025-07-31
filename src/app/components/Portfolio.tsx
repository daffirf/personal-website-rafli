import React from 'react'

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">Portfolio</h2>
        <div className="bg-gray-50 p-6 rounded shadow">
          <h3 className="text-xl font-semibold">E-commerce Platform for Maraneea Shop</h3>
          <p className="text-sm text-gray-500 mb-2">
            <strong>Technologies:</strong> React, Next.js, Node.js
          </p>
          <p className="mb-2"><strong>Situation:</strong> Maraneea Shop needed a scalable, mobile-friendly e-commerce platform.</p>
          <p className="mb-2"><strong>Task:</strong> Build both front-end and back-end with real-time inventory and secure checkout.</p>
          <p className="mb-2"><strong>Action:</strong> Used React for UI, Node.js + Backendless for API, deployed with AWS and CI/CD pipeline.</p>
          <p><strong>Result:</strong> Online sales increased in 3 months, client praised speed and usability.</p>
        </div>
      </div>
    </section>
  )
}

export default Portfolio