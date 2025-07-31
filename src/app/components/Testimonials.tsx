import React from "react";
import { Card } from "../components/ui/card";
import { CardContent } from "../components/CardContent"; 

const testimonials = [
  {
    name: "Nia Marana",
    role: "CEO, Maraneea Shop",
    quote:
      <p>Rafli is a great full stack developer. He knows what to do, tactical, fast, precise, and always delivers under pressure.</p>
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">Testimonials</h2>

      <div className="max-w-2xl mx-auto space-y-6">
        {testimonials.map((item, index) => (
          <Card key={index}>
            <CardContent>
              <h3 className="text-xl font-semibold text-center">{item.name}</h3>
              <p className="text-sm text-gray-500 mb-4 text-center">{item.role}</p>
              <p className="italic text-gray-700 text-center">"{item.quote}"</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}