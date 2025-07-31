import React from "react";
import { Card } from "../components/ui/card";
import { CardContent } from "../components/CardContent"; 

const testimonials = [
  {
    name: "Nia Marana",
    role: "CEO, Maraneea Shop",
    quote: `Rafli is the best designer I&apos;ve ever worked with. He&apos;s a real &quot;game-changer&quot;.`,
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
              <p className="italic text-gray-700 text-center" dangerouslySetInnerHTML={{ __html: item.quote }} />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
