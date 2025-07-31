import React from 'react'

const Skills = () => {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left text-gray-700">
          <div>
            <h3 className="font-semibold">Front-End</h3>
            <ul className="list-disc ml-5">
              <li>HTML</li>
              <li>CSS</li>
              <li>TypeScript</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Next.js</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Back-End</h3>
            <ul className="list-disc ml-5">
              <li>Node.js</li>
              <li>Express</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Tools & DevOps</h3>
            <ul className="list-disc ml-5">
              <li>Git</li>
              <li>GitHub</li>
              <li>Backendless</li>
              <li>Vercel</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills